export type Question = {
    id: string;
    text: string;
    options: string[];
    correctAnswer: number; // Index of the correct option
};

export type MockCourse = {
    id: string;
    slug: string;
    name: string;
    description: string;
    categoryId: string;
    questions: Question[];
};

export type MockCategory = {
    id: string;
    name: string;
    courses: MockCourse[];
};

const softwareTestingQuestions: Question[] = [
    { id: "st1", text: "What is the primary goal of software testing?", options: ["To find bugs", "To fix bugs", "To increase code size", "To document code"], correctAnswer: 0 },
    { id: "st2", text: "Which testing is done without planning in an unorganized way?", options: ["Sanity Testing", "Ad-hoc Testing", "Smoke Testing", "Regression Testing"], correctAnswer: 1 },
    { id: "st3", text: "What is a 'Bug' in software testing?", options: ["A feature", "An error or flaw", "A type of virus", "A security patch"], correctAnswer: 1 },
    { id: "st4", text: "Which tool is commonly used for API testing?", options: ["Selenium", "Postman", "JUnit", "Figma"], correctAnswer: 1 },
    { id: "st5", text: "What does SDLC stand for?", options: ["System Design Life Cycle", "Software Development Life Cycle", "Software Design Logic Code", "System Development Logic Core"], correctAnswer: 1 },
];

const dataScienceQuestions: Question[] = [
    { id: "ds1", text: "Which language is most popular for Data Science?", options: ["Java", "Python", "C++", "Ruby"], correctAnswer: 1 },
    { id: "ds2", text: "What is Supervised Learning?", options: ["Learning with labeled data", "Learning with unlabeled data", "Learning with no data", "Learning with rewards"], correctAnswer: 0 },
    { id: "ds3", text: "Which library is used for data manipulation in Python?", options: ["Numpy", "Pandas", "Matplotlib", "Seaborn"], correctAnswer: 1 },
    { id: "ds4", text: "What is Overfitting?", options: ["Model learns noise", "Model is too simple", "Model is too slow", "Model has low accuracy"], correctAnswer: 0 },
    { id: "ds5", text: "What does NLP stand for?", options: ["Natural Language Processing", "Neural Language Programming", "Natural Linear Programming", "Network Learning Protocol"], correctAnswer: 0 },
];

const biQuestions: Question[] = [
    { id: "bi1", text: "What is the full form of BI?", options: ["Business Information", "Business Intelligence", "Basic Intelligence", "Binary Intelligence"], correctAnswer: 1 },
    { id: "bi2", text: "Which tool is a popular BI tool?", options: ["Photoshop", "Tableau", "AutoCAD", "Blender"], correctAnswer: 1 },
    { id: "bi3", text: "What is a Dashboard in BI?", options: ["A car part", "A visual display of data", "A coding terminal", "A database table"], correctAnswer: 1 },
    { id: "bi4", text: "What does ETL stand for?", options: ["Extract Transform Load", "Execute Test Load", "Enter Test Loop", "Extract Test Log"], correctAnswer: 0 },
    { id: "bi5", text: "Power BI is a product of which company?", options: ["Google", "Microsoft", "Apple", "IBM"], correctAnswer: 1 },
];

const aiQuestions: Question[] = [
    { id: "ai1", text: "Who is known as the father of AI?", options: ["Alan Turing", "Charles Babbage", "John McCarthy", "Elon Musk"], correctAnswer: 2 },
    { id: "ai2", text: "What is a Neural Network?", options: ["A computer cable", "A biological brain", "A computing system inspired by biological brains", "A wifi network"], correctAnswer: 2 },
    { id: "ai3", text: "Which is a type of AI?", options: ["Reactive Machines", "HTML", "CSS", "SQL"], correctAnswer: 0 },
    { id: "ai4", text: "What is Deep Learning?", options: ["Learning in depth", "A subset of ML based on neural networks", "A philosophy", "Advanced reading"], correctAnswer: 1 },
    { id: "ai5", text: "What is the Turing Test used for?", options: ["To test internet speed", "To determine if a machine can exhibit intelligent behavior", "To test hard drives", "To clean viruses"], correctAnswer: 1 },
];

const digitalMarketingQuestions: Question[] = [
    { id: "dm1", text: "What is SEO?", options: ["Search Engine Optimization", "Social Engine Operation", "Structured Engine Output", "Site External Order"], correctAnswer: 0 },
    { id: "dm2", text: "Which is a social media platform?", options: ["Google Drive", "LinkedIn", "Excel", "Notepad"], correctAnswer: 1 },
    { id: "dm3", text: "What is PPC?", options: ["Pay Per Click", "Pay Per Call", "Post Per Click", "Public Post Center"], correctAnswer: 0 },
    { id: "dm4", text: "Content Marketing focuses on?", options: ["Creating valuable content", "Cold calling", "Direct mail", "TV ads"], correctAnswer: 0 },
    { id: "dm5", text: "What is CTR?", options: ["Click Through Rate", "Call To React", "Customer Total Return", "Content Test Ratio"], correctAnswer: 0 },
];

export const mockCategories: MockCategory[] = [
    {
        id: "software-testing-courses",
        name: "Software Testing Courses",
        courses: [
            { id: "manual-testing", slug: "manual-testing-course", name: "Manual Software Testing", description: "Learn to facilitate Scrum teams and drive Agile projects effectively.", categoryId: "software-testing-courses", questions: softwareTestingQuestions },
            { id: "api-testing", slug: "api-testing", name: "API Testing using POSTMAN and RestAPIs", description: "Master product backlog management and stakeholder collaboration.", categoryId: "software-testing-courses", questions: softwareTestingQuestions },
            { id: "dbms-course", slug: "dbms-course", name: "Database Management System using MySQL", description: "Gain advanced Scrum knowledge to lead high-performing teams.", categoryId: "software-testing-courses", questions: softwareTestingQuestions },
            { id: "etl-testing", slug: "etl-testing", name: "ETL Testing Course", description: "Learn to lead Agile transformations using the SAFe framework.", categoryId: "software-testing-courses", questions: softwareTestingQuestions },
            { id: "advance-software-testing", slug: "advance-software-testing", name: "Advanced Software Testing", description: "Facilitate SAFe practices for scaled Agile environments.", categoryId: "software-testing-courses", questions: softwareTestingQuestions },
            { id: "automation-testing-course", slug: "automation-testing-course", name: "Advanced Automation Testing", description: "Drive product vision and delivery in SAFe settings.", categoryId: "software-testing-courses", questions: softwareTestingQuestions },
            { id: "advance-manual-automation-testing", slug: "advance-manual-automation-testing", name: "Advanced Manual and Automation Testing - Master Program", description: "Blend Agile principles with PMI project management standards.", categoryId: "software-testing-courses", questions: softwareTestingQuestions },
            { id: "python-course-st", slug: "python-course", name: "Python Programming", description: "Master containerization and orchestration technologies.", categoryId: "software-testing-courses", questions: softwareTestingQuestions },
            { id: "java-course", slug: "java-course", name: "Java Programming", description: "Automate CI/CD pipelines with Jenkins.", categoryId: "software-testing-courses", questions: softwareTestingQuestions },
        ],
    },
    {
        id: "data-science",
        name: "Data Science",
        courses: [
            { id: "machine-learning-course", slug: "machine-learning-course", name: "Machine Learning and Data Science with Python - Hero Program", description: "Build strategies to ace behavioral and technical interviews.", categoryId: "data-science", questions: dataScienceQuestions },
            { id: "generative-ai-course", slug: "generative-ai-course", name: "Deep Learning, NLP and GenerativeAI", description: "Practice real-world interview scenarios with feedback.", categoryId: "data-science", questions: dataScienceQuestions },
            { id: "data-science-course", slug: "data-science-course", name: "Advanced Data Science and Machine Learning Masterclass", description: "Master coding challenges and technical questions.", categoryId: "data-science", questions: dataScienceQuestions },
            { id: "ai-course", slug: "ai-course", name: "Comprehensive Data Science and AI - Master Program", description: "Master coding challenges and technical questions.", categoryId: "data-science", questions: dataScienceQuestions },
            { id: "python-course-ds", slug: "python-course", name: "Python Programming", description: "Master containerization and orchestration technologies.", categoryId: "data-science", questions: dataScienceQuestions },
            { id: "machine-learning-using-python", slug: "machine-learning-using-python", name: "Machine Learning Algorithms using python Programming", description: "Master containerization and orchestration technologies.", categoryId: "data-science", questions: dataScienceQuestions },
            { id: "data-visualization-in-r-programming", slug: "data-visualization-in-r-programming", name: "Machine Learning and Data Visualization using R Programming", description: "Master containerization and orchestration technologies.", categoryId: "data-science", questions: dataScienceQuestions },
        ],
    },
    {
        id: "business-intelligence",
        name: "Business Intelligence (BI)",
        courses: [
            { id: "data-analytics", slug: "data-analytics", name: "Advanced Data Analytics - Hero Program", description: "Craft a standout resume to impress recruiters.", categoryId: "business-intelligence", questions: biQuestions },
            { id: "data-analytics-python", slug: "data-analytics-python", name: "Advanced Data Analytics with Python Libraries", description: "Craft a standout resume to impress recruiters.", categoryId: "business-intelligence", questions: biQuestions },
            { id: "data-analytics-and-visualization", slug: "data-analytics-and-visualization", name: "Excel for Data Analytics & Visualization", description: "Craft a standout resume to impress recruiters.", categoryId: "business-intelligence", questions: biQuestions },
            { id: "data-analytics-with-tableau", slug: "data-analytics-with-tableau", name: "Data Analytics & Visualization with Tableau", description: "Craft a standout resume to impress recruiters.", categoryId: "business-intelligence", questions: biQuestions },
            { id: "power-bi-course", slug: "power-bi-course", name: "Data Analytics & Visualization with Power BI", description: "Craft a standout resume to impress recruiters.", categoryId: "business-intelligence", questions: biQuestions },
            { id: "masters-in-data-engineering", slug: "masters-in-data-engineering", name: "Data Analytics With BI And Big Data Engineering Master Program", description: "Craft a standout resume to impress recruiters.", categoryId: "business-intelligence", questions: biQuestions },
        ],
    },
    {
        id: "artificial-intelligence",
        name: "Artificial Intelligence (AI)",
        courses: [
            { id: "prompt-engineering-course", slug: "prompt-engineering-course", name: "Prompt Engineering with Generative AI", description: "Master coding challenges and technical questions.", categoryId: "artificial-intelligence", questions: aiQuestions },
        ],
    },
    {
        id: "digital-marketing",
        name: "Digital Marketing",
        courses: [
            { id: "digital-marketing-course", slug: "digital-marketing-course", name: "AI-Driven Digital Marketing & Analytics", description: "Earn the globally recognized PMP certification.", categoryId: "digital-marketing", questions: digitalMarketingQuestions },
            { id: "ai-in-digital-marketing", slug: "ai-in-digital-marketing", name: "Digital Marketing and AI (For Business Owners)", description: "Earn the globally recognized PMP certification.", categoryId: "digital-marketing", questions: digitalMarketingQuestions },
            { id: "ai-bootcamp", slug: "ai-bootcamp", name: "Digital Marketing With AI Bootcamp", description: "Earn the globally recognized PMP certification.", categoryId: "digital-marketing", questions: digitalMarketingQuestions },
        ],
    },
    {
        id: "aaa-accredited",
        name: "AAA Accredited Courses",
        courses: [
            { id: "aaa-advance-software-testing", slug: "advance-software-testing", name: "Advanced Software Testing", description: "Analyze data to drive business decisions.", categoryId: "aaa-accredited", questions: softwareTestingQuestions },
            { id: "aaa-automation-testing-course", slug: "automation-testing-course", name: "Advanced Automation Testing", description: "Build predictive models with machine learning techniques.", categoryId: "aaa-accredited", questions: softwareTestingQuestions },
            { id: "aaa-data-science-course", slug: "data-science-course", name: "Advanced Data Science and Machine Learning - Masterclass", description: "Use Python for data analysis and visualization.", categoryId: "aaa-accredited", questions: dataScienceQuestions },
            { id: "aaa-masters-in-data-engineering", slug: "masters-in-data-engineering", name: "Data Analysis with BI & Big Data Engineering - Master Program", description: "Create interactive data visualizations with Power BI.", categoryId: "aaa-accredited", questions: biQuestions },
        ],
    },
];
