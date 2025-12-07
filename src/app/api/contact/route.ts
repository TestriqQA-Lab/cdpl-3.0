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

const SYLLABUS_LINKS: Record<string, string> = {
  'Manual Testing': 'https://www.cinutedigital.com/downloads/manual-software-testing.pdf',
  'API Testing': 'https://www.cinutedigital.com/downloads/api-testing-using-postman-and-restapis.pdf',
  'MySQL DBMS': 'https://www.cinutedigital.com/downloads/database-management-system-using-mysql.pdf',
  'Advanced Automation Testing': 'https://www.cinutedigital.com/downloads/advanced-automation-testing.pdf',
  'Advanced Data Analytics Hero Program': 'https://www.cinutedigital.com/downloads/advanced-data-analytics-hero-program.pdf',
  'Advanced Data Analytics with Python': 'https://www.cinutedigital.com/downloads/advanced-data-analytics-with-python-libraries.pdf',
  'Advanced Data Science and ML': 'https://www.cinutedigital.com/downloads/advanced-data-science-and-machine-learning-masterclass.pdf',
  'Advanced Data Science and Machine Learning Masterclass': 'https://www.cinutedigital.com/downloads/advanced-data-science-and-machine-learning-masterclass.pdf',
  'Advanced Excel for Data Analytics & Visualization': 'https://www.cinutedigital.com/downloads/advanced-excel-for-Data-analytics-&-visualization.pdf',
  'Advanced Manual and Automation Testing Master Program': 'https://www.cinutedigital.com/downloads/advanced-manual-and-automation-testing-master-program.pdf',
  'Advanced Software Testing': 'https://www.cinutedigital.com/downloads/advanced-software-testing.pdf',
  'AI Driven Digital Marketing': 'https://www.cinutedigital.com/downloads/ai-driven-digital-marketing-&-analytics.pdf',
  'AI in Digital Marketing Course': 'https://www.cinutedigital.com/downloads/ai-driven-digital-marketing-&-analytics.pdf',
  'Comprehensive Data Science and AI': 'https://www.cinutedigital.com/downloads/comprehensive-data-science-and-ai-master-program.pdf',
  'Power BI Data Analytics': 'https://www.cinutedigital.com/downloads/data-analytics-&-visualization-with-power-bi.pdf',
  'Tableau Data Analytics': 'https://www.cinutedigital.com/downloads/data-analytics-&-visualization-with-tableau.pdf',
  'Data Analytics with BI and Big Data': 'https://www.cinutedigital.com/downloads/data-analytics-with-bi-and-big-data-engineering-master-program.pdf',
  'Deep Learning NLP and GenAI': 'https://www.cinutedigital.com/downloads/deep-learning-nlp-and-generativeai.pdf',
  'Master Program in Deep Learning, NLP & Generative AI': 'https://www.cinutedigital.com/downloads/deep-learning-nlp-and-generativeai.pdf',
  'Machine Learning and Data Science with Python': 'https://www.cinutedigital.com/downloads/machine-learning-and-data-science-with-python-hero-program.pdf',
  'Digital Marketing and AI for Business': 'https://www.cinutedigital.com/downloads/digital-marketing-and-ai-for-business-owners-digital-marketing-and-ai-for-business-owners. Digital Marketing and AI (For Business Owners)',
  'Digital Marketing with AI Bootcamp': 'https://www.cinutedigital.com/downloads/digital-marketing-with-ai-bootcamp-digital-marketing-with-ai-bootcamp. Digital Marketing With AI Bootcamp',
  'ETL Testing': 'https://www.cinutedigital.com/downloads/etl-testing-&-development.pdf',
  'Java Programming': 'https://www.cinutedigital.com/downloads/java-programming.pdf',
  'ML Algorithms using Python': 'https://www.cinutedigital.com/downloads/machine-learning-algorithms-using-python-programming.pdf',
  'ML and Data Science with Python': 'https://www.cinutedigital.com/downloads/machine-learning-and-data-science-with-python-hero-program.pdf',
  'ML and Data Visualization using R': 'https://www.cinutedigital.com/downloads/machine-learning-and-data-visualization-using-r-programming.pdf',
  'Prompt Engineering with Gen AI': 'https://www.cinutedigital.com/downloads/prompt-engineering-with-gen-ai.pdf',
  'Python Programming': 'https://www.cinutedigital.com/downloads/python-programming.pdf',
  'Comprehensive Data Science and AI - Master Program': 'https://www.cinutedigital.com/downloads/comprehensive-data-science-and-ai-master-program.pdf',
  'Machine Learning Algorithms using python Programming': 'https://www.cinutedigital.com/downloads/machine-learning-algorithms-using-python-programming.pdf',
  'Machine Learning and Data Visualization using R Programming': 'https://www.cinutedigital.com/downloads/machine-learning-and-data-visualization-using-r-programming.pdf',
};

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
    const { fullName, email, phone, type, source, interest, message, courseName, syllabusLink, company, jobTitle, workshopType, participants, preferredDate, title } = body;
    console.log('Received payload:', { fullName, email, phone, type, source, workshopType });

    let extraFields: Record<string, any> = {};

    // 1. Basic Validation
    if (!fullName || !email || !phone) {
      console.warn('Missing required fields');
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // 2. Determine Email Content based on 'type' and available fields
    const isBrochureRequest = type === 'brochure';
    const isSyllabusRequest = type === 'syllabus';
    const isEnrollmentRequest = type === 'enrollment';
    const isWorkshopRequest = type === 'workshop';

    // Determine Source
    let formSource = source;
    if (!formSource) {
      if (isBrochureRequest) formSource = 'Home Page - Brochure Download Modal';
      else if (isSyllabusRequest) formSource = `Home Page - ${courseName || 'Unknown Course'} - Download Syllabus Modal Form`;
      else if (isEnrollmentRequest) formSource = `${courseName || 'Course'} Page - Enroll Now`;
      else formSource = 'Contact Form';
    }

    const isHomeHeroForm = formSource.includes('Home Hero') || formSource.includes('Enquiry Form - Home Hero Section') || formSource.includes('Enquiry Form - Home Enquire Now Button') || formSource.includes('About Us - Hero Section Modal') || formSource.includes('About Us - CTA Section') || formSource.includes('About Us - FAQ Section');
    const isGetStartedForm = formSource.includes('Get Started Section');
    const isFreeDemoRequest = formSource === 'Book Free Demo - Header Button';
    const isManualTestingHeroForm = formSource === 'Manual Software Testing Course Page - Hero Section';
    const isApiTestingHeroForm = formSource === 'API Testing Course Page - Hero Section';
    const isDbmsHeroForm = formSource === 'DBMS Course Page - Hero Section';
    const isEtlHeroForm = formSource === 'ETL Testing Course Page - Hero Section';
    const isAdvancedSoftwareTestingHeroForm = formSource === 'Advanced Software Testing Course Page - Hero Section';
    const isMasterProgramHeroForm = formSource === 'Master Program Course Page - Hero Section';
    const isPythonHeroForm = formSource === 'Python Course Page - Hero Section';
    const isJavaHeroForm = formSource === 'Java Course Page - Hero Section';
    const isDataAnalyticsPythonHeroForm = formSource === 'Data Analytics with Python Course Page - Hero Section' || formSource.includes('Data Analytics Python Course Page');
    const isDataAnalyticsVizHeroForm = formSource === 'Data Analytics & Visualization Course Page - Hero Section';
    const isPowerBiHeroForm = formSource === 'Power BI Course Page - Hero Section';
    const isDataAnalyticsHeroForm = formSource === 'Data Analytics Course Page - Hero Section' || formSource === 'Data Analytics Course Page - Hero Section - Enroll Now' || formSource === 'Data Analytics Course Page - Hero Section - Syllabus Download' || formSource === 'Data Analytics Course Page - Why Analytics Section - Apply Now' || formSource === 'Data Analytics Course Page - Curriculum Section - Apply Now' || formSource === 'Data Analytics Course Page - Career Section - Placement Assistance' || formSource === 'Data Analytics Course Page - Who Should Enroll Section - Enroll Now' || formSource === 'Data Analytics Course Page - Tools Section - Learn with Projects' || formSource === 'Data Analytics Course Page - Roadmap Section - Get Roadmap' || formSource === 'Data Analytics Course Page - FAQ Section - Talk to Advisor' || formSource === 'Data Analytics Course Page - Curriculum Section - Career Session';
    const isTableauHeroForm = formSource === 'Tableau Course Page - Hero Section';
    const isDataScienceHeroForm = formSource === 'Data Science Course Page - Hero Section';
    const isMlHeroForm = formSource === 'Machine Learning Course Page - Hero Section';
    const isMlPythonHeroForm = formSource === 'Machine Learning with Python Course Page - Hero Section' || formSource === 'Machine Learning with Python Course Page - Hero Section - Enroll Now' || formSource === 'Machine Learning with Python Course Page - Hero Section - Syllabus Download' || formSource === 'Machine Learning with Python Course Page - Stats Section - Download Syllabus' || formSource === 'Machine Learning with Python Course Page - Curriculum Section - Apply Now' || formSource === 'Machine Learning with Python Course Page - Curriculum Section - Download Syllabus';
    const isRProgrammingHeroForm = formSource === 'R Programming Course Page - Hero Section' || formSource === 'R Programming Course Page - Hero Section - Enroll Now' || formSource === 'R Programming Course Page - Hero Section - Syllabus Download';
    const isDataEngineeringHeroForm = formSource === 'Data Engineering Course Page - Hero Section';
    const isGenAiHeroForm = formSource === 'Generative AI Course Page - Hero Section';

    const isPromptEngHeroForm = formSource === 'Prompt Engineering Course Page - Hero Section' || formSource === 'Prompt Engineering Course Page - Hero Section - Enroll Now' || formSource === 'Prompt Engineering Course Page - Hero Section - Syllabus Download' || formSource === 'Prompt Engineering Course Page - Curriculum Section - Apply Now' || formSource === 'Prompt Engineering Course Page - Career Section - Placement Assistance' || formSource === 'Prompt Engineering Course Page - Who Should Enroll Section - Enroll Now' || formSource === 'Prompt Engineering Course Page - Tools Section - Learn with Projects' || formSource === 'Prompt Engineering Course Page - Roadmap Section - Get Roadmap' || formSource === 'Prompt Engineering Course Page - FAQ Section - Talk to Advisor' || formSource === 'Prompt Engineering Course Page - Stats Section - Enroll Now' || formSource === 'Prompt Engineering Course Page - Career Roadmap Section - Get Roadmap' || formSource === 'Prompt Engineering Course Page - Why Section - Apply Now' || formSource === 'Prompt Engineering Course Page - Cta Section - Enroll Now' || formSource === 'Prompt Engineering Course Page - Cta Section - Download Syllabus';
    const isCompDsAiHeroForm = formSource === 'Comprehensive Data Science & AI - Hero Section' || formSource === 'Comprehensive Data Science & AI - Hero Section (Mobile)';
    const isAiBootcampHeroForm = formSource === 'AI Bootcamp Course Page - Hero Section';
    const isAiMarketingHeroForm = formSource === 'AI in Digital Marketing Course Page - Hero Section' || formSource.includes('AI Digital Marketing');

    const isMentorRequest = formSource.includes('Team Page - Mentor Section');
    const isLiveJobsRequest = formSource.includes('Live Jobs Page - Hero Section');
    const isPlacementRequest = formSource.includes('Placements Page');
    const isMentorsPageRequest = formSource.includes('Mentors Page');
    const isSessionEnquiry = formSource.includes('Session Enquiry') || formSource.includes('Other Courses Section') || formSource.includes('Book Free Demo') || formSource.includes('Start Your QA Journey') || formSource.includes('Get Placement Support') || formSource.includes('Become SDET') || formSource.includes('Start Your QA Career') || formSource.includes('Talk to Advisor') || formSource.includes('Browse Open Roles');

    // Subject Prefix Logic
    let subjectPrefix = '[ENQUIRY]';
    if (isBrochureRequest) {
      subjectPrefix = '[BROCHURE DOWNLOAD - HOME PAGE]';
    } else if (isSyllabusRequest) {
      subjectPrefix = '[SYLLABUS DOWNLOAD]';
    } else if (isEnrollmentRequest) {
      subjectPrefix = '[ENROLL NOW]';
    } else if (isWorkshopRequest) {
      const subjectTag = title ? `[${title.toUpperCase()}]` : '[WORKSHOP REQUEST]';
      subjectPrefix = `${subjectTag}`;
    } else if (isHomeHeroForm) {
      subjectPrefix = '[Enquiry]';
    } else if (isGetStartedForm) {
      subjectPrefix = '[GET STARTED REQUEST]';
    } else if (isFreeDemoRequest) {
      subjectPrefix = '[FREE DEMO REQUEST]';
    } else if (isManualTestingHeroForm || isApiTestingHeroForm || isDbmsHeroForm || isEtlHeroForm || isAdvancedSoftwareTestingHeroForm || isMasterProgramHeroForm || isPythonHeroForm || isJavaHeroForm || isDataAnalyticsHeroForm || isDataAnalyticsPythonHeroForm || isDataAnalyticsVizHeroForm || isPowerBiHeroForm || isTableauHeroForm || isDataScienceHeroForm || isMlHeroForm || isMlPythonHeroForm || isRProgrammingHeroForm || isDataEngineeringHeroForm || isGenAiHeroForm || isPromptEngHeroForm || isAiMarketingHeroForm || isAiBootcampHeroForm || isCompDsAiHeroForm) {
      subjectPrefix = '[ENQUIRY]';
    } else if (isMentorRequest) {
      subjectPrefix = '[MENTOR REQUEST]';
    } else if (isLiveJobsRequest) {
      subjectPrefix = '[LIVE JOBS ENQUIRY]';
    } else if (isPlacementRequest) {
      subjectPrefix = '[PLACEMENT ENQUIRY]';
    } else if (isMentorsPageRequest) {
      subjectPrefix = '[MENTOR PAGE ENQUIRY]';
    } else if (isSessionEnquiry) {
      subjectPrefix = '[SESSION ENQUIRY]';
    }

    // Admin Template Logic
    let adminTemplate = 'admin-notification-basic.html';
    // Use detailed template if interest or message is provided
    const hasDetailedFields = interest || message;

    if (hasDetailedFields) {
      adminTemplate = 'admin-notification.html';
    } else if (isHomeHeroForm) {
      adminTemplate = 'admin-notification-home-hero.html';
    } else if (isFreeDemoRequest) {
      adminTemplate = 'admin-notification-free-demo.html';
    } else if (isMentorRequest) {
      adminTemplate = 'admin-notification-mentor.html';
    } else if (isLiveJobsRequest) {
      adminTemplate = 'admin-notification-live-jobs.html';
    } else if (isPlacementRequest) {
      adminTemplate = 'admin-notification-placement.html';
    } else if (isMentorsPageRequest) {
      adminTemplate = 'admin-notification-mentors.html';
    } else if (isWorkshopRequest) {
      const subjectTag = title ? `[${title.toUpperCase()}]` : '[WORKSHOP REQUEST]';
      subjectPrefix = `${subjectTag} from ${company || 'Unknown Company'} (${fullName})`;

      adminTemplate = 'admin-notification-workshop.html';
    } else if (type === 'service_request') {
      const { company, jobTitle, participants, preferredDate, message, serviceName } = body;


      subjectPrefix = `[SERVICE REQUEST] ${serviceName} - Inquiry by ${company || fullName}`;
      adminTemplate = 'admin-notification-service-request.html';
    }

    // 3. Prepare Admin Notification Email
    console.log('Preparing admin email...');
    const currentYear = new Date().getFullYear().toString();
    const adminData: Record<string, string> = {
      fullName,
      email,
      phone,
      type: isBrochureRequest ? 'Brochure Download' : (isSyllabusRequest ? 'Syllabus Download' : (isEnrollmentRequest ? 'Enroll Now Inquiry' : (isGetStartedForm ? 'Get Started Request' : (isFreeDemoRequest ? 'Free Demo Request' : (isMentorRequest ? 'Mentor Request' : (isLiveJobsRequest ? 'Live Jobs Enquiry' : (isPlacementRequest ? 'Placement Enquiry' : (isSessionEnquiry ? 'Session Enquiry' : (isManualTestingHeroForm || isApiTestingHeroForm || isDbmsHeroForm || isEtlHeroForm || isAdvancedSoftwareTestingHeroForm || isMasterProgramHeroForm || isPythonHeroForm || isJavaHeroForm || isDataAnalyticsHeroForm || isDataAnalyticsPythonHeroForm || isDataAnalyticsVizHeroForm || isPowerBiHeroForm || isTableauHeroForm || isDataScienceHeroForm || isMlHeroForm || isMlPythonHeroForm || isRProgrammingHeroForm || isDataEngineeringHeroForm || isGenAiHeroForm || isPromptEngHeroForm || isAiMarketingHeroForm || isAiBootcampHeroForm || isCompDsAiHeroForm || formSource.includes('Python Course Page - Testimonials Section') ? 'Course Page Enquiry' : 'General Inquiry'))))))))),
      source: formSource,
      downloadLink: isBrochureRequest ? BROCHURE_DOWNLOAD_LINK : (isSyllabusRequest ? (syllabusLink || 'N/A') : 'N/A'),
      year: currentYear,
      currentYear: currentYear, // Pass both for compatibility
    };

    if (isWorkshopRequest) {
      adminData.company = company || 'N/A';
      adminData.jobTitle = jobTitle || 'N/A';
      adminData.workshopType = workshopType || 'N/A';
      adminData.participants = participants || 'N/A';
      adminData.preferredDate = preferredDate || 'N/A';
    }

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
      if (formSource === 'Manual Software Testing Course Page - Learning Path - Syllabus Download') {
        adminSubject = `${subjectPrefix} New Lead from ${fullName} - Manual Testing Page (Syllabus)`;
      } else if (formSource === 'API Testing Course Page - Hero Section - Syllabus Download') {
        adminSubject = `${subjectPrefix} New Lead from ${fullName} - API Testing Page (Syllabus)`;
      } else if (formSource === 'DBMS Course Page - Hero Section - Download Syllabus') {
        adminSubject = `${subjectPrefix} New Lead from ${fullName} - DBMS Page (Syllabus)`;
      } else if (formSource === 'ETL Testing Course Page - Hero Section - Syllabus Download') {
        adminSubject = `${subjectPrefix} New Lead from ${fullName} - ETL Testing Page (Syllabus)`;
      } else if (formSource === 'Advanced Software Testing Course Page - Hero Section - Syllabus Download') {
        adminSubject = `${subjectPrefix} New Lead from ${fullName} - Advanced Software Testing Page (Syllabus)`;
      } else if (formSource === 'Master Program Course Page - Curriculum Section - Syllabus Download') {
        adminSubject = `${subjectPrefix} New Lead from ${fullName} - Master Program Page (Syllabus)`;
      } else if (formSource === 'Python Course Page - Curriculum Section - Syllabus Download' || formSource === 'Python Course Page - Testimonials Section - Syllabus Download') {
        adminSubject = `${subjectPrefix} New Lead from ${fullName} - Python Page (Syllabus)`;
      } else if (formSource === 'Java Course Page - Curriculum Section - Syllabus Download' || formSource === 'Java Course Page - Who Should Enroll Section - Syllabus Download') {
        adminSubject = `${subjectPrefix} New Lead from ${fullName} - Java Page (Syllabus)`;
      } else if (formSource === 'Data Analytics & Visualization Course Page - Hero Section - Download Syllabus' || formSource === 'Data Analytics & Visualization Course Page - Curriculum Section - Syllabus Download' || formSource === 'Data Analytics & Visualization Course Page - Career Section - Download Report' || formSource === 'Data Analytics & Visualization Course Page - Who Should Enroll - Download Syllabus' || formSource === 'Data Analytics Course Page - Hero Section - Syllabus Download' || formSource === 'Data Analytics Course Page - CTA Section - Download Syllabus' || formSource === 'Data Analytics Course Page - Who Should Enroll Section - Syllabus Download' || formSource === 'Data Analytics Course Page - Curriculum Section - Syllabus Download' || formSource === 'Data Analytics Course Page - Career Section - Syllabus Download') {
        adminSubject = `${subjectPrefix} New Lead from ${fullName} - Advanced Excel Page (Syllabus)`;
      } else if (formSource === 'Data Science Course Page - Hero Section - Syllabus Download' || formSource === 'Data Science Course Page - Curriculum Section - Syllabus Download' || formSource === 'Data Science Course Page - Career Section - Download Portfolio Guide' || formSource === 'Data Science Course Page - Who Should Enroll - Download Syllabus') {
        adminSubject = `${subjectPrefix} New Lead from ${fullName} - Data Science Page (Syllabus)`;
      } else if (formSource.includes('Data Analytics Python Course Page') && (formSource.includes('Syllabus') || formSource.includes('Report'))) {
        adminSubject = `${subjectPrefix} New Lead from ${fullName} - Data Analytics with Python Page (Syllabus)`;
      } else if (formSource === 'Machine Learning with Python Course Page - Hero Section - Syllabus Download' || formSource === 'Machine Learning with Python Course Page - Stats Section - Download Syllabus' || formSource === 'Machine Learning with Python Course Page - Curriculum Section - Download Syllabus') {
        adminSubject = `${subjectPrefix} New Lead from ${fullName} - Machine Learning with Python Page (Syllabus)`;
      } else if (formSource === 'R Programming Course Page - Hero Section - Syllabus Download') {
        adminSubject = `${subjectPrefix} New Lead from ${fullName} - R Programming Page (Syllabus)`;
      } else {
        adminSubject = `${subjectPrefix} New Lead for ${courseName} - ${fullName}`;
      }
    } else if (isWorkshopRequest) {
      adminSubject = `${subjectPrefix} Corporate Training Inquiry from ${company} (${fullName})`;
    } else if (isManualTestingHeroForm) {
      adminSubject = `${subjectPrefix} New Lead from ${fullName} - Course Page`;
    } else if (isApiTestingHeroForm) {
      adminSubject = `${subjectPrefix} New Lead from ${fullName} - API Testing Course Page`;
    } else if (isDbmsHeroForm) {
      adminSubject = `${subjectPrefix} New Lead from ${fullName} - DBMS Course Page`;
    } else if (isEtlHeroForm) {
      adminSubject = `${subjectPrefix} New Lead from ${fullName} - ETL Testing Course Page`;
    } else if (isAdvancedSoftwareTestingHeroForm) {
      adminSubject = `${subjectPrefix} New Lead from ${fullName} - Advanced Software Testing Course Page`;
    } else if (isCompDsAiHeroForm) {
      adminSubject = `${subjectPrefix} New Lead from ${fullName} - Comprehensive Data Science & AI Course Page`;
    } else if (isMentorsPageRequest) {
      adminSubject = `${subjectPrefix} New Mentorship Enquiry from ${fullName}`;
    } else if (isEnrollmentRequest) {
      adminSubject = `${subjectPrefix} New Lead from ${fullName} - ${courseName || 'Course'} Page`;
    } else if (formSource === 'Manual Software Testing Course Page - Learning Path') {
      adminSubject = `${subjectPrefix} New Lead from ${fullName} - Manual Testing Page`;
    } else if (formSource === 'Manual Software Testing Course Page - Session Enquiry') {
      adminSubject = `[SESSION ENQUIRY] New Lead from ${fullName} - Manual Software Testing Course Page`;
    } else if (formSource === 'Manual Software Testing Course Page - Other Courses Section') {
      adminSubject = `[SESSION ENQUIRY] New Lead from ${fullName} - Manual Software Testing Page`;
    } else if (formSource === 'API Testing Course Page - Curriculum Section - Book Free Demo') {
      adminSubject = `[SESSION ENQUIRY] New Lead from ${fullName} - API Testing Page`;
    } else if (formSource === 'API Testing Course Page - Career Section - Start Your QA Journey') {
      adminSubject = `[SESSION ENQUIRY] New Lead from ${fullName} - API Testing Page (Career Section)`;
    } else if (formSource === 'DBMS Course Page - Curriculum Section - Book Free Demo') {
      adminSubject = `[SESSION ENQUIRY] New Lead from ${fullName} - DBMS Page`;
    } else if (formSource === 'DBMS Course Page - Career Section - Get Placement Support') {
      adminSubject = `[PLACEMENT ENQUIRY] New Lead from ${fullName} - DBMS Page (Career Section)`;
    } else if (formSource === 'ETL Testing Course Page - Curriculum Section - Book Free Demo') {
      adminSubject = `[SESSION ENQUIRY] New Lead from ${fullName} - ETL Testing Page`;
    } else if (formSource === 'ETL Testing Course Page - Career Section - Get Placement Support') {
      adminSubject = `[PLACEMENT ENQUIRY] New Lead from ${fullName} - ETL Testing Page (Career Section)`;
    } else if (formSource === 'Advanced Software Testing Course Page - Curriculum Section - Book Free Demo') {
      adminSubject = `[SESSION ENQUIRY] New Lead from ${fullName} - Advanced Software Testing Page`;
    } else if (formSource === 'Advanced Software Testing Course Page - Career Section - Become SDET') {
      adminSubject = `[PLACEMENT ENQUIRY] New Lead from ${fullName} - Advanced Software Testing Page (Career Section)`;
    } else if (formSource === 'Master Program Course Page - Curriculum Section - Book Free Demo') {
      adminSubject = `[SESSION ENQUIRY] New Lead from ${fullName} - Master Program Page`;
    } else if (formSource === 'Master Program Course Page - Career Section - Start Your QA Career') {
      adminSubject = `[PLACEMENT ENQUIRY] New Lead from ${fullName} - Master Program Page (Career Section)`;
    } else if (formSource === 'Python Course Page - Career Section - Talk to Advisor') {
      adminSubject = `[SESSION ENQUIRY] New Lead from ${fullName} - Python Page (Career Section)`;
    } else if (formSource === 'Java Course Page - Career Section - Browse Open Roles') {
      adminSubject = `[SESSION ENQUIRY] New Lead from ${fullName} - Java Page (Career Section)`;
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
      const specificSyllabusLink = courseName ? SYLLABUS_LINKS[courseName] : null;
      const finalDownloadLink = specificSyllabusLink || syllabusLink || BROCHURE_DOWNLOAD_LINK;

      const userHtml = await getTemplatedEmail('syllabus-confirmation.html', {
        fullName,
        courseName: courseName || 'Course',
        downloadLink: finalDownloadLink,
        year: currentYear,
        currentYear: currentYear,
      });

      userMailOptions = {
        from: SMTP_FROM_EMAIL,
        to: email,
        subject: `Your ${courseName || 'Course'} Syllabus is Ready!`,
        html: userHtml,
      };
    } else if (isFreeDemoRequest) {
      // Free Demo Confirmation
      const userHtml = await getTemplatedEmail('user-confirmation-free-demo.html', {
        fullName,
        phone,
        email,
        year: currentYear,
        currentYear: currentYear,
      });

      userMailOptions = {
        from: SMTP_FROM_EMAIL,
        to: email,
        subject: 'Free Demo Request Received - CDPL',
        html: userHtml,
      };
    } else if (isWorkshopRequest) {
      const userHtml = await getTemplatedEmail('user-confirmation-workshop.html', {
        fullName,
        company: company || 'your organization',
        workshopType: workshopType || 'workshop',
        year: currentYear,
        currentYear: currentYear,
      });

      userMailOptions = {
        from: SMTP_FROM_EMAIL,
        to: email,
        subject: 'We have received your Workshop Request - CDPL',
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
      type: isBrochureRequest ? 'Brochure Download' : (isSyllabusRequest ? 'Syllabus Download' : (isEnrollmentRequest ? 'Enroll Now Inquiry' : (isGetStartedForm ? 'Get Started Request' : (isFreeDemoRequest ? 'Free Demo Request' : (isMentorRequest ? 'Mentor Request' : (isLiveJobsRequest ? 'Live Jobs Enquiry' : (isPlacementRequest ? 'Placement Enquiry' : (isSessionEnquiry ? 'Session Enquiry' : (isManualTestingHeroForm || isApiTestingHeroForm || isDbmsHeroForm || isEtlHeroForm || isAdvancedSoftwareTestingHeroForm || isMasterProgramHeroForm || isPythonHeroForm || isJavaHeroForm || isDataAnalyticsHeroForm || isDataAnalyticsPythonHeroForm || isDataAnalyticsVizHeroForm || isPowerBiHeroForm || isTableauHeroForm || isDataScienceHeroForm || isMlHeroForm || isMlPythonHeroForm || isRProgrammingHeroForm || isDataEngineeringHeroForm || isGenAiHeroForm || isPromptEngHeroForm || isAiMarketingHeroForm || isAiBootcampHeroForm || isCompDsAiHeroForm || formSource.includes('Python Course Page - Testimonials Section') ? 'Course Page Enquiry' : 'General Inquiry'))))))))),

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