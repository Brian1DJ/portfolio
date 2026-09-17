/**
 * SITE CONFIG
 * -----------
 * Every external link and swappable piece of personal info lives here.
 * Replace the placeholder values below — nothing else in the codebase
 * needs to change when you do.
 */

export const site = {
  name: "Brian Mathew De Jesus",
  headline: "Computer Science Graduate | Data Analytics & Software Development",
  location: "Calamba City, Laguna, Philippines",

  intro:
    "I'm Brian Mathew De Jesus, a Computer Science graduate with internship experience in software development and computer vision. I build data-driven projects using SQL, Python, Pandas, and Tableau, while continuing to develop my skills in software engineering and analytics.",

  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "National University – Laguna",
    year: "2026",
  },

  role: {
    title: "Software Development Intern",
    organization: "City Government of Calamba, ICT Division",
  },

  links: {
    email: "brianmathewdejesus@gmail.com",
    linkedin: "https://www.linkedin.com/in/brianmathewdejesus",
    // TODO: replace with your actual GitHub profile URL
    github: "https://github.com/Brian1DJ",
    // TODO: replace with your actual Tableau Public profile URL
    tableau: "https://public.tableau.com/app/profile/brian.mathew.de.jesus",
    // TODO: replace with a hosted resume PDF (e.g. /resume/Brian-De-Jesus-Resume.pdf after
    // dropping the file into /public/resume/, or a Google Drive / hosted link)
    resume: "#REPLACE_WITH_RESUME_LINK",
    academia: "https://www.academia.edu/173618421/Translating_Taglish_to_English_A_Hybrid_Approach_Using_Naive_Bayes_Stemming_and_Deep_Learning?source=swp_share",
  },

  // Set to false to hide the "download resume" CTA until a real link exists
  resumeReady: false,
  graduationPhoto: "public/images/graduation.jpg",
} as const;

export type ProjectStatus = "completed" | "in-progress";

export type ProjectLinks = {
  github?: string;
  tableau?: string;
  demo?: string;
  academia?: string;
};

export type Kpi = {
  label: string;
  value?: string;
  definition: string;
};

export type CaseStudy = {
  overview: string;
  objective: string;
  dataset: string;
  dataPreparation: string[];
  kpis?: Kpi[];
  findings?: string[];
  /** Shown instead of findings while a project is still in progress. */
  statusNote?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  tools: string[];
  summary: string;
  featured: boolean;
  links: ProjectLinks;
  // Path under /src/assets/dashboards or /public — left as placeholder
  // until real screenshots are provided.
  previewImage?: string;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "telco-customer-churn-analysis",
    title: "Telco Customer Churn Analysis",
    category: "Data Analytics",
    status: "completed",
    tools: ["SQL", "MySQL", "Python", "Pandas", "Jupyter Notebook", "Tableau"],
    summary:
      "Cleaned and analyzed 7,032 customer records to identify churn drivers across contract type, tenure, and service usage, then built an interactive Tableau dashboard.",
    featured: true,
    links: {
      github: "https://github.com/REPLACE_ME/telco-customer-churn",
      tableau: "https://public.tableau.com/app/profile/brian.mathew.de.jesus/viz/TELCOCUSTOMERCHURNANALYSIS/Dashboard1",
    },
    previewImage: "src/assets/dashboards/TelcoChurnDashboard.png",
    caseStudy: {
      overview:
        "A telecom provider wanted to understand why customers were leaving and which segments carried the highest churn risk. I cleaned, validated, and analyzed roughly 7,032 customer records, then built an interactive Tableau dashboard so the patterns are explorable rather than buried in a spreadsheet.",
      objective:
        "Which customer segments churn the most, and which contract, service, or payment attributes are the strongest predictors of churn?",
      dataset:
        "7,032 telecom customer records, including contract type, tenure, internet service type, payment method, and service usage details.",
      dataPreparation: [
        "Queried and validated the raw records in SQL, checking for nulls, duplicates, and inconsistent categorical values",
        "Standardized categorical fields (contract type, internet service, payment method) to consistent labels",
        "Used Python and Pandas to reshape the data for cohort-style analysis by tenure and contract length",
        "Cross-checked churn calculations in SQL and Pandas to confirm consistent results before building the dashboard",
      ],
      kpis: [
        {
          label: "Overall churn rate",
          value: "26.58%",
          definition: "The share of the full customer base that churned during the period analyzed.",
        },
        {
          label: "Month-to-month churn",
          value: "42.71%",
          definition: "Churn rate among customers on flexible, month-to-month contracts.",
        },
        {
          label: "Two-year contract churn",
          value: "2.85%",
          definition: "Churn rate among customers locked into two-year contracts.",
        },
        {
          label: "Fiber optic churn",
          value: "41.89%",
          definition: "Churn rate among customers subscribed to fiber optic internet service.",
        },
        {
          label: "Electronic check churn",
          value: "45.29%",
          definition: "Churn rate among customers paying by electronic check, the highest of any payment method.",
        },
        {
          label: "High-risk profile churn",
          value: "60.37%",
          definition:
            "Churn rate for a defined high-risk segment combining the contract, service, and payment attributes most associated with leaving.",
        },
      ],
      findings: [
        "Contract length is the strongest retention lever: month-to-month customers churn at roughly 15x the rate of two-year contract customers.",
        "Fiber optic and electronic-check customers both churn well above the overall average, making them useful segments for targeted retention outreach.",
        "The combined high-risk profile churns at 60.37%, more than double the overall rate, and is a practical starting point for a retention campaign.",
      ],
    },
  },
  {
    slug: "superstore-sales-profitability",
    title: "Superstore Sales & Profitability Analysis",
    category: "Data Analytics",
    status: "in-progress",
    tools: ["SQL", "MySQL", "Excel", "Pandas", "Jupyter Notebook", "Tableau"],
    summary:
      "Analyzing sales trends, profitability, and regional performance across product categories, customer segments, and shipping methods.",
    featured: true,
    links: {
      tableau:
        "https://public.tableau.com/views/Super_Store_Sales_17871355224590/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      github: "https://github.com/Brian1DJ/superstore-sales-analytics",
    },
    previewImage: "src/assets/dashboards/SalesAndProfit.png",
    caseStudy: {
      overview:
        "A retail superstore dataset covering orders, customers, products, and shipping. The goal is to understand where the business makes money, where it doesn't, and why — across product categories, customer segments, regions, and shipping methods.",
      objective:
        "Which product categories, segments, and regions drive the most profit, and where do sales volume and profitability disagree?",
      dataset:
        "Superstore order-level data, including order date, sales, profit, discount, product category and sub-category, customer segment, region, and shipping method.",
      dataPreparation: [
        "Cleaning and validating order-level records in SQL before analysis",
        "Using excel and mysql to calculate profit margin and aggregate sales by category, segment, region, and ship mode",
        "Building the KPI set (total sales, total profit, order count, customer count, profit margin) that anchors the Tableau dashboard",
      ],
      kpis: [
        { label: "Total Sales", 
          value: "$2,326,534.35", 
          definition: "The total revenue generated across all orders in the dataset." 
        },
        { label: "Total Profit", 
          value: "$292,296.82", 
          definition: "The total profit generated after costs and discounts." 
        },
        { label: "Number of Orders", 
          value: "5,113", 
          definition: "The total count of individual orders placed." 
        },
        { label: "Number of Customers", 
          value: "806", 
          definition: "The count of distinct customers who placed an order." 
        },
        {
          label: "Profit Margin", 
          value: "12.56%",
          definition:
            "How much profit was generated from total sales. It helps evaluate whether strong revenue is also translating into profitability.",
        },
      ],
      statusNote:
        "This project is still in progress. Findings and the finished dashboard will be added here once the analysis is complete.",
    },
  },
  {
    slug: "taglish-english-translation",
    title: "Taglish-to-English Translation System",
    category: "NLP / Machine Learning · Undergraduate Thesis",
    status: "completed",
    tools: ["Python", "Naive Bayes", "Tagalog Stemming", "FastText", "OPUS-MT", "T5"],
    summary:
      "A hybrid Taglish-to-English translation pipeline trained on 16,145 Taglish sentences from Philippine Reddit, combining language identification, stemming, embeddings, and machine translation.",
    featured: true,
    links: {
      academia: "https://www.academia.edu/173618421/Translating_Taglish_to_English_A_Hybrid_Approach_Using_Naive_Bayes_Stemming_and_Deep_Learning?source=swp_share",
    },
    previewImage: "src/assets/dashboards/Research.png",
    caseStudy: {
      overview:
        "My undergraduate thesis project: a hybrid pipeline that translates Taglish (mixed Tagalog-English) text into English, built to handle the code-switching common in informal Philippine online writing.",
      objective:
        "Can a hybrid pipeline that combines classical NLP techniques with neural machine translation models produce accurate English translations of Taglish text?",
      dataset: "16,145 Taglish sentences collected from Philippine Reddit.",
      dataPreparation: [
        "Applied language identification to separate Tagalog and English segments within each sentence",
        "Used Tagalog stemming to normalize word forms before embedding",
        "Generated word embeddings with FastText to represent the mixed-language vocabulary",
        "Passed the processed text through OPUS-MT and T5 translation models within the hybrid pipeline",
      ],
      kpis: [
        {
          label: "BLEU",
          value: "46.08%",
          definition: "Measures how closely the machine-generated translations match human reference translations.",
        },
        {
          label: "chrF++",
          value: "77.93",
          definition:
            "A character-level metric that captures partial word matches, useful for languages with rich word forms like Tagalog.",
        },
        {
          label: "COMET",
          value: "86.15",
          definition: "A neural evaluation metric trained to predict human judgments of translation quality.",
        },
      ],
      findings: [
        "The hybrid pipeline reached a BLEU score of 46.08%, a chrF++ score of 77.93, and a COMET score of 86.15 on the evaluation set.",
        "The thesis was accepted and selected for presentation at the department's undergraduate colloquium.",
      ],
    },
  },
  {
    slug: "evaluation-management-system",
    title: "Evaluation Management System",
    category: "Software Development",
    status: "completed",
    tools: ["JavaScript", "PHP", "Laravel", "HTML", "CSS"],
    summary:
      "Front-end development, system testing, and quality assurance for an evaluation management platform, with a focus on validation and debugging.",
    featured: false,
    links: {
      academia: "https://www.academia.edu/173618421/Translating_Taglish_to_English_A_Hybrid_Approach_Using_Naive_Bayes_Stemming_and_Deep_Learning?source=swp_share",
    },
  },
  {
    slug: "wtg-event-finder",
    title: "WTG Event Finder",
    category: "Web Development",
    status: "completed",
    tools: ["JavaScript", "React", "HTML", "CSS", "Bootstrap"],
    summary: "A web application for discovering local events.",
    featured: false,
    links: {},
  },
  {
    slug: "ax-fitness-website",
    title: "AX Fitness Website",
    category: "Web Development",
    status: "completed",
    tools: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    summary: "A responsive marketing website for a fitness brand.",
    featured: false,
    links: {},
  },
];

export const currentlyLearning = [
  { name: "AWS", note: "Data and cloud fundamentals" },
  { name: "Microsoft Azure", note: "Data and cloud fundamentals" },
  { name: "Databricks", note: "Data engineering and analytics fundamentals" },
  { name: "R", note: "Data analysis and statistical programming" },
] as const;

export const skillCategories = [
  {
    name: "Data Analytics",
    skills: [
      "SQL",
      "MySQL",
      "Python",
      "Pandas",
      "Excel",
      "Tableau",
      "Jupyter Notebook",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Data Visualization",
    ],
  },
  {
    name: "Software Development",
    skills: ["PHP", "Laravel", "JavaScript", "React", "HTML", "CSS", "Bootstrap"],
  },
  {
    name: "Other",
    skills: [
      "Git",
      "GitHub",
      "OpenCV",
      "YOLOv8",
      "Software Testing",
      "Debugging",
      "Database Management",
    ],
  },
] as const;

export const analysisProcess = [
  "Understand the business problem",
  "Inspect and clean the data",
  "Use SQL for querying and validation",
  "Use Python and Pandas for analysis",
  "Create visualizations in Tableau",
  "Communicate insights and recommendations",
] as const;
