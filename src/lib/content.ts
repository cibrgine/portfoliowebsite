import awbsLogo from "@/assets/logo.png";
import alBaridLogo from "@/assets/GBAM_LOGO_(1).png";

export const PROFILE = {
  email: "cibrgine@gmail.com",
  github: "https://github.com/cibrgine",
  linkedin: "https://www.linkedin.com/in/amine-lassri-38359b273",
  phone: "+212 682 868 954",
  universityUrl: "https://www.uir.ac.ma/fr/pole/ecole-superieure-dinformatique-et-du-numerique",
};

export const SKILLS = [
  "Python", "PyTorch", "Pandas", "Scikit-learn", "SQL", "Docker",
  "Apache Airflow", "Apache Kafka", "NumPy", "OpenCV", "MongoDB", "PostgreSQL", "MySQL", "Data Engineering", "Machine Learning", "Computer Vision", "NLP", "MLOps", "ETL", "Data Pipelines", "Feature Engineering"
];

export type DocEntry = {
  id: string;
  title: string;
  tag: string;
  dates?: string;
  logo?: string;
  summary: string;
  stack: string[];
  contributions: string[];
  architecture: string;
  github?: string;
  demo?: string;
};

export const EXPERIENCES: DocEntry[] = [
  {
    id: "internship-1",
    title: "AWBS",
    tag: "AI Engineering & Consulting Intern",
    dates: "June 2026 – August 2026",
    logo: awbsLogo,
    summary: "Assessed enterprise workflows to identify high-ROI AI integration opportunities, authored strategic technical roadmaps, and architected automated data ingestion and validation pipelines for heterogeneous formats.",
    stack: ["Python", "Data Ingestion", "Schema Validation", "Enterprise AI", "Technical Roadmapping"],
    contributions: [
      "Assessed enterprise workflows to identify high-ROI AI integration opportunities and authored strategic technical roadmaps.",
      "Architected and implemented automated data ingestion and schema validation pipelines for heterogeneous formats (large-scale CSV files, complex document specifications).",
      "Communicated complex AI concepts, architectural trade-offs, and technical solutions to cross-functional stakeholders and executive leadership.",
    ],
    architecture: "Heterogeneous Sources (CSV, Docs) → Ingestion & Validation Pipelines → Enterprise AI Workflows & Strategic Roadmaps",
  },
  {
    id: "internship-2",
    title: "Al Barid",
    tag: "Web Development Intern",
    dates: "June 2025 – July 2025",
    logo: alBaridLogo,
    summary: "Engineered a full-stack parcel and courier delivery management web application featuring role-based access control and high-performance relational database schemas.",
    stack: ["PHP", "JavaScript", "MySQL", "HTML5/CSS3", "RBAC", "Database Indexing"],
    contributions: [
      "Engineered a full-stack parcel and courier delivery management web application using PHP, JavaScript, HTML5/CSS3, and MySQL.",
      "Designed and deployed secure, role-based access control (RBAC) dashboards tailored for clients, couriers, and system administrators.",
      "Optimized relational database queries, schemas, and indexing strategies to enable sub-second, real-time shipment tracking.",
    ],
    architecture: "Client / Courier UI → RBAC Dashboards → PHP Application Backend → Indexed MySQL Database (Sub-second Tracking)",
  },
];

export const PROJECTS: DocEntry[] = [
  {
    id: "project-1",
    title: "Real-time Fraud Detection",
    tag: "MLOps",
    summary: "Streaming pipeline scoring transactions in real time with an XGBoost model, with automated retraining and drift monitoring.",
    stack: ["Kafka", "XGBoost", "Airflow", "Docker"],
    contributions: ["Feature engineering on streams", "Model serving", "Drift alerts"],
    architecture: "Kafka → feature service → XGBoost scorer → alerts & dashboard.",
    github: "https://github.com/cibrgine",
  },
  {
    id: "project-2",
    title: "Vision Quality Inspection",
    tag: "Computer Vision",
    summary: "Defect detection system for manufacturing lines using a fine-tuned CNN, running at the edge with sub-50ms latency.",
    stack: ["PyTorch", "OpenCV", "Docker"],
    contributions: ["Dataset labeling pipeline", "Model fine-tuning", "Edge deployment"],
    architecture: "Camera feed → OpenCV preprocessing → PyTorch model → PLC signal.",
    github: "https://github.com/cibrgine",
  },
  {
    id: "project-3",
    title: "Scalable Data Lakehouse",
    tag: "Data Architecture",
    summary: "End-to-end lakehouse with orchestrated ingestion, transformation layers and SQL analytics for business teams.",
    stack: ["SQL", "PostgreSQL", "Airflow", "Pandas"],
    contributions: ["Medallion layer design", "Incremental loads", "BI-ready models"],
    architecture: "Sources → bronze/silver/gold layers → SQL warehouse → BI.",
    github: "https://github.com/cibrgine",
  },
];
