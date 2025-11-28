
import React from "react";

export const CDPL_ORG = {
  name: "Cinute Digital Pvt. Ltd. (CDPL)",
  logo: "/cdpl-logo.png",
  description:
    "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
} as const;

// Optional: a small base object you can spread into every event
const CDPL_BASE = {
  organization: CDPL_ORG.name,
  organizerLogoUrl: CDPL_ORG.logo,
  organizerDetails: CDPL_ORG.description,
} as const;

export interface PastEvent {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  organization: string;
  attendees: number;
  category: string;
  categoryColor: string;
  serviceType: string; // Links to service
  purpose: string;
  trainingDuration: React.ReactNode;
  sessionHighlights: {
    title: string;
    points: string[];
  }[];
  specialSession?: {
    speaker: string;
    topic: string;
    highlights: string[];
  };
  keyTakeaways: {
    title: string;
    description: string;
  }[];
  highlights: string[];
  imageUrl?: string;
  heroImageUrl?: string;
  success?: string;
  featured?: boolean;
  galleryCount?: number;
  videoUrl?: string;

  organizationImage: string;
  organizationWebsite?: URL;
  organizationFacebook?: URL;
  organizationInstagram?: URL;
  organizationTwitter?: URL;
  organizationYoutube?: URL;
  gallery?: string[];          // For Image Gallery section
  organizerDetails?: string;   // Extra organizer info (optional)
  organizationAbout?: URL;     // Extra organizer info (optional)

  venueTitle?: string;

  /** Primary venue image (logo/photo) */
  venueImageUrl?: string;

  /** Free-form venue description */
  venueDescription?: string;

  /** Optional: per-event fallback image if the primary is missing */
  venueFallbackImageUrl?: string;

  venueAddress?: string;
  lastModified?: string;

  // New fields for enhanced UI
  shareLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    whatsapp?: string;
  };
}

export const pastEvents: PastEvent[] = [
  {
    id: "business-analytics-course-aim",
    ...CDPL_BASE,
    slug: "business-analytics-course-at-aldel-institute-of-management",
    title: "Business Analytics Course at Aldel Institute of Management – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "01-01-2025 to 08-02-2025",
    location: "Aldel Institute of Management, Palghar",
    attendees: 65,
    category: "Course Conducted",
    categoryColor: "bg-blue-600",
    serviceType: "Lecture Series",
    purpose: "Cinute Digital Pvt. Ltd. (CDPL), the learning and development unit of Testriq QA Lab, successfully conducted a 30-hour Business Analytics Course at Aldel Institute of Management. Led by Ashish Shetty, Assistant Manager - Learning and Development, this course was designed to equip students with industry-relevant business analytics skills, helping them gain practical expertise in data visualization, analytics, and decision-making. The program aimed to provide hands-on experience with leading analytics tools such as Power BI and Tableau, ensuring participants develop data-driven problem-solving skills essential for careers in business intelligence and analytics.",
    trainingDuration: "The 30-hour intensive training program covered",
    sessionHighlights: [
      {
        title: "Introduction to Business Analytics",
        points: ["Understanding the fundamentals, key concepts, and applications across industries."]
      },
      {
        title: "Hands-on Training in Power BI",
        points: ["Learning data connection, data transformation, report building, and interactive dashboard creation."]
      },
      {
        title: "Tableau for Data Visualization",
        points: ["Mastering data storytelling, advanced charting techniques, and dashboard design."]
      },
      {
        title: "Real-World Sales Project",
        points: ["Students worked on a practical business case study, analyzing sales data and creating dynamic dashboards to derive actionable insights."]
      },
      {
        title: "Industry Applications & Case Studies",
        points: ["Understanding how business analytics drives decision-making in various industries, including retail, finance, and supply chain management."]
      },
    ],
    keyTakeaways: [
      {
        title: "Comprehensive understanding of quality assurance in software development",
        description: "Students gained hands-on experience in using industry-leading data visualization tools.",
      },
      {
        title: "Practical Business Analytics Knowledge",
        description: "The course provided real-world applications, ensuring students understand data-driven decision-making.",
      },
      {
        title: "Project-Based Learning",
        description: "The sales project and dashboard creation enhanced students' analytical skills, preparing them for real-world business challenges.",
      },
      {
        title: "Enhanced Career Prospects",
        description: "With exposure to modern analytics tools and methodologies, participants are now better equipped for roles in business intelligence, data analytics, and consulting.",
      },
    ],
    highlights: [
      "Hands-on QA Tools Demo",
      "Real-Time Project Workflow",
      "Career Path Exploration",
      "Office Tour"
    ],
    heroImageUrl: "/events/business-analytics-course-at-aldel-institute-of-management/AIM.png",
    success: "This successful collaboration between CDPL and Aldel Institute of Management reflects Testriq QA Lab’s commitment to bridging the gap between academia and industry, ensuring students develop in-demand skills for a data-driven future.",
    featured: true,
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 10, // Placeholder
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Aldel Institute of Management.",
    venueAddress: "Palghar, Maharashtra",
    venueDescription: "Aldel Institute of Management is an institute based in Palghar, Maharashtra.",
    venueImageUrl: "/events/business-analytics-course-at-aldel-institute-of-management/AIM-LOGO.png", // Fallback
  },
  {
    id: "mou-signing-st-francis-testriq",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "mou-signing-between-st-francis-institute-of-technology-and-testriq-qa-lab",
    title: "MoU Signing Between St. Francis Institute of Technology and Testriq QA Lab – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2024-03-27 to 2024-03-27",
    location: "St. Francis Institute of Technology, Mumbai",
    attendees: 50,
    category: "MoU Signing",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Partnership",
    purpose: "Testriq QA Lab has proudly signed a Memorandum of Understanding (MoU) with St. Francis Institute of Technology (SFIT) to strengthen industry-academia collaboration in the field of software testing and quality assurance. This strategic partnership aims to bridge the gap between theoretical education and practical industry demands by providing students with hands-on experience, expert guidance, and career-building opportunities. Cinute Digital Pvt. Ltd. (CDPL), the learning and development unit of Testriq QA Lab, will play a crucial role in delivering specialized training programs, workshops, and live projects to ensure students acquire industry-relevant skills.",
    trainingDuration: "The MoU signing ceremony was attended by distinguished representatives from both institutions",
    sessionHighlights: [
      {
        title: "Bro. Shantilal Kujur",
        points: ["Director, St. Francis Institute of Technology"]
      },
      {
        title: "Dr. Sincy George",
        points: ["Principal, St. Francis Institute of Technology"]
      },
      {
        title: "Dr. Minal Lopez",
        points: ["Faculty Representative, St. Francis Institute of Technology"]
      },
      {
        title: "Shoeb Shaikh",
        points: ["Head of Learning and Development, Testriq QA Lab"]
      },
      {
        title: "Ashish Shetty",
        points: ["Assistant Manager, Learning and Development, Testriq QA Lab"]
      }
    ],
    keyTakeaways: [
      {
        title: "Industry-Ready Skills",
        description: "Students will gain practical exposure to software testing and automation, ensuring they meet real-world industry demands.",
      },
      {
        title: "Bridging the Academia-Industry Gap",
        description: "The MoU strengthens collaboration between academia and the IT industry, enhancing learning outcomes.",
      },
      {
        title: "Enhanced Career Prospects",
        description: "With access to expert training, live projects, and mentorship, students will be well-prepared for roles in software testing and quality assurance.",
      },
      {
        title: "Commitment to Excellence",
        description: "This partnership reflects Testriq QA Lab and CDPL’s dedication to fostering innovation, skill development, and career excellence in the software testing domain.",
      }
    ],
    highlights: [
      "Industry-Oriented Training & Workshops",
      "Hands-On Learning with Live Projects",
      "Certification Programs",
      "Faculty Development Programs",
      "Internship & Career Guidance"
    ],
    heroImageUrl: "/events/mou-signing-between-st-francis-institute-of-technology-and-testriq-qa-lab/St.-Francis-MOU.png",
    success: "With this MoU, Testriq QA Lab, Cinute Digital Pvt. Ltd., and St. Francis Institute of Technology reaffirm their shared vision of empowering future engineers with cutting-edge industry knowledge and hands-on expertise.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "St. Francis Institute of Technology",
    venueAddress: "Mumbai, Maharashtra",
    venueDescription: "St. Francis Institute of Technology in Mumbai, India, is an engineering college named after Francis of Assisi, the 12th-century Italian saint. The college is accredited by the ISO and the National Board of Accreditation, approved by the AICTE, and affiliated with the University of Mumbai.",
    venueImageUrl: "/events/mou-signing-between-st-francis-institute-of-technology-and-testriq-qa-lab/st-francis-institute-of-technology.jpeg"
  },
  {
    id: "mou-signing-between-st-john-testriq",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "institutional-mou-signing-between-st-john-college-of-engineering-and-management-and-testriq-qa-lab",
    title: "Institutional MoU Signing Between St. John College of Engineering and Management and Testriq QA Lab – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2024-03-05 to 2024-03-05",
    location: "St. John Institute of Management and Research, Mumbai",
    attendees: 56,
    category: "MoU Signing",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Partnership",
    purpose: "Testriq QA Lab has officially signed an Institutional Memorandum of Understanding (MoU) with St. John College of Engineering and Management (SJCEM) to foster industry-academic collaboration in the field of software testing, quality assurance, and business intelligence applications. This partnership aims to provide students with hands-on training, industry exposure, and career development opportunities, bridging the gap between academic learning and industry demands. Cinute Digital Pvt. Ltd. (CDPL), the learning and development unit of Testriq QA Lab, will play a vital role in delivering specialized training programs, workshops, and live projects, ensuring students gain practical, job-ready skills in the rapidly evolving IT industry.",
    trainingDuration: "The MoU signing ceremony was attended by",
    sessionHighlights: [
      {
        title: "Dr. Gopal V. Mulgund",
        points: ["Principal, St. John College of Engineering and Management"]
      },
      {
        title: "Dr. Buddharatna Godbole",
        points: ["HOD, Civil Engineering, St. John College of Engineering and Management"]
      },
      {
        title: "Ashish Shetty",
        points: ["Assistant Manager, Learning and Development, Testriq QA Lab"]
      },
    ],
    keyTakeaways: [
      {
        title: "Practical Industry Exposure",
        description: "Students will gain real-world experience in software testing, automation, and business intelligence applications.",
      },
      {
        title: "Bridging the Academia-Industry Gap",
        description: "The MoU strengthens collaboration between SJCEM and Testriq QA Lab, ensuring students receive industry-relevant training.",
      },
      {
        title: "Enhanced Career Readiness",
        description: "Access to expert mentorship, live projects, and certifications will boost students' career prospects in IT and software quality assurance.",
      },
      {
        title: "Commitment to Excellence",
        description: "This partnership highlights Testriq QA Lab and CDPL’s dedication to empowering students with cutting-edge industry knowledge and hands-on expertise.",
      }
    ],
    highlights: [
      "Industry-Driven Training & Workshops",
      "Practical Exposure with Live Projects",
      "Certification Programs",
      "Faculty Development & Knowledge Sharing",
      "Internships & Career Guidance"
    ],
    heroImageUrl: "/events/institutional-mou-signing-between-st-john-college-of-engineering-and-management-and-testriq-qa-lab/St-john-institute-Mou.png",
    success: "With this MoU, Testriq QA Lab, Cinute Digital Pvt. Ltd., and St. John College of Engineering and Management reaffirm their commitment to nurturing future IT professionals through quality training, innovation, and skill development.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "St. John Institute of Management and Research",
    venueAddress: "Mumbai, Maharashtra",
    venueDescription: "St. John Institute of Management and Research (SJIMR), established in 2007, is located in Palghar, Maharashtra. Affiliated with the University of Mumbai, it offers undergraduate and postgraduate programs, including BE and MMS. The college provides modern infrastructure, skilled faculty, and focuses on practical skills and industry readiness. SJIMR emphasizes holistic development and has a strong placement record, making it a great choice for students aiming to excel in their careers.",
    venueImageUrl: "/events/institutional-mou-signing-between-st-john-college-of-engineering-and-management-and-testriq-qa-lab/st-john-college.png"
  },
  {
    id: "mou-signing-between-vidyavardhini-testriq",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "mou-signing-between-vidyavardhini-college-of-engineering-and-testriq-qa-lab",
    title: "MoU Signing Between Vidyavardhini College of Engineering and Testriq QA Lab – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2025-02-11 to 2025-02-11",
    location: "Vidyavardhini College of Engineering, Vasai West, Vasai-Virar, Maharashtra 401202",
    attendees: 57,
    category: "MoU Signing",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Partnership",
    purpose: "Testriq QA Lab proudly signed a Memorandum of Understanding (MoU) with Vidyavardhini College of Engineering, marking a significant step toward strengthening industry-academic collaboration in the field of software testing and quality assurance. The MoU aims to facilitate knowledge sharing, skill development, and career opportunities for engineering students, ensuring they are equipped with the latest industry-relevant expertise. Cinute Digital Pvt. Ltd. (CDPL), the learning and development unit of Testriq QA Lab, will play a key role in delivering training, workshops, and hands-on learning experiences under this collaboration.",
    trainingDuration: "The formal MoU signing ceremony was graced by esteemed dignitaries, including",
    sessionHighlights: [
      {
        title: "Dr. Rakesh Himte",
        points: ["Principal, Vidyavardhini College of Engineering"]
      },
      {
        title: "Dr. Dinesh Patil",
        points: ["Faculty Representative, Vidyavardhini College of Engineering"]
      },
      {
        title: "Shoeb Shaikh",
        points: ["Head of Learning and Development, Testriq QA Lab"]
      },
      {
        title: "Ashish Shetty",
        points: ["Assistant Manager, Learning and Development, Testriq QA Lab"]
      },
    ],
    keyTakeaways: [
      {
        title: "Empowering Future Engineers",
        description: "Students will gain practical exposure to software testing, preparing them for rewarding careers in the IT industry.",
      },
      {
        title: "Strengthening Industry-Academic Collaboration",
        description: "The MoU fosters synergy between academia and industry, ensuring engineering students acquire job-ready skills.",
      },
      {
        title: "Enhanced Learning Opportunities",
        description: "Access to expert training, live projects, and career guidance through CDPL, ensuring a comprehensive learning experience.",
      },
      {
        title: "Commitment to Excellence",
        description: "This partnership underscores Testriq QA Lab and CDPL’s dedication to nurturing talent and bridging the skill gap in software testing and quality assurance.",
      }
    ],
    highlights: [
      "Industry-Aligned Training & Workshops",
      "Live Projects & Internships",
      "Certification Programs",
      "Faculty Development Initiatives",
      "Placement Support & Career Guidance"
    ],
    heroImageUrl: "/events/mou-signing-between-vidyavardhini-college-of-engineering-and-testriq-qa-lab/MoU-Vartak-MOU.png",
    success: "With this MoU, Testriq QA Lab, Cinute Digital Pvt. Ltd., and Vidyavardhini College of Engineering reaffirm their commitment to fostering innovation, skill development, and career excellence in the field of software testing.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Vidyavardhini's College of Engineering and Technology – Cinute Digital Pvt. Ltd",
    venueAddress: "Vasai West, Vasai-Virar, Maharashtra 401202",
    venueDescription: "Vidyavardhini’s College of Engineering and Technology (VCET) in Vasai, Maharashtra, is a well-regarded engineering institution affiliated with the University of Mumbai. Established in 1994, VCET offers undergraduate programs in fields like Computer Science, Mechanical, Civil, and Electronics Engineering. Known for its quality education and modern facilities, the college provides a supportive learning environment with advanced labs and experienced faculty. Its active placement cell helps students secure roles in leading companies, making VCET a solid choice for engineering education in the Mumbai region.",
    venueImageUrl: "/events/mou-signing-between-vidyavardhini-college-of-engineering-and-testriq-qa-lab/Vidyavardhini-college.png"
  },
  {
    id: "ismail-yusuf-college-site-visit-seminar",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "ismail-yusuf-college-site-visit-seminar-careers-in-software-testing-and-data-science",
    title: "Ismail Yusuf College Site Visit & Seminar: Careers in Software Testing and Data Science – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2025-02-18 to 2025-02-18",
    location: "Ismail Yusuf College Arts, Science and Commerce",
    attendees: 62,
    category: "MoU Signing",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Partnership",
    purpose: "Cinute Digital Pvt. Ltd. (CDPL) had the privilege of hosting students from the Department of Statistics, B.Sc., Government of Maharashtra’s Ismail Yusuf College, for a site visit and an insightful seminar on Careers in Software Testing and Data Science. The visit aimed to bridge the gap between academic learning and industry expectations, offering students a deeper understanding of career opportunities in the IT sector. Guided by their faculty, students explored the dynamic world of software testing and data science, gaining valuable industry insights.",
    trainingDuration: "The seminar was structured to provide a comprehensive overview of software testing and data science, covering",
    sessionHighlights: [
      {
        title: "Introduction to Software Testing",
        points: ["Fundamentals of manual and automation testing, career paths, and industry demand."]
      },
      {
        title: "Quality Assurance in IT",
        points: ["The role of QA professionals, software development life cycle (SDLC), and modern testing tools."]
      },
      {
        title: "Data Science & Its Applications",
        points: ["Basics of data science, real-world use cases, and its significance in decision-making."]
      },
      {
        title: "Career Pathways & Growth Opportunities",
        points: ["Skills required, certifications, and industry expectations for aspiring professionals."]
      },
      {
        title: "Live Demonstrations & Industry Insights",
        points: ["Practical exposure to testing tools and data science applications, enhancing learning beyond textbooks."]
      },
    ],
    keyTakeaways: [
      {
        title: "Practical Knowledge",
        description: "Students gained hands-on insights into software testing and data science, understanding their real-world applications.",
      },
      {
        title: "Career Guidance",
        description: "The session provided clarity on career prospects, essential skills, and industry demands in these growing fields.",
      },
      {
        title: "Industry Exposure",
        description: "First-hand experience of how professional training institutes like CDPL prepare individuals for IT careers.",
      },
      {
        title: "Networking Opportunity",
        description: "Students interacted with industry experts, broadening their perspective on the evolving tech landscape.",
      }
    ],
    highlights: [
      "The interactive session allowed students to engage with industry experts, ask questions, and explore how software testing and data science are shaping the future of technology.",
    ],
    heroImageUrl: "/events/ismail-yusuf-college-site-visit-seminar-careers-in-software-testing-and-data-science/Ismil-Yusuf-Bsc.png",
    success: "This event reinforced Cinute Digital Pvt. Ltd.'s commitment to empowering future professionals with the knowledge and skills required to excel in the IT industry.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Ismail Yusuf College Arts, Science and Commerce – Cinute Digital Pvt. Ltd",
    venueAddress: "Jogeshwari, Maharashtra",
    venueDescription: "Ismail Yusuf College, is the fourth oldest college of Mumbai, India. “I Y college”, as it is popularly known, is managed by the Government of Maharashtra. It is the oldest college in North Mumbai. It was established in 1930 with a large donation from Sir Mohammed Yusuf Ismail, K.T. on Jogeshwari Hill. The foundation stone was laid by Sir Leslie Orme Wilson, Governor of Bombay in 1924.",
    venueImageUrl: "/events/ismail-yusuf-college-site-visit-seminar-careers-in-software-testing-and-data-science/ismail-yusuf-college.png"
  },
  {
    id: "future-ready-careers-bhavans-college-andheri",
    ...CDPL_BASE,  // Assuming this spreads shared base properties from the original template
    slug: "faculty-development-program-fdp-on-power-bi-tableau-unlocking-future-ready-careers-bhavans-college-andheri",
    title: "Faculty Development Program (FDP) on Power BI & Tableau – Unlocking Future-Ready Careers: Bhavan’s College Andheri – Cinute Digital Pvt. Ltd",
    subtitle: "by Cinute Digital Pvt. Ltd",
    date: "2025-02-24 to 2025-02-24",
    location: "Bhavan’s College Andheri",
    attendees: 111,
    category: "Career Guidance Seminar",
    categoryColor: "bg-green-600",  // Green for partnership/collaboration theme
    serviceType: "Business Intelligence",
    purpose: "In the evolving digital landscape, data analytics and visualization are no longer just technical skills-they are essential competencies for professionals across industries. The Faculty Development Program (FDP) on Power BI & Tableau, organized by Bhavan’s College, Andheri (West), Department of Computer Science in collaboration with IQAC and CDPL, aimed to equip educators and professionals with cutting-edge knowledge of Business Intelligence (BI) tools to enhance their teaching and research capabilities.",
    trainingDuration: "The FDP provided an interactive and hands-on learning experience, covering",
    sessionHighlights: [
      {
        title: "Introduction to Business Intelligence & Its Growing Importance",
        points: ["How BI is transforming industries like finance, healthcare, marketing, and education", "The role of data-driven decision-making in research and academic projects"]
      },
      {
        title: "Deep Dive into Power BI & Tableau",
        points: ["Creating interactive dashboards and data visualizations", "Hands-on training on DAX (Data Analysis Expressions) and Power Query for advanced data manipulation", "Exploring real-world applications of BI in academia and industry"]
      },
      {
        title: "Preparing Students for Future-Ready Careers",
        points: ["Understanding industry expectations for data analysts and BI professionals", "Strategies for integrating BI tools into coursework and research", "Career pathways in data analytics, visualization, and AI-driven decision-making"]
      },

    ],
    keyTakeaways: [
      {
        title: "Data analytics is the future",
        description: "Equipping students and professionals with BI skills is critical for career success.",
      },
      {
        title: "Power BI & Tableau",
        description: "Educators must integrate Power BI & Tableau into their curriculum to prepare students for data-driven job roles.",
      },
      {
        title: "Real-world datasets",
        description: "Hands-on experience with real-world datasets is essential to bridge the gap between theory and industry demands.",
      },
    ],
    highlights: [
      "Empowering faculty members with practical BI skills to integrate into academic curriculum",
      "Introducing Power BI & Tableau as essential tools for data-driven decision-making",
      "Exploring career opportunities in data analytics and how educators can prepare students for the future job market"
    ],
    heroImageUrl: "/events/faculty-development-program-fdp-on-power-bi-tableau-unlocking-future-ready-careers-bhavans-college-andheri/bhavan-college-program.webp",
    success: "This FDP reinforced the importance of continuous learning and upskilling in BI tools, ensuring that educators and professionals stay ahead in an increasingly data-centric world.",
    featured: true,  // Assumed prominent as a partnership milestone
    organizationImage: "/cdpl-logo.png",
    organizationWebsite: new URL("https://cinutedigital.com"),
    organizationFacebook: new URL("https://www.facebook.com/cinutedigital"),
    organizationInstagram: new URL("https://www.instagram.com/cinutedigital/"),
    organizationTwitter: new URL("https://x.com/cinutedigital"),
    organizationYoutube: new URL("https://www.youtube.com/@cinutedigital"),
    galleryCount: 5,  // Placeholder estimate for ceremony photos
    organizerDetails: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai. Specializing in Manual and Automation Software Testing, Data Science, and Digital Marketing, CDPL offers both online and on-premise courses designed to bridge the gap between academic education and industry demands. Their curriculum is crafted by industry experts, ensuring students acquire practical skills applicable across various sectors. CDPL’s commitment to quality education is evident through their state-of-the-art training center, which provides hands-on experience with live projects. The institute also offers dedicated placement assistance, helping students secure positions in multinational corporations. With a focus on empowering students and fostering a collaborative learning environment, CDPL stands out as a leader in IT training and certification.",
    organizationAbout: new URL("https://cinutedigital.com/about-us"),
    venueTitle: "Bhavans College Andheri – Cinute Digital Pvt. Ltd",
    venueAddress: "Andheri, Maharashtra",
    venueDescription: "Bhavan’s College is a college located nearby Azad Nagar Metro Station in Andheri West, a neighborhood in western Mumbai, India. It primarily offers higher secondary (junior college) and undergraduate (bachelor’s) courses. There a few postgraduate and PhD programs too. It also include various types of fest, games, curricular activity etc.",
    venueImageUrl: "/events/faculty-development-program-fdp-on-power-bi-tableau-unlocking-future-ready-careers-bhavans-college-andheri/bhavan-college-logo.webp"
  }
];

// Helper function to get event by slug
export const getEventBySlug = (slug: string): PastEvent | undefined => {
  return pastEvents.find(event => event.slug === slug);
};

// Helper function to get events by service type
export const getEventsByService = (serviceType: string): PastEvent[] => {
  return pastEvents.filter(event => event.serviceType === serviceType);
};

// Helper function to get featured events
export const getFeaturedEvents = (): PastEvent[] => {
  return pastEvents.filter(event => event.featured);
};

// Helper function to get events by category
export const getEventsByCategory = (category: string): PastEvent[] => {
  return pastEvents.filter(event => event.category === category);
};
