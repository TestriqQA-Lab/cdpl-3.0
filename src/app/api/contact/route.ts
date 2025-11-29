import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getTemplatedEmail } from '@/lib/email-utils';
import { pushLeadToTeleCRM } from '@/lib/telecrm';
import { appendRowToSheet } from '@/lib/google-sheets';

// --- Configuration ---
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com';
const CC_EMAIL = process.env.CC_EMAIL;
const BCC_EMAIL = process.env.BCC_EMAIL;
const SMTP_FROM_EMAIL = process.env.SMTP_FROM_EMAIL || 'noreply@example.com';

// Placeholder for the brochure download link
// NOTE: User must replace this with the actual public URL to the brochure file.
const BROCHURE_DOWNLOAD_LINK = 'https://www.cinutedigital.com/downloads/cdpl-brochure.pdf';

// --- Nodemailer Transporter ---
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // Use `true` for port 465, `false` for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// --- Helper function to send email ---
async function sendEmail(mailOptions: nodemailer.SendMailOptions) {
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

// --- API Handler ---
export async function POST(request: Request) {
  console.log('API Contact Route Hit');
  try {
    const body = await request.json();
    const { fullName, email, phone, type, source, interest, message, courseName, syllabusLink } = body; // Added courseName, syllabusLink
    console.log('Received payload:', { fullName, email, phone, type, source, courseName });

    // 1. Basic Validation
    if (!fullName || !email || !phone) {
      console.warn('Missing required fields');
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // 2. Determine Email Content based on 'type' and available fields
    const isBrochureRequest = type === 'brochure';
    const isSyllabusRequest = type === 'syllabus';

    // Determine Source
    let formSource = source;
    if (!formSource) {
      if (isBrochureRequest) formSource = 'Home Page - Brochure Download Modal';
      else if (isSyllabusRequest) formSource = `Home Page - ${courseName || 'Unknown Course'} - Download Syllabus Modal Form`;
      else formSource = 'Contact Form';
    }

    const isHomeHeroForm = formSource.includes('Home Hero') || formSource.includes('Enquiry Form - Home Hero Section') || formSource.includes('Enquiry Form - Home Enquire Now Button');
    const isGetStartedForm = formSource.includes('Get Started Section');

    // Subject Prefix Logic
    let subjectPrefix = '[ENQUIRY]';
    if (isBrochureRequest) {
      subjectPrefix = '[BROCHURE DOWNLOAD - HOME PAGE]';
    } else if (isSyllabusRequest) {
      subjectPrefix = '[SYLLABUS REQUEST]';
    } else if (isHomeHeroForm) {
      subjectPrefix = '[Enquiry]';
    } else if (isGetStartedForm) {
      subjectPrefix = '[GET STARTED REQUEST]';
    }

    // Admin Template Logic
    let adminTemplate = 'admin-notification-basic.html';
    // Use detailed template if interest or message is provided
    const hasDetailedFields = interest || message;

    if (hasDetailedFields) {
      adminTemplate = 'admin-notification.html';
    } else if (isHomeHeroForm) {
      adminTemplate = 'admin-notification-home-hero.html';
    }

    // 3. Prepare Admin Notification Email
    console.log('Preparing admin email...');
    const currentYear = new Date().getFullYear().toString();
    const adminData: Record<string, string> = {
      fullName,
      email,
      phone,
      type: isBrochureRequest ? 'Brochure Download' : (isSyllabusRequest ? 'Syllabus Download' : (isGetStartedForm ? 'Get Started Request' : 'General Inquiry')),
      source: formSource,
      downloadLink: isBrochureRequest ? BROCHURE_DOWNLOAD_LINK : (isSyllabusRequest ? (syllabusLink || 'N/A') : 'N/A'),
      year: currentYear,
      currentYear: currentYear, // Pass both for compatibility
    };

    if (courseName) adminData.courseName = courseName;

    // Only include interest and message if they exist (for detailed template)
    if (hasDetailedFields) {
      if (interest) adminData.interest = interest;
      if (message) adminData.message = message;
    }
    const adminHtml = await getTemplatedEmail(adminTemplate, adminData);

    // Admin Subject Logic
    let adminSubject = `${subjectPrefix} New Lead from ${fullName} - ${formSource}`;
    if (isSyllabusRequest && courseName) {
      adminSubject = `${subjectPrefix} New Lead for ${courseName} - ${fullName}`;
    }

    const adminMailOptions: nodemailer.SendMailOptions = {
      from: SMTP_FROM_EMAIL,
      to: ADMIN_EMAIL,
      cc: CC_EMAIL,
      bcc: BCC_EMAIL,
      subject: adminSubject,
      html: adminHtml,
    };

    // 4. Prepare User Confirmation Email
    let userMailOptions: nodemailer.SendMailOptions;

    if (isBrochureRequest) {
      const userHtml = await getTemplatedEmail('brochure-confirmation.html', {
        fullName,
        downloadLink: BROCHURE_DOWNLOAD_LINK,
        year: currentYear,
        currentYear: currentYear,
      });

      userMailOptions = {
        from: SMTP_FROM_EMAIL,
        to: email,
        subject: 'Your CDPL Brochure is Ready for Download!',
        html: userHtml,
      };
    } else if (isSyllabusRequest) {
      // Syllabus Confirmation
      const userHtml = await getTemplatedEmail('syllabus-confirmation.html', {
        fullName,
        courseName: courseName || 'Course',
        downloadLink: syllabusLink || BROCHURE_DOWNLOAD_LINK, // Fallback if needed
        year: currentYear,
        currentYear: currentYear,
      });

      userMailOptions = {
        from: SMTP_FROM_EMAIL,
        to: email,
        subject: `Your ${courseName || 'Course'} Syllabus is Ready!`,
        html: userHtml,
      };
    } else {
      // General Contact Confirmation (Includes Get Started)
      const userHtml = await getTemplatedEmail('user-confirmation.html', {
        fullName,
        phone,
        email,
        year: currentYear,
        currentYear: currentYear,
      });

      userMailOptions = {
        from: SMTP_FROM_EMAIL,
        to: email,
        subject: 'Thank You for Contacting CDPL!',
        html: userHtml,
      };
    }

    // 5. Send Emails
    console.log('Sending admin email to:', ADMIN_EMAIL);
    const adminSuccess = await sendEmail(adminMailOptions);
    console.log('Admin email result:', adminSuccess);

    console.log('Sending user email to:', email);
    const userSuccess = await sendEmail(userMailOptions);
    console.log('User email result:', userSuccess);

    // 6. Push to TeleCRM (Async - don't block response)
    pushLeadToTeleCRM({
      fullName,
      email,
      phone,
      source: formSource,
    }).catch(err => console.error('TeleCRM background push error:', err));

    // 7. Append to Google Sheet (Async)
    appendRowToSheet({
      date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      fullName,
      email,
      phone,
      source: formSource,
      type: isBrochureRequest ? 'Brochure Download' : (isSyllabusRequest ? 'Syllabus Download' : (isGetStartedForm ? 'Get Started Request' : 'General Inquiry')),
      interest: interest || '',
      message: message || '',
    }).catch(err => console.error('Google Sheet background update error:', err));

    if (adminSuccess && userSuccess) {
      return NextResponse.json({ message: 'Form submitted and emails sent successfully' }, { status: 200 });
    } else {
      console.warn('One or more emails failed to send. Check server logs.');
      return NextResponse.json({ message: 'Form submitted, but there was an issue sending confirmation email.' }, { status: 200 });
    }

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}