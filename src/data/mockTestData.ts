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

const manualTestingQuestions: Question[] = [
    { id: "mt1", text: "What is the main objective of Manual Testing?", options: ["To automate tests", "To find defects manually", "To write code", "To deploy applications"], correctAnswer: 1 },
    { id: "mt2", text: "Which is a Black Box Testing technique?", options: ["Boundary Value Analysis", "Statement Coverage", "Branch Coverage", "Code Review"], correctAnswer: 0 },
    { id: "mt3", text: "What is a Test Case?", options: ["A set of conditions to determine if a system works", "A bug report", "A piece of code", "A diagram"], correctAnswer: 0 },
    { id: "mt4", text: "When does testing begin in SDLC?", options: ["After coding", "During requirements analysis", "After deployment", "During improved coding"], correctAnswer: 1 },
    { id: "mt5", text: "What is Severity in testing?", options: ["Difficulty of fixing a bug", "Impact of a bug on the application", "Time taken to test", "Priority of the bug"], correctAnswer: 1 },
];

const apiTestingQuestions: Question[] = [
    { id: "api1", text: "What does API stand for?", options: ["Application Programming Interface", "Applied Program Interaction", "Application Process Integration", "Automated Program Interface"], correctAnswer: 0 },
    { id: "api2", text: "Which HTTP method is used to retrieve data?", options: ["POST", "PUT", "GET", "DELETE"], correctAnswer: 2 },
    { id: "api3", text: "What is a commonly used format for API responses?", options: ["HTML", "JSON", "CSS", "SQL"], correctAnswer: 1 },
    { id: "api4", text: "Which status code indicates success?", options: ["200", "404", "500", "403"], correctAnswer: 0 },
    { id: "api5", text: "In Postman, what is a Collection?", options: ["A group of API requests", "A specific variable", "A type of environment", "A visual chart"], correctAnswer: 0 },
];

const dbmsQuestions: Question[] = [
    { id: "db1", text: "What does SQL stand for?", options: ["Structured Question Language", "Structured Query Language", "Standard Query Limit", "Simple Query Logic"], correctAnswer: 1 },
    { id: "db2", text: "Which command is used to remove a table?", options: ["DELETE", "REMOVE", "DROP", "CLEAR"], correctAnswer: 2 },
    { id: "db3", text: "What is a Primary Key?", options: ["A duplicate value", "A unique identifier for a record", "A key to unlock the DB", "A foreign link"], correctAnswer: 1 },
    { id: "db4", text: "Which keyword sorts the result set?", options: ["SORT BY", "ORDER BY", "GROUP BY", "ALIGN BY"], correctAnswer: 1 },
    { id: "db5", text: "What is Normalization?", options: ["Increasing redundancy", "Reducing redundancy", "Deleting data", "Ignoring errors"], correctAnswer: 1 },
];

const etlQuestions: Question[] = [
    { id: "etl1", text: "What comes first in ETL?", options: ["Transform", "Load", "Extract", "Analyze"], correctAnswer: 2 },
    { id: "etl2", text: "Which is a popular ETL tool?", options: ["Informatica", "Figma", "Canva", "Trello"], correctAnswer: 0 },
    { id: "etl3", text: "What is a Data Warehouse?", options: ["A physical building", "A central repository for accumulated data", "A temporary storage", "A backup drive only"], correctAnswer: 1 },
    { id: "etl4", text: "Data Transformation involves?", options: ["Cleaning and formatting data", "Deleting all data", "Just copying data", "Printing data"], correctAnswer: 0 },
    { id: "etl5", text: "What is a Staging Area?", options: ["Final storage", "Temporary storage before loading", "User interface", "Report dashboard"], correctAnswer: 1 },
];

const automationQuestions: Question[] = [
    { id: "auto1", text: "Which tool is widely used for Web Automation?", options: ["Selenium", "Word", "Excel", "Photoshop"], correctAnswer: 0 },
    { id: "auto2", text: "What is the main benefit of Automation?", options: ["Slower testing", "Human intervention", "Repeatability and speed", "More manual work"], correctAnswer: 2 },
    { id: "auto3", text: "What language is commonly used with Selenium?", options: ["Java", "HTML", "CSS", "XMLOnly"], correctAnswer: 0 },
    { id: "auto4", text: "What is XPath?", options: ["A path to an image", "A syntax to find elements in XML/HTML", "A programming language", "A browser extension"], correctAnswer: 1 },
    { id: "auto5", text: "What is a Framework in automation?", options: ["A set of guidelines and code structure", "A specific bug", "A type of test case", "A report format"], correctAnswer: 0 },
];

const pythonQuestions: Question[] = [
    { id: "py1", text: "What is the correct file extension for Python files?", options: [".python", ".pl", ".py", ".p"], correctAnswer: 2 },
    { id: "py2", text: "How do you create a variable in Python?", options: ["x = 5", "var x = 5", "int x = 5", "declare x = 5"], correctAnswer: 0 },
    { id: "py3", text: "Which function displays text in Python?", options: ["echo()", "console.log()", "print()", "write()"], correctAnswer: 2 },
    { id: "py4", text: "List are mutable in Python.", options: ["True", "False"], correctAnswer: 0 },
    { id: "py5", text: "What is a Python Dictionary?", options: ["A list of words", "Key-Value pairs", "Ordered numbers", "A type of function"], correctAnswer: 1 },
];

const javaQuestions: Question[] = [
    { id: "jv1", text: "Java is a ___ language.", options: ["Procedural", "Object-Oriented", "Scripting", "Markup"], correctAnswer: 1 },
    { id: "jv2", text: "Which method is the entry point in Java?", options: ["start()", "init()", "main()", "run()"], correctAnswer: 2 },
    { id: "jv3", text: "What is the size of an int in Java?", options: ["4 bytes", "2 bytes", "8 bytes", "1 byte"], correctAnswer: 0 },
    { id: "jv4", text: "Which keyword inherits a class?", options: ["implements", "extends", "inherits", "uses"], correctAnswer: 1 },
    { id: "jv5", text: "Is Java platform independent?", options: ["Yes", "No"], correctAnswer: 0 },
];

const dataScienceQuestions: Question[] = [
    { id: "ds1", text: "Which language is most popular for Data Science?", options: ["Java", "Python", "C++", "Ruby"], correctAnswer: 1 },
    { id: "ds2", text: "What is Supervised Learning?", options: ["Learning with labeled data", "Learning with unlabeled data", "Learning with no data", "Learning with rewards"], correctAnswer: 0 },
    { id: "ds3", text: "Which library is used for data manipulation in Python?", options: ["Numpy", "Pandas", "Matplotlib", "Seaborn"], correctAnswer: 1 },
    { id: "ds4", text: "What is Overfitting?", options: ["Model learns noise", "Model is too simple", "Model is too slow", "Model has low accuracy"], correctAnswer: 0 },
    { id: "ds5", text: "What does NLP stand for?", options: ["Natural Language Processing", "Neural Language Programming", "Natural Linear Programming", "Network Learning Protocol"], correctAnswer: 0 },
];

const mlQuestions: Question[] = [
    { id: "ml1", text: "What is Supervised Learning?", options: ["Training with labeled data", "Training with no data", "Self-learning", "Clustering"], correctAnswer: 0 },
    { id: "ml2", text: "Which algorithm is used for Classification?", options: ["Linear Regression", "Logistic Regression", "K-Means", "Apriori"], correctAnswer: 1 },
    { id: "ml3", text: "What is a Feature in ML?", options: ["An input variable", "A bug", "A software function", "Output result"], correctAnswer: 0 },
    { id: "ml4", text: "What is Overfitting?", options: ["Model performs well on training data but poor on new data", "Model performs poor on everything", "Model is too fast", "Model is too small"], correctAnswer: 0 },
    { id: "ml5", text: "Scikit-learn is a library for?", options: ["Web dev", "Machine Learning", "Game dev", "Database"], correctAnswer: 1 },
];

const genAiQuestions: Question[] = [
    { id: "gen1", text: "What does Generative AI create?", options: ["New content (text, images, etc.)", "Only numbers", "Copies of data", "Databases"], correctAnswer: 0 },
    { id: "gen2", text: "Which is a popular LLM?", options: ["GPT-4", "Excel", "Windows", "Unix"], correctAnswer: 0 },
    { id: "gen3", text: "What is a Prompt?", options: ["Input text to guide the AI", "A command to shut down", "A type of error", "A coding loop"], correctAnswer: 0 },
    { id: "gen4", text: "BERT is primarily used for?", options: ["Image generation", "NLP tasks", "Music generation", "Video editing"], correctAnswer: 1 },
    { id: "gen5", text: "What is a Token in LLMs?", options: ["A coin", "A unit of text (part of word)", "A password", "A file"], correctAnswer: 1 },
];

const rQuestions: Question[] = [
    { id: "r1", text: "R is primarily used for?", options: ["Web Development", "Statistical Analysis & Graphics", "Game Development", "System Programming"], correctAnswer: 1 },
    { id: "r2", text: "Which symbol assigns values in R?", options: ["=", "<-", "->", "=="], correctAnswer: 1 },
    { id: "r3", text: "What is a DataFrame in R?", options: ["A 2D array-like structure", "A single number", "A text file", "A function"], correctAnswer: 0 },
    { id: "r4", text: "Which package is famous for visualization in R?", options: ["ggplot2", "pandas", "numpy", "matplotlib"], correctAnswer: 0 },
    { id: "r5", text: "Is R open source?", options: ["Yes", "No"], correctAnswer: 0 },
];

const biQuestions: Question[] = [
    { id: "bi1", text: "What is the full form of BI?", options: ["Business Information", "Business Intelligence", "Basic Intelligence", "Binary Intelligence"], correctAnswer: 1 },
    { id: "bi2", text: "Which tool is a popular BI tool?", options: ["Photoshop", "Tableau", "AutoCAD", "Blender"], correctAnswer: 1 },
    { id: "bi3", text: "What is a Dashboard in BI?", options: ["A car part", "A visual display of data", "A coding terminal", "A database table"], correctAnswer: 1 },
    { id: "bi4", text: "What does ETL stand for?", options: ["Extract Transform Load", "Execute Test Load", "Enter Test Loop", "Extract Test Log"], correctAnswer: 0 },
    { id: "bi5", text: "Power BI is a product of which company?", options: ["Google", "Microsoft", "Apple", "IBM"], correctAnswer: 1 },
];

const tableauQuestions: Question[] = [
    { id: "tb1", text: "What is Tableau primarily used for?", options: ["Data Visualization", "Coding", "Audio Editing", "Word Processing"], correctAnswer: 0 },
    { id: "tb2", text: "What is a Dimension in Tableau?", options: ["Categorical data", "Numerical data", "A 3D object", "A chart type"], correctAnswer: 0 },
    { id: "tb3", text: "What is a Measure in Tableau?", options: ["Categorical data", "Quantitative/Numerical data", "A ruler", "A strict rule"], correctAnswer: 1 },
    { id: "tb4", text: "Which file extension is a Tableau Workbook?", options: [".twb", ".txt", ".xls", ".doc"], correctAnswer: 0 },
    { id: "tb5", text: "Can Tableau connect to Excel?", options: ["Yes", "No"], correctAnswer: 0 },
];

const powerBiQuestions: Question[] = [
    { id: "pb1", text: "What is Power BI Desktop?", options: ["A cloud service", "A free localized development tool", "A paid website", "A mobile app only"], correctAnswer: 1 },
    { id: "pb2", text: "What language is used for custom columns in Power BI?", options: ["DAX", "Java", "C++", "HTML"], correctAnswer: 0 },
    { id: "pb3", text: "What does DAX stand for?", options: ["Data Analysis Operations", "Data Analysis Expressions", "Digital Analysis X", "Direct Access XML"], correctAnswer: 1 },
    { id: "pb4", text: "Which is a Power BI component?", options: ["Power Query", "Power Point", "Power Shell", "Power Grid"], correctAnswer: 0 },
    { id: "pb5", text: "Can you publish reports to the web from Power BI?", options: ["Yes", "No"], correctAnswer: 0 },
];

const dataEngineeringQuestions: Question[] = [
    { id: "de1", text: "What is a Data Pipeline?", options: ["A physical pipe", "Automated flow of data from source to destination", "A line of code", "A network cable"], correctAnswer: 1 },
    { id: "de2", text: "Which is a Big Data technology?", options: ["Hadoop", "Notepad", "Calculator", "Paint"], correctAnswer: 0 },
    { id: "de3", text: "What is Apache Spark?", options: ["An electrical spark", "A unified analytics engine for big data", "A database", "A browser"], correctAnswer: 1 },
    { id: "de4", text: "Difference between SQL and NoSQL?", options: ["Structured vs Unstructured/Semi-structured", "New vs Old", "Paid vs Free", "Blue vs Red"], correctAnswer: 0 },
    { id: "de5", text: "What is a Data Lake?", options: ["A pool of water", "A repository for raw/unstructured data", "A clean database", "A small file"], correctAnswer: 1 },
];

const aiQuestions: Question[] = [
    { id: "ai1", text: "Who is known as the father of AI?", options: ["Alan Turing", "Charles Babbage", "John McCarthy", "Elon Musk"], correctAnswer: 2 },
    { id: "ai2", text: "What is a Neural Network?", options: ["A computer cable", "A biological brain", "A computing system inspired by biological brains", "A wifi network"], correctAnswer: 2 },
    { id: "ai3", text: "Which is a type of AI?", options: ["Reactive Machines", "HTML", "CSS", "SQL"], correctAnswer: 0 },
    { id: "ai4", text: "What is Deep Learning?", options: ["Learning in depth", "A subset of ML based on neural networks", "A philosophy", "Advanced reading"], correctAnswer: 1 },
    { id: "ai5", text: "What is the Turing Test used for?", options: ["To test internet speed", "To determine if a machine can exhibit intelligent behavior", "To test hard drives", "To clean viruses"], correctAnswer: 1 },
];

const promptEngineeringQuestions: Question[] = [
    { id: "pe1", text: "What is 'Few-Shot' prompting?", options: ["Giving no examples", "Giving a few examples in the prompt", "Asking a few questions", "Prompting quickly"], correctAnswer: 1 },
    { id: "pe2", text: "What is 'Chain of Thought' prompting?", options: ["Asking the AI to explain its reasoning step-by-step", "A chain of emails", "Thinking hard", "Continuous talking"], correctAnswer: 0 },
    { id: "pe3", text: "Hallucination in AI means?", options: ["AI generates false/incorrect information confidently", "AI seeing ghosts", "AI crashing", "AI slowing down"], correctAnswer: 0 },
    { id: "pe4", text: "Which role focuses on optimizing AI inputs?", options: ["Prompt Engineer", "Hardware Engineer", "Accountant", "HR"], correctAnswer: 0 },
    { id: "pe5", text: "Does prompt phrasing affect output?", options: ["Yes, significantly", "No, AI knows everything", "Only in images", "Never"], correctAnswer: 0 },
];

const digitalMarketingQuestions: Question[] = [
    { id: "dm1", text: "What is SEO?", options: ["Search Engine Optimization", "Social Engine Operation", "Structured Engine Output", "Site External Order"], correctAnswer: 0 },
    { id: "dm2", text: "Which is a social media platform?", options: ["Google Drive", "LinkedIn", "Excel", "Notepad"], correctAnswer: 1 },
    { id: "dm3", text: "What is PPC?", options: ["Pay Per Click", "Pay Per Call", "Post Per Click", "Public Post Center"], correctAnswer: 0 },
    { id: "dm4", text: "Content Marketing focuses on?", options: ["Creating valuable content", "Cold calling", "Direct mail", "TV ads"], correctAnswer: 0 },
    { id: "dm5", text: "What is CTR?", options: ["Click Through Rate", "Call To React", "Customer Total Return", "Content Test Ratio"], correctAnswer: 0 },
];

const aiMarketingQuestions: Question[] = [
    { id: "aim1", text: "How can AI help in Digital Marketing?", options: ["Personalizing content", "Replacing all humans", "Fixing computers", "Manufacturing products"], correctAnswer: 0 },
    { id: "aim2", text: "What is a Chatbot?", options: ["AI software simulating conversion", "A robot cat", "A chat room", "A keyboard"], correctAnswer: 0 },
    { id: "aim3", text: "Which tool helps write marketing copy?", options: ["ChatGPT/Jasper", "Calculator", "Paint", "Excel"], correctAnswer: 0 },
    { id: "aim4", text: "Predictive Analytics is used for?", options: ["Forecasting future trends", "History lessons", "Predicting weather only", "Nothing"], correctAnswer: 0 },
    { id: "aim5", text: "Can AI optimize ad spend?", options: ["Yes", "No"], correctAnswer: 0 },
];

export const mockCategories: MockCategory[] = [
    {
        id: "software-testing-courses",
        name: "Software Testing Courses",
        courses: [
            { id: "manual-testing", slug: "manual-testing-course", name: "Manual Software Testing", description: "Learn to facilitate Scrum teams and drive Agile projects effectively.", categoryId: "software-testing-courses", questions: manualTestingQuestions },
            { id: "api-testing", slug: "api-testing", name: "API Testing using POSTMAN and RestAPIs", description: "Master product backlog management and stakeholder collaboration.", categoryId: "software-testing-courses", questions: apiTestingQuestions },
            { id: "dbms-course", slug: "dbms-course", name: "Database Management System using MySQL", description: "Gain advanced Scrum knowledge to lead high-performing teams.", categoryId: "software-testing-courses", questions: dbmsQuestions },
            { id: "etl-testing", slug: "etl-testing", name: "ETL Testing Course", description: "Learn to lead Agile transformations using the SAFe framework.", categoryId: "software-testing-courses", questions: etlQuestions },
            { id: "advance-software-testing", slug: "advance-software-testing", name: "Advanced Software Testing", description: "Facilitate SAFe practices for scaled Agile environments.", categoryId: "software-testing-courses", questions: manualTestingQuestions },
            { id: "automation-testing-course", slug: "automation-testing-course", name: "Advanced Automation Testing", description: "Drive product vision and delivery in SAFe settings.", categoryId: "software-testing-courses", questions: automationQuestions },
            { id: "advance-manual-automation-testing", slug: "advance-manual-automation-testing", name: "Advanced Manual and Automation Testing - Master Program", description: "Blend Agile principles with PMI project management standards.", categoryId: "software-testing-courses", questions: automationQuestions },
            { id: "python-course-st", slug: "python-course", name: "Python Programming", description: "Master containerization and orchestration technologies.", categoryId: "software-testing-courses", questions: pythonQuestions },
            { id: "java-course", slug: "java-course", name: "Java Programming", description: "Automate CI/CD pipelines with Jenkins.", categoryId: "software-testing-courses", questions: javaQuestions },
        ],
    },
    {
        id: "data-science",
        name: "Data Science",
        courses: [
            { id: "machine-learning-course", slug: "machine-learning-course", name: "Machine Learning and Data Science with Python - Hero Program", description: "Build strategies to ace behavioral and technical interviews.", categoryId: "data-science", questions: mlQuestions },
            { id: "generative-ai-course", slug: "generative-ai-course", name: "Deep Learning, NLP and GenerativeAI", description: "Practice real-world interview scenarios with feedback.", categoryId: "data-science", questions: genAiQuestions },
            { id: "data-science-course", slug: "data-science-course", name: "Advanced Data Science and Machine Learning Masterclass", description: "Master coding challenges and technical questions.", categoryId: "data-science", questions: dataScienceQuestions },
            { id: "ai-course", slug: "ai-course", name: "Comprehensive Data Science and AI - Master Program", description: "Master coding challenges and technical questions.", categoryId: "data-science", questions: aiQuestions },
            { id: "python-course-ds", slug: "python-course", name: "Python Programming", description: "Master containerization and orchestration technologies.", categoryId: "data-science", questions: pythonQuestions },
            { id: "machine-learning-using-python", slug: "machine-learning-using-python", name: "Machine Learning Algorithms using python Programming", description: "Master containerization and orchestration technologies.", categoryId: "data-science", questions: mlQuestions },
            { id: "data-visualization-in-r-programming", slug: "data-visualization-in-r-programming", name: "Machine Learning and Data Visualization using R Programming", description: "Master containerization and orchestration technologies.", categoryId: "data-science", questions: rQuestions },
        ],
    },
    {
        id: "business-intelligence",
        name: "Business Intelligence (BI)",
        courses: [
            { id: "data-analytics", slug: "data-analytics", name: "Advanced Data Analytics - Hero Program", description: "Craft a standout resume to impress recruiters.", categoryId: "business-intelligence", questions: biQuestions },
            { id: "data-analytics-python", slug: "data-analytics-python", name: "Advanced Data Analytics with Python Libraries", description: "Craft a standout resume to impress recruiters.", categoryId: "business-intelligence", questions: pythonQuestions },
            { id: "data-analytics-and-visualization", slug: "data-analytics-and-visualization", name: "Excel for Data Analytics & Visualization", description: "Craft a standout resume to impress recruiters.", categoryId: "business-intelligence", questions: biQuestions },
            { id: "data-analytics-with-tableau", slug: "data-analytics-with-tableau", name: "Data Analytics & Visualization with Tableau", description: "Craft a standout resume to impress recruiters.", categoryId: "business-intelligence", questions: tableauQuestions },
            { id: "power-bi-course", slug: "power-bi-course", name: "Data Analytics & Visualization with Power BI", description: "Craft a standout resume to impress recruiters.", categoryId: "business-intelligence", questions: powerBiQuestions },
            { id: "masters-in-data-engineering", slug: "masters-in-data-engineering", name: "Data Analytics With BI And Big Data Engineering Master Program", description: "Craft a standout resume to impress recruiters.", categoryId: "business-intelligence", questions: dataEngineeringQuestions },
        ],
    },
    {
        id: "artificial-intelligence",
        name: "Artificial Intelligence (AI)",
        courses: [
            { id: "prompt-engineering-course", slug: "prompt-engineering-course", name: "Prompt Engineering with Generative AI", description: "Master coding challenges and technical questions.", categoryId: "artificial-intelligence", questions: promptEngineeringQuestions },
        ],
    },
    {
        id: "digital-marketing",
        name: "Digital Marketing",
        courses: [
            { id: "digital-marketing-course", slug: "digital-marketing-course", name: "AI-Driven Digital Marketing & Analytics", description: "Earn the globally recognized PMP certification.", categoryId: "digital-marketing", questions: digitalMarketingQuestions },
            { id: "ai-in-digital-marketing", slug: "ai-in-digital-marketing", name: "Digital Marketing and AI (For Business Owners)", description: "Earn the globally recognized PMP certification.", categoryId: "digital-marketing", questions: aiMarketingQuestions },
            { id: "ai-bootcamp", slug: "ai-bootcamp", name: "Digital Marketing With AI Bootcamp", description: "Earn the globally recognized PMP certification.", categoryId: "digital-marketing", questions: aiMarketingQuestions },
        ],
    },
    {
        id: "aaa-accredited",
        name: "AAA Accredited Courses",
        courses: [
            { id: "aaa-advance-software-testing", slug: "advance-software-testing", name: "Advanced Software Testing", description: "Analyze data to drive business decisions.", categoryId: "aaa-accredited", questions: manualTestingQuestions },
            { id: "aaa-automation-testing-course", slug: "automation-testing-course", name: "Advanced Automation Testing", description: "Build predictive models with machine learning techniques.", categoryId: "aaa-accredited", questions: automationQuestions },
            { id: "aaa-data-science-course", slug: "data-science-course", name: "Advanced Data Science and Machine Learning - Masterclass", description: "Use Python for data analysis and visualization.", categoryId: "aaa-accredited", questions: dataScienceQuestions },
            { id: "aaa-masters-in-data-engineering", slug: "masters-in-data-engineering", name: "Data Analysis with BI & Big Data Engineering - Master Program", description: "Create interactive data visualizations with Power BI.", categoryId: "aaa-accredited", questions: dataEngineeringQuestions },
        ],
    },
];
