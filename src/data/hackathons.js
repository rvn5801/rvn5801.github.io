export const hackathons = [
  {
    id: 1,
    date: "2026",
    name: "RareMatch",
    organizer: "Harvard Rare Disease Hackathon",
    project: "AI-powered rare disease drug repurposing, built in 48 hours",
    description: "Takes a disease name, queries live PubMed abstracts, extracts the broken biological pathway via Gemini 2.0, and returns ranked FDA-approved drug candidates with OpenFDA safety classifications. Matched against 47 FDA-approved drugs across 13 biological pathways covering 10 rare diseases, with 91% top confidence on its strongest case.",
    tags: ["Python", "FastAPI", "Streamlit", "Gemini 2.0", "PubMed API", "OpenFDA API", "Pydantic V2", "ReportLab"],
    link: "https://github.com/rvn5801/RareMatch"
  },
  {
    id: 2,
    date: "2026",
    name: "Ghost Part Hunter",
    organizer: "Gemini 3 Hackathon",
    project: "Multimodal AI for industrial MRO teams",
    description: "Upload a photo or 3D STL file of an unknown \"ghost part\" and the system identifies it against a vector database of CAD models using CLIP + PointNet, verifies functionality via a Gemini 2.0 AI reasoner, and generates procurement steps in under 5 seconds. Deployed serverless on Cloud Run with scale-to-zero and a 100% uptime demo-mode fallback.",
    tags: ["Python", "FastAPI", "Streamlit", "CLIP ViT-Large", "PointNet", "Gemini 2.0", "Pinecone", "PyTorch", "OpenCV", "Docker", "GCP Cloud Run"],
    link: "https://github.com/rvn5801/ghost-part-hunter"
  }
];

export const hackathonPlaceholder = false;
