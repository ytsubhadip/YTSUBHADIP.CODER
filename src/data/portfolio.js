export const PORTRAIT_URL =
  "https://res.cloudinary.com/dbuaql8ux/image/upload/v1792772718/Gemini_Generated_Image_psva6cpsva6cpsva.png";

export const GITHUB = "https://github.com/ytsubhadip";
export const LINKEDIN = "https://www.linkedin.com/in/subhadip-bar/";
export const EMAIL = "ytsubhadip0099@gmail.com";

// Google Drive file ID of the resume PDF.
const RESUME_FILE_ID = "1woXIvYwuEugPZHrkI2OM2tCdSdFZAHNk";
export const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`;
export const projects = [
  {
    name: "Tube AI API",
    blurb: "An API that turns YouTube content into AI-usable intelligence. My most starred repo.",
    stack: ["Python", "FastAPI", "LLM"],
    stars: 10,
    href: "https://github.com/ytsubhadip/Tube-AI-API",
  },
  {
    name: "X-Compiler",
    blurb:
      "A SaaS platform that digitises college programming lab exams — secure, automated end-to-end workflow.",
    stack: ["JavaScript", "SaaS", "Node"],
    stars: 2,
    href: "https://github.com/ytsubhadip/X-Compiler",
    live: "https://ml-compiler-074b.onrender.com/",
  },
  {
    name: "YouTube RAG ChatBot",
    blurb: "Chat with any YouTube video using retrieval-augmented generation over transcripts.",
    stack: ["Python", "RAG", "Vector DB"],
    stars: 1,
    href: "https://github.com/ytsubhadip/YouTube_RAG_ChatBot",
  },
  {
    name: "RAG AI Teaching Assistant",
    blurb: "A study companion that answers course questions grounded in real lecture material.",
    stack: ["Python", "LangChain", "Embeddings"],
    stars: 1,
    href: "https://github.com/ytsubhadip/RAG-AI-Teaching-assistant",
  },
  {
    name: "SafeWalk",
    blurb: "Map app that predicts the safety condition of a destination before you travel.",
    stack: ["Python", "Maps", "ML"],
    stars: 1,
    href: "https://github.com/ytsubhadip/SafeWalk",
    live: "https://error-404-team-not-found.onrender.com/",
  },
  {
    name: "Insurance Buy AI Model API",
    blurb:
      "Deployed ML model predicting insurance purchase intent, served as an API + Streamlit app.",
    stack: ["Python", "scikit-learn", "Streamlit"],
    stars: 1,
    href: "https://github.com/ytsubhadip/Insurance-Buy-AI-Model-API",
    live: "https://insuranceml.streamlit.app/",
  },
  {
    name: "Aadhar Data Analysis",
    blurb: "UIDAI Hackathon submission — large-scale demographic data analysis and visualisation.",
    stack: ["Jupyter", "Pandas", "Analytics"],
    stars: 1,
    href: "https://github.com/ytsubhadip/Aadhar-Data-Analysis",
  },
  {
    name: "Early Stage Dementia Detection",
    blurb: "Screening model that flags early cognitive decline signals from clinical features.",
    stack: ["ML", "Healthcare", "Python"],
    stars: 1,
    href: "https://github.com/ytsubhadip/Early-Stage-Dementia-Detection",
  },
  {
    name: "Movie Recommendation System",
    blurb: "Production-ready recommender with pipelines, packaging and deployment structure.",
    stack: ["Python", "MLOps", "Pipelines"],
    stars: 0,
    href: "https://github.com/ytsubhadip/production-ready-movie-recommendation-system",
  },
];
export const techStack = [
  {
    group: "AI / ML",
    items: [
      { name: "PyTorch", slug: "pytorch" },
      { name: "scikit-learn", slug: "scikitlearn" },
      { name: "Hugging Face", slug: "huggingface" },
      { name: "LangChain", slug: "langchain" },
      { name: "TensorFlow", slug: "tensorflow" },
    ],
  },
  {
    group: "Databases & Vector",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      {
        name: "ChromaDB",
        iconUrl: "https://avatars.githubusercontent.com/u/102604246?s=64&v=4",
      },
      {
        name: "Pinecone",
        iconUrl: "https://avatars.githubusercontent.com/u/63333334?s=64&v=4",
      },
    ],
  },
  {
    group: "Data & Backend",
    items: [
      { name: "Python", slug: "python" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "Pandas", slug: "pandas" },
      { name: "NumPy", slug: "numpy" },
      { name: "Flask", slug: "flask" },
      { name: "Streamlit", slug: "streamlit" },
      { name: "Jupyter", slug: "jupyter" },
    ],
  },
  {
    group: "Web & Ops",
    items: [
      { name: "React", slug: "react" },
      { name: "JavaScript", slug: "javascript" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css" },
      { name: "Git", slug: "git" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Vercel", slug: "vercel" },
      { name: "Netlify", slug: "netlify" },
      { name: "Render", slug: "render" },
      { name: "Railway", slug: "railway" },
    ],
  },
];
