export const projects = [
  {
    id: 1,
    title: "DS-AttentionUNet: Skin Lesion Segmentation",
    description: "Designed a novel DS-AttentionUNet architecture with Attention Gates and Deep Supervision for high-recall medical image segmentation. Achieved 92.16% recall using a composite loss function and mixed-precision training, with a modular CLI for streamlined deployment.",
    tags: ["PyTorch", "Deep Learning", "Computer Vision", "Medical Imaging", "MONAI"],
    github: "https://github.com/rvn5801/Skin-Lesion-Segmentation-with-Deep-Supervision-and-Attention-Mechanisms",
    demo: "https://rvn5801-ds-attentionunet.hf.space/docs",
    stats: "92.16% Recall",
    caseStudy: {
      problem: "Skin lesion segmentation is a recall problem: a missed lesion region is worse than an over-drawn boundary, and standard U-Nets under-segment faint, low-contrast lesions in dermoscopic images like those in ISIC 2018.",
      approach: "Designed DS-AttentionUNet: attention gates that focus the decoder on lesion regions, deep supervision to train intermediate outputs, a composite loss tuned for recall, mixed-precision (FP16) training, and a modular CLI so every experiment is reproducible from one command.",
      validation: "Built a label-integrity check into the pipeline: roughly 2% of the training masks turned out to be inverted, and the pipeline detects and quarantines them instead of training on corrupted labels. Final evaluation ran on the held-out ISIC 2018 test set with Dice as the headline metric.",
      outcome: "Dice 0.84 on ISIC 2018 with 92.16% recall, ~200 ms per image on a T4 GPU, and FP16 inference doubling throughput, packaged behind a documented CLI with a live demo."
    }
  },
  {
    id: 2,
    title: "amfAR HIV/AIDS Policy Intelligence Dashboard",
    description: "Built a full-stack epidemiological analytics platform turning 10 years (2014–2023) of CDC HIV surveillance data into policy insights: 25 REST endpoints with ML-powered 2030 forecasting, an interactive US choropleth with state-level equity scoring, racial disparity analysis, and a natural-language-to-SQL chat interface powered by GPT-4o-mini.",
    tags: ["Python", "Flask", "MySQL", "SciPy", "Chart.js", "D3.js", "GPT-4o-mini"],
    github: "https://github.com/rvn5801/amfAR",
    demo: "https://drive.google.com/file/d/1Jur5C8S-indemANC4La0IVgvg8Ql9bEE/view?usp=sharing",
    stats: "25 API Endpoints",
    caseStudy: {
      problem: "US HIV surveillance data sits in CDC tables that policy analysts cannot easily explore: ten years of data across 50 states, and no way to ask where the epidemic is heading, or where the disparities are, without writing SQL.",
      approach: "Built a full-stack platform: a Flask API of 25 endpoints over the CDC dataset, an interactive US choropleth with state-level equity scoring and racial disparity analysis, and a natural-language-to-SQL chat interface (GPT-4o-mini) so non-technical users can query the data directly.",
      validation: "Loaded and validated the full dataset (10 years, 2014–2023, 50 states, 1,560 rows) with completeness checks before any analysis ran on top of it. Forecasts are reported with 80% prediction intervals, so the uncertainty is visible rather than hidden behind a single line.",
      outcome: "A working policy-intelligence dashboard with ML forecasts to 2030, equity and disparity views, and 25 documented API endpoints, built for amfAR-style HIV policy analysis."
    }
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
    description: "An LLM-powered autonomous agent that runs single-cell multi-omic analysis (RNA-seq + ATAC-seq) from natural language instead of manual scripting. A planner-executor-evaluator loop decomposes prompts into tasks and invokes 40+ scanpy/muon tools inside an isolated Docker sandbox, with dual-layer memory for reproducible, resumable sessions, and a 20-run benchmark that scores whether the agent actually follows the required analysis steps.",
    tags: ["GPT-4o", "LLM Agents", "Streamlit", "Docker", "scanpy", "muon", "AnnData", "Python"],
    github: "https://github.com/rvn5801/AI-Systems-for-SC-analysis",
    demo: null,
    stats: "40+ Bio Tools",
    caseStudy: {
      problem: "Single-cell multi-omics analysis (Scanpy/Muon) takes hours of expert scripting per dataset. The real question was whether an LLM agent could run the standard pipeline from a natural-language request without silently producing wrong biology.",
      approach: "Built a planner-executor-evaluator agent on GPT-4o with 40+ Scanpy/Muon tools, an isolated Docker sandbox for code execution, and dual-layer memory so sessions are reproducible and resumable across datasets of 10K–100K cells.",
      validation: "Benchmarked it properly instead of demoing it once: 20 runs scored against reference outputs, checking whether the required steps ran, in the right order, with the right parameters.",
      outcome: "The honest verdict from the benchmark: the agent skipped required steps too often to be trusted unsupervised, and the project ships with that finding documented. An agent you can evaluate is worth more than an agent you can only demo."
    }
  }
];
