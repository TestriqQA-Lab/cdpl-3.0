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
  sessionHighlights: {
    title: string;
    points: string[];
  }[];
  specialSession?: {
    speaker: string;
    topic: string;
    highlights: string[];
  };
  keyTakeaways: string[];
  highlights: string[];
  imageUrl?: string;
  heroImageUrl?: string;
  featured?: boolean;
  galleryCount?: number;
  videoUrl?: string;

  gallery?: string[];          // For Image Gallery section
  organizerDetails?: string;   // Extra organizer info (optional)

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
    id: "industrial-visit-thakur-college",
    ...CDPL_BASE,
    slug: "industrial-visit-thakur-college-of-science-commerce",
    title: "Industrial Visit – Thakur College of Science & Commerce",
    subtitle: "Bridging the Gap Between Classroom and Industry",
    date: "October 10, 2024", // Estimated date based on context, update if known
    location: "Cinute Digital Pvt. Ltd, Mira Road",
    attendees: 40,
    category: "Industrial Visit",
    categoryColor: "bg-blue-600",
    serviceType: "industrial-visits",
    purpose: "Industrial visits offer students a unique opportunity to connect classroom theories with industry practices. Cinute Digital Pvt. Ltd. and Testriq QA Lab, LLP hosted an industrial visit for 40 students from Thakur College of Science & Commerce to provide them with a firsthand understanding of the IT sector, specifically focusing on software testing and quality assurance processes.",
    sessionHighlights: [
      {
        title: "Welcome & Introduction",
        points: ["Journey, achievements, and core services of Cinute Digital Pvt. Ltd. and Testriq QA Lab, LLP."]
      },
      {
        title: "Introduction to Software Testing",
        points: ["Overview of quality assurance, reliability, performance, and security."]
      },
      {
        title: "Hands-on Demonstration of QA Tools",
        points: ["Live demos of Selenium WebDriver, JIRA, Postman, and GitHub Copilot."]
      },
      {
        title: "Exploring Career Paths",
        points: ["Insights into manual testing, automation testing, and AI-driven QA."]
      },
      {
        title: "Real-Time Project Workflow",
        points: ["Walkthrough of requirement gathering, test case creation, execution, and defect management."]
      },
      {
        title: "Interactive Q&A Session",
        points: ["Discussion on industry trends, skill requirements, and tips for entering the IT industry."]
      },
      {
        title: "Office Tour",
        points: ["Guided exploration of the workplace and technologies in action."]
      }
    ],
    keyTakeaways: [
      "Comprehensive understanding of quality assurance in software development.",
      "Exposure to real-world testing tools and methodologies.",
      "Clarity on career paths in IT and QA domains.",
      "Inspiration and actionable guidance for industry readiness."
    ],
    highlights: [
      "Hands-on QA Tools Demo",
      "Real-Time Project Workflow",
      "Career Path Exploration",
      "Office Tour"
    ],
    featured: true,
    galleryCount: 10, // Placeholder
    venueTitle: "Cinute Digital Pvt. Ltd.",
    venueAddress: "Mira Road East, Mumbai",
    venueDescription: "Cinute Digital Pvt. Ltd. (CDPL) is a premier software training institute based in Mira Road, Mumbai.",
    venueImageUrl: "/cdpl-logo.png", // Fallback
  },
  {
    id: "job-fair-nirmala-college",
    ...CDPL_BASE,
    slug: "job-fair",
    title: "Job Fair at Nirmala College",
    subtitle: "Connecting Graduates with Opportunities",
    date: "November 15, 2024", // Estimated
    location: "Nirmala College, Kandivali East",
    attendees: 150,
    category: "Placement Drive",
    categoryColor: "bg-green-600",
    serviceType: "placement-drive",
    purpose: "The Job Fair at Nirmala College was a remarkable initiative to connect B.Sc. students with potential employers, bridging the gap between academia and industry. With 150 participants, the event aimed to provide a platform for graduates to explore exciting career opportunities.",
    sessionHighlights: [
      {
        title: "Inaugural Session",
        points: ["Welcome address emphasizing the significance of job fairs."]
      },
      {
        title: "Industry Stalls",
        points: ["Recruitment booths from IT, biotechnology, finance, and healthcare sectors."]
      },
      {
        title: "Resume Building Workshop",
        points: ["Practical tips from industry experts on crafting professional resumes."]
      },
      {
        title: "Mock Interviews",
        points: ["On-the-spot interview practice sessions to improve confidence."]
      },
      {
        title: "Career Guidance Talks",
        points: ["Talks by recruiters on emerging trends and industry expectations."]
      },
      {
        title: "Networking Opportunities",
        points: ["One-on-one interactions with employers."]
      }
    ],
    keyTakeaways: [
      "Clarity on career opportunities for B.Sc. graduates.",
      "Enhanced employability skills (resumes, interviews).",
      "Networking benefits with recruiters.",
      "Renewed confidence and motivation."
    ],
    highlights: [
      "Industry Stalls",
      "Resume Workshop",
      "Mock Interviews",
      "Networking"
    ],
    featured: true,
    galleryCount: 15, // Placeholder
    venueTitle: "Nirmala College",
    venueAddress: "Kandivali East, Mumbai",
  },
  {
    id: "business-analytics-aldel",
    ...CDPL_BASE,
    slug: "business-analytics-course-at-aldel-institute-of-management",
    title: "Business Analytics Course at Aldel Institute of Management",
    subtitle: "Empowering Students with Data-Driven Skills",
    date: "October 15, 2024", // Estimated date
    location: "Aldel Institute of Management, Palghar",
    attendees: 60, // Estimated
    category: "Course Conducted",
    categoryColor: "bg-purple-600",
    serviceType: "lecture-series",
    purpose: "Cinute Digital Pvt. Ltd. (CDPL), the learning and development unit of Testriq QA Lab, successfully conducted a 30-hour Business Analytics Course at Aldel Institute of Management. Led by Ashish Shetty, Assistant Manager – Learning and Development, this course was designed to equip students with industry-relevant business analytics skills, helping them gain practical expertise in data visualization, analytics, and decision-making.",
    sessionHighlights: [
      {
        title: "Introduction to Business Analytics",
        points: ["Understanding fundamentals, key concepts, and applications across industries."]
      },
      {
        title: "Hands-on Training in Power BI",
        points: ["Data connection, transformation, report building, and interactive dashboard creation."]
      },
      {
        title: "Tableau for Data Visualization",
        points: ["Mastering data storytelling, advanced charting techniques, and dashboard design."]
      },
      {
        title: "Real-World Sales Project",
        points: ["Practical business case study, analyzing sales data and creating dynamic dashboards."]
      },
      {
        title: "Industry Applications & Case Studies",
        points: ["How business analytics drives decision-making in retail, finance, and supply chain."]
      }
    ],
    keyTakeaways: [
      "Proficiency in Power BI & Tableau.",
      "Practical Business Analytics Knowledge.",
      "Project-Based Learning with real-world challenges.",
      "Enhanced Career Prospects in business intelligence and consulting."
    ],
    highlights: [
      "Power BI & Tableau Training",
      "Real-World Sales Project",
      "Industry Case Studies",
      "Data Storytelling"
    ],
    featured: true,
    galleryCount: 20, // Placeholder
    venueTitle: "Aldel Institute of Management",
    venueAddress: "Palghar, Maharashtra",
  },
  {
    id: "1",
    ...CDPL_BASE,
    slug: "ai-conference-nagindas-khandwala",
    title: "National Conference on Applications of AI",
    subtitle: "Promises, Perils, and Sustainability",
    date: "February 14, 2025",
    location: "MKES Trust Nagindas Khandwala College, Mumbai",
    // organization: "Nagindas Khandwala College",
    attendees: 110,
    category: "AI & Machine Learning",
    categoryColor: "bg-purple-500",
    serviceType: "expert-talks",
    purpose: "Artificial Intelligence (AI) is no longer just a futuristic concept—it is transforming industries, businesses, and human interactions in real time. However, with rapid advancements in AI, new challenges arise, including ethical concerns, bias, and governance issues. This session aimed to provide an in-depth look at Generative AI, Large Language Models (LLMs), and Business Intelligence (BI).",
    sessionHighlights: [
      {
        title: "Introduction to Generative AI and Large Language Models (LLMs)",
        points: [
          "How AI models learn from data and generate human-like responses",
          "The potential of LLMs in automating content creation, customer support, and data analysis",
          "Limitations of LLMs: Bias, misinformation, and ethical concerns"
        ]
      },
      {
        title: "Applications of AI-Driven Business Intelligence (BI) for Decision-Making",
        points: [
          "AI-powered predictive analytics for market trends and customer behavior",
          "AI in fraud detection and cybersecurity",
          "Real-world case studies of companies leveraging AI for competitive advantage"
        ]
      },
      {
        title: "The Ethical and Governance Challenges in AI Adoption",
        points: [
          "How AI bias and misinformation can lead to flawed decision-making",
          "The role of government policies and regulations in AI governance",
          "Discussing AI ethics and responsible AI development"
        ]
      },
      {
        title: "Case Studies on AI-Driven Automation in Industry",
        points: [
          "How AI is being used in healthcare, finance, and manufacturing",
          "The role of AI in automating supply chains and logistics",
          "How businesses are balancing AI-driven automation with human oversight"
        ]
      }
    ],
    specialSession: {
      speaker: "Shoeb Sheikh, Head of Learning & Development at Testriq QA Lab",
      topic: "AI Integration in Software Testing",
      highlights: [
        "How AI-powered testing tools improve software quality and efficiency",
        "The role of machine learning in detecting software defects faster",
        "AI-driven automation in regression and performance testing"
      ]
    },
    keyTakeaways: [
      "AI is not a replacement for human intelligence but an amplifier of it",
      "Businesses that adopt AI responsibly will gain a competitive edge",
      "Ethical AI development is critical for sustainability and trust",
      "The right balance of AI and human expertise is the key to long-term AI adoption"
    ],
    highlights: [
      "Introduction to Generative AI and LLMs",
      "AI-Driven Business Intelligence applications",
      "Ethical and Governance Challenges",
      "AI Integration in Software Testing"
    ],
    featured: true,
    galleryCount: 45,
  },
  {
    id: "2",
    ...CDPL_BASE,
    slug: "software-testing-workshop-bangalore",
    title: "Software Testing Workshop",
    subtitle: "Manual & Automation Testing Masterclass",
    date: "January 20, 2025",
    location: "Corporate Training Center, Bangalore",
    // organization: "Tech Corp India",
    attendees: 85,
    category: "Software Testing",
    categoryColor: "bg-green-500",
    serviceType: "workshops",
    purpose: "A comprehensive workshop designed to equip participants with both manual and automation testing skills. The session covered industry best practices, hands-on exercises, and real-world testing scenarios to prepare professionals for modern QA challenges.",
    sessionHighlights: [
      {
        title: "Manual Testing Fundamentals",
        points: [
          "Test case design and execution strategies",
          "Bug reporting and tracking best practices",
          "Exploratory testing techniques",
          "Test documentation and reporting"
        ]
      },
      {
        title: "Automation Testing with Selenium",
        points: [
          "Setting up Selenium WebDriver framework",
          "Writing robust test scripts",
          "Page Object Model implementation",
          "Cross-browser testing strategies"
        ]
      },
      {
        title: "API Testing with Postman",
        points: [
          "RESTful API testing fundamentals",
          "Creating and managing test collections",
          "Automated API testing workflows",
          "Integration with CI/CD pipelines"
        ]
      },
      {
        title: "Performance Testing Basics",
        points: [
          "Load testing concepts and tools",
          "Performance metrics and analysis",
          "Identifying bottlenecks",
          "Best practices for scalability testing"
        ]
      }
    ],
    keyTakeaways: [
      "Quality assurance is integral to software development lifecycle",
      "Automation testing increases efficiency and test coverage",
      "API testing is crucial for modern microservices architecture",
      "Continuous testing enables faster and more reliable releases"
    ],
    highlights: [
      "Comprehensive manual testing techniques",
      "Selenium automation framework",
      "API testing with Postman",
      "Performance testing fundamentals"
    ],
    featured: false,
    galleryCount: 32,
  },
  {
    id: "3",
    ...CDPL_BASE,
    slug: "data-science-bootcamp-iit-delhi",
    title: "Data Science & Analytics Bootcamp",
    subtitle: "From Data to Insights",
    date: "December 15, 2024",
    location: "IIT Delhi",
    // organization: "Indian Institute of Technology, Delhi",
    attendees: 150,
    category: "Data Science",
    categoryColor: "bg-blue-500",
    serviceType: "workshops",
    purpose: "An intensive bootcamp focused on transforming raw data into actionable insights. Participants learned the complete data science workflow from data collection to visualization, with hands-on projects using industry-standard tools and real-world datasets.",
    sessionHighlights: [
      {
        title: "Python for Data Analysis",
        points: [
          "NumPy and Pandas for data manipulation",
          "Data cleaning and preprocessing techniques",
          "Exploratory data analysis (EDA)",
          "Working with different data formats"
        ]
      },
      {
        title: "Machine Learning Algorithms",
        points: [
          "Supervised learning: Regression and Classification",
          "Unsupervised learning: Clustering and Dimensionality Reduction",
          "Model evaluation and selection",
          "Feature engineering best practices"
        ]
      },
      {
        title: "Data Visualization with Tableau",
        points: [
          "Creating interactive dashboards",
          "Visual analytics techniques",
          "Storytelling with data",
          "Best practices for effective visualization"
        ]
      },
      {
        title: "Real-World Case Studies",
        points: [
          "Customer segmentation analysis",
          "Predictive maintenance in manufacturing",
          "Fraud detection in financial services",
          "Recommendation systems"
        ]
      }
    ],
    keyTakeaways: [
      "Data-driven decision making is essential for business success",
      "Python is the industry standard for data science",
      "Effective visualization makes data accessible to stakeholders",
      "Machine learning models require continuous refinement and monitoring"
    ],
    highlights: [
      "Python for data analysis",
      "Machine learning algorithms",
      "Data visualization with Tableau",
      "Real-world case studies"
    ],
    featured: true,
    galleryCount: 58,
    videoUrl: "/events/recordings/data-science-bootcamp",
  },
  {
    id: "4",
    ...CDPL_BASE,
    slug: "faculty-development-mumbai-university",
    title: "Faculty Development Program",
    subtitle: "Modern Teaching Methodologies",
    date: "November 10, 2024",
    location: "Mumbai University",
    // organization: "University of Mumbai",
    attendees: 75,
    category: "Academic Training",
    categoryColor: "bg-orange-500",
    serviceType: "faculty-development",
    purpose: "A comprehensive program designed to enhance teaching capabilities of faculty members. The program focused on modern pedagogical approaches, digital tools integration, and student-centric teaching methods to improve learning outcomes.",
    sessionHighlights: [
      {
        title: "Student-Centric Teaching Approaches",
        points: [
          "Active learning strategies",
          "Flipped classroom methodology",
          "Collaborative learning techniques",
          "Differentiated instruction methods"
        ]
      },
      {
        title: "Digital Tools for Education",
        points: [
          "Learning Management Systems (LMS)",
          "Interactive presentation tools",
          "Online assessment platforms",
          "Virtual collaboration tools"
        ]
      },
      {
        title: "Curriculum Design Workshop",
        points: [
          "Outcome-based education framework",
          "Bloom's Taxonomy application",
          "Course structure and syllabus design",
          "Alignment with industry requirements"
        ]
      },
      {
        title: "Assessment and Feedback Techniques",
        points: [
          "Formative vs summative assessment",
          "Rubric development",
          "Effective feedback strategies",
          "Continuous improvement processes"
        ]
      }
    ],
    keyTakeaways: [
      "Active learning significantly enhances student engagement",
      "Technology integration improves teaching effectiveness",
      "Continuous faculty development is essential for quality education",
      "Constructive feedback drives student improvement"
    ],
    highlights: [
      "Student-centric teaching approaches",
      "Digital tools for education",
      "Curriculum design workshop",
      "Assessment and feedback techniques"
    ],
    featured: false,
    galleryCount: 28,
  },
  {
    id: "5",
    ...CDPL_BASE,
    slug: "fullstack-workshop-infosys-pune",
    title: "Full Stack Development Workshop",
    subtitle: "MERN Stack Intensive Training",
    date: "October 25, 2024",
    location: "Pune IT Park",
    // organization: "Infosys Limited",
    attendees: 120,
    category: "Web Development",
    categoryColor: "bg-cyan-500",
    serviceType: "workshops",
    purpose: "An intensive workshop covering the complete MERN (MongoDB, Express.js, React.js, Node.js) stack. Participants built full-stack applications from scratch, learning modern web development practices and deployment strategies.",
    sessionHighlights: [
      {
        title: "MongoDB Database Design",
        points: [
          "NoSQL database concepts",
          "Schema design and modeling",
          "CRUD operations and queries",
          "Database optimization techniques"
        ]
      },
      {
        title: "Express.js Backend Development",
        points: [
          "RESTful API architecture",
          "Middleware and routing",
          "Authentication and authorization",
          "Error handling best practices"
        ]
      },
      {
        title: "React.js Frontend Mastery",
        points: [
          "Component-based architecture",
          "State management with Redux",
          "React Hooks and modern patterns",
          "Performance optimization"
        ]
      },
      {
        title: "Node.js Server-Side Programming",
        points: [
          "Asynchronous programming patterns",
          "File system operations",
          "Package management with npm",
          "Deployment and scaling strategies"
        ]
      }
    ],
    keyTakeaways: [
      "Full stack skills are highly valued in the industry",
      "MERN stack is the industry-standard for modern web applications",
      "Hands-on projects build practical confidence",
      "Continuous learning is essential in web development"
    ],
    highlights: [
      "MongoDB database design",
      "Express.js backend development",
      "React.js frontend mastery",
      "Node.js server-side programming"
    ],
    featured: false,
    galleryCount: 41,
  },
  {
    id: "6",
    ...CDPL_BASE,
    slug: "industrial-visit-tata-motors",
    title: "Industrial Visit & Training",
    subtitle: "Manufacturing Excellence Tour",
    date: "September 18, 2024",
    location: "Tata Motors Plant, Pune",
    // organization: "Engineering College, Nashik",
    attendees: 60,
    category: "Industrial Training",
    categoryColor: "bg-teal-500",
    serviceType: "industrial-visits",
    purpose: "An immersive industrial visit providing students with firsthand exposure to world-class manufacturing processes. Participants observed live production lines, quality control systems, and automation technologies while interacting with industry professionals.",
    sessionHighlights: [
      {
        title: "Live Manufacturing Process Observation",
        points: [
          "Assembly line operations",
          "Lean manufacturing principles",
          "Just-in-time production systems",
          "Workflow optimization techniques"
        ]
      },
      {
        title: "Quality Control Systems",
        points: [
          "Six Sigma methodology",
          "Statistical process control",
          "Defect prevention strategies",
          "Quality assurance protocols"
        ]
      },
      {
        title: "Automation in Production",
        points: [
          "Robotic process automation",
          "IoT integration in manufacturing",
          "Predictive maintenance systems",
          "Industry 4.0 technologies"
        ]
      },
      {
        title: "Interaction with Industry Experts",
        points: [
          "Career guidance session",
          "Skills required in manufacturing",
          "Q&A with plant managers",
          "Networking opportunities"
        ]
      }
    ],
    keyTakeaways: [
      "Theory meets practical application in real-world settings",
      "Industry exposure is invaluable for career preparation",
      "Quality is non-negotiable in manufacturing",
      "Automation and technology drive efficiency and innovation"
    ],
    highlights: [
      "Live manufacturing process observation",
      "Quality control systems",
      "Automation in production",
      "Interaction with industry experts"
    ],
    featured: true,
    galleryCount: 67,
    heroImageUrl: "/events/industrial-visit-tata-motors/hero.png",
    gallery: [
      "/events/industrial-visit-tata-motors/1.jpg",
      "/events/industrial-visit-tata-motors/2.jpg",
      "/events/industrial-visit-tata-motors/3.jpg",
    ],
    venueTitle: "Viva Institute of Technology",
    venueFallbackImageUrl: "/cdpl-logo.png",
    venueImageUrl: "/venues/viva-institute-of-technology",
    venueDescription: "VIVA Institute of Technology, established in 2009 and located in Virar, Maharashtra, is an engineering college affiliated with the University of Mumbai. It offers undergraduate and postgraduate programs in various engineering fields and is approved by AICTE and DTE, Maharashtra. The institute focuses on providing quality education with a modern campus, well-equipped laboratories, a computerized library, and a strong emphasis on industry-ready skills through its placement and training cell and Innovation and Incubation Centre",
    venueAddress: "Shirgaon, Virar"
  },
  {
    id: "7",
    ...CDPL_BASE,
    slug: "train-the-trainer-program-corporate",
    title: "Train-the-Trainer Program",
    subtitle: "Building Internal Training Capability",
    date: "August 5, 2024",
    location: "Mumbai Corporate Hub",
    // organization: "Multinational IT Corporation",
    attendees: 45,
    category: "Corporate Training",
    categoryColor: "bg-pink-500",
    serviceType: "train-the-trainer",
    purpose: "A specialized program designed to develop internal trainers who can effectively deliver technical and soft skills training within their organizations. Participants learned instructional design, delivery techniques, and assessment methods.",
    sessionHighlights: [
      {
        title: "Instructional Design Mastery",
        points: [
          "ADDIE model for training design",
          "Learning objectives formulation",
          "Content structuring techniques",
          "Training material development"
        ]
      },
      {
        title: "Delivery Techniques",
        points: [
          "Presentation skills enhancement",
          "Engaging diverse learners",
          "Handling difficult participants",
          "Virtual training best practices"
        ]
      },
      {
        title: "Feedback and Assessment Methods",
        points: [
          "Formative and summative assessments",
          "Kirkpatrick's evaluation model",
          "Providing constructive feedback",
          "Measuring training effectiveness"
        ]
      },
      {
        title: "Training Material Development",
        points: [
          "Creating engaging presentations",
          "Developing hands-on exercises",
          "Assessment design",
          "Resource compilation"
        ]
      }
    ],
    keyTakeaways: [
      "Effective trainers are made, not born",
      "Instructional design is the foundation of good training",
      "Engagement is key to knowledge retention",
      "Continuous improvement through feedback is essential"
    ],
    highlights: [
      "Instructional design mastery",
      "Delivery techniques",
      "Feedback and assessment methods",
      "Training material development"
    ],
    featured: false,
    galleryCount: 23,
  },
  {
    id: "8",
    ...CDPL_BASE,
    slug: "sttp-iot-applications",
    title: "STTP on IoT Applications",
    subtitle: "Internet of Things in Smart Systems",
    date: "July 12, 2024",
    location: "VIT Pune",
    // organization: "Vishwakarma Institute of Technology",
    attendees: 95,
    category: "Technology",
    categoryColor: "bg-indigo-500",
    serviceType: "sttp",
    purpose: "A 5-day Short Term Training Program focused on Internet of Things (IoT) applications in smart systems. Faculty and students learned IoT fundamentals, sensor integration, data analytics, and real-world implementation strategies.",
    sessionHighlights: [
      {
        title: "IoT Fundamentals",
        points: [
          "IoT architecture and components",
          "Communication protocols (MQTT, CoAP)",
          "Edge computing concepts",
          "IoT security considerations"
        ]
      },
      {
        title: "Sensor Integration and Data Collection",
        points: [
          "Sensor types and selection",
          "Arduino and Raspberry Pi programming",
          "Data acquisition techniques",
          "Calibration and accuracy"
        ]
      },
      {
        title: "IoT Data Analytics",
        points: [
          "Real-time data processing",
          "Cloud platforms for IoT",
          "Data visualization dashboards",
          "Predictive analytics applications"
        ]
      },
      {
        title: "Real-World IoT Projects",
        points: [
          "Smart home automation",
          "Industrial IoT applications",
          "Smart agriculture systems",
          "Healthcare monitoring solutions"
        ]
      }
    ],
    keyTakeaways: [
      "IoT is transforming industries across sectors",
      "Hands-on experience is crucial for IoT mastery",
      "Security must be built into IoT systems from the start",
      "Data analytics unlocks the true value of IoT"
    ],
    highlights: [
      "IoT fundamentals and architecture",
      "Sensor integration techniques",
      "IoT data analytics",
      "Real-world project implementation"
    ],
    featured: false,
    galleryCount: 52,
  },
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
