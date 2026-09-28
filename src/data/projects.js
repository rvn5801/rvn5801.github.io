export const projects = [
  {
    id: 1,
    title: "DS-AttentionUNet: Skin Lesion Segmentation",
    description: "Designed a novel DS-AttentionUNet architecture with Attention Gates and Deep Supervision for high-recall medical image segmentation. Achieved 92.16% recall using a composite loss function and mixed-precision training, with a modular CLI for streamlined deployment.",
    tags: ["PyTorch", "Deep Learning", "Computer Vision", "Medical Imaging", "MONAI"],
    github: "https://github.com/rvn5801/Skin-Lesion-Segmentation-with-Deep-Supervision-and-Attention-Mechanisms",
    demo: "https://rvn5801-ds-attentionunet.hf.space/docs",
    stats: "92.16% Recall"
  },
  {
    id: 2,
    title: "amfAR HIV/AIDS Policy Intelligence Dashboard",
    description: "Built a full-stack epidemiological analytics platform turning 10 years (2014–2023) of CDC HIV surveillance data into policy insights: 25 REST endpoints with ML-powered 2030 forecasting, an interactive US choropleth with state-level equity scoring, racial disparity analysis, and a natural-language-to-SQL chat interface powered by GPT-4o-mini.",
    tags: ["Python", "Flask", "MySQL", "SciPy", "Chart.js", "D3.js", "GPT-4o-mini"],
    github: "https://github.com/rvn5801/amfAR",
    demo: "https://drive.google.com/file/d/1Jur5C8S-indemANC4La0IVgvg8Ql9bEE/view?usp=sharing",
    stats: "25 API Endpoints"
  },
  {
    id: 3,
    title: "Generative AI Document Classification Pipeline",
    description: "Designed a large-scale document processing pipeline handling 100K+ documents at 73% accuracy using a custom LLM-based hierarchical taxonomy. Reduced retrieval latency by 40% with OpenSearch vector indexing and cut report generation time by 98% (4 hrs → 5 min) via a Django dashboard.",
    tags: ["LLMs", "NLP", "OpenSearch", "Django", "Python", "Vector Indexing"],
    github: "https://github.com/rvn5801/Document_classification",
    demo: null,
    stats: "100K+ Docs"
  },
  {
    id: 4,
    title: "Custom R Statistical & Algorithmic Library",
    description: "Implemented core statistical models (Linear Regression, Logistic Regression, SVM) from scratch in R, alongside feature selection algorithms that cut processing time by 40% on datasets exceeding 10,000 variables. Comprehensive R Markdown documentation reduced the learning curve by 60%.",
    tags: ["R", "Statistics", "Optimization", "Package Development", "Feature Selection"],
    github: "https://github.com/rvn5801/Custom-R-Statistical-Package",
    demo: null,
    stats: "40% Faster"
  },
  {
    id: 5,
    title: "MuonAgent: LLM Agent for Single-Cell Multi-Omics",
    description: "An LLM-powered autonomous agent that runs single-cell multi-omic analysis (RNA-seq + ATAC-seq) from natural language instead of manual scripting. A planner-executor-evaluator loop decomposes prompts into tasks, invokes 40+ scanpy/muon tools inside an isolated Docker sandbox, and self-corrects failures, recovering from ~85% of errors within 2-3 retries, with dual-layer memory for reproducible, resumable sessions.",
    tags: ["GPT-4o", "LLM Agents", "Streamlit", "Docker", "scanpy", "muon", "AnnData", "Python"],
    github: "https://github.com/rvn5801/AI-Systems-for-SC-analysis",
    demo: null,
    stats: "40+ Bio Tools"
  }
];
