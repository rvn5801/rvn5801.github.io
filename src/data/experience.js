export const experiences = [
  {
    id: 2,
    role: "AI Engineer · Volunteer",
    company: "MatchMyCancer.ai",
    companyLink: "https://match-my-cancer.vercel.app/",
    location: "Remote · ChiEAC (Chicago Advocacy Education Corporation)",
    date: "Apr 2026 – Present",
    demo: "assets/matchmycancer_demo.mp4",
    tags: ["FastAPI", "Next.js", "TypeScript", "LangChain", "OpenAI", "Tesseract OCR", "Azure Container Apps", "Vercel", "Redis", "ChromaDB", "Docker"],
    highlights: [
      "Built and deployed a **full-stack AI platform** that parses oncology pathology reports, extracts **biomarkers**, and matches patients to relevant **FDA therapies** and live **ClinicalTrials.gov** trials with plain-language eligibility assessments",
      "Engineered a **FastAPI backend** with an **LLM pipeline** (LangChain + OpenAI) for biomarker extraction, trial-eligibility summarization, and reasoning traces, plus **Tesseract OCR** for scanned-document ingestion",
      "Developed a **Next.js** (App Router, TypeScript) frontend with real-time **Server-Sent Events streaming** to surface analysis results progressively as the pipeline runs",
      "Containerized the backend with a multi-stage **Docker build** and deployed to **Azure Container Apps** (scale-to-zero) via Azure Container Registry, shipping the frontend on **Vercel** with **CI/CD** auto-deploys managing cross-provider secrets, CORS, and custom-domain DNS",
      "Integrated **Redis** (Upstash, TLS) for spend tracking and **ChromaDB** for vector-based trial retrieval, and hardened the LLM integration with markdown-fenced JSON parsing, spend ceilings, source-verification guardrails, and confidence scoring for a trustworthy medical use case"
    ]
  },
  {
    id: 1,
    role: "Research Support Specialist",
    company: "Stony Brook Cancer Center",
    location: "Stony Brook, NY",
    date: "Jun 2026 – Aug 2026",
    tags: ["Python", "AlphaGenome", "SciPy", "Monte Carlo", "Pandas", "Parquet", "Pipeline Dev"],
    highlights: [
      "Built an **end-to-end data pipeline** integrating a large mutation dataset with **DeepMind's AlphaGenome** model, statistically testing whether specific mutations changed regulatory behavior more than chance would predict, across multiple chromosomes",
      "Engineered a **large-scale simulation framework** with 80M synthetic sequences across 174 binding-site patterns and 47 mutation signatures, building a full **scoring pipeline** to quantify mutation impact on binding affinity",
      "Ran **statistical analysis at scale** (40K+ comparisons) using hypothesis testing and **FDR correction**, uncovering a significant relationship between sequence composition and mutation impact",
      "**Refactored research code** from exploratory notebooks into reusable, checkpointed **Python pipelines** with resumable execution, cutting multi-day analyses down to reliable, repeatable runs",
      "Built a **data validation framework** with automated checks and reporting to catch data-quality issues before they reached downstream analysis"
    ]
  },
  {
    id: 3,
    role: "Graduate Research Assistant",
    company: "Stony Brook Cancer Center",
    location: "Stony Brook, NY",
    date: "Jan 2025 – Dec 2025",
    tags: ["Python", "HPC / SLURM", "Scanpy", "AnnData", "Muon", "SnapATAC2", "scRNA-seq", "ATAC-seq", "WGS", "FastAPI", "Git", "Linux"],
    highlights: [
      "Designed and maintained reproducible **Python-based computational pipelines** on **HPC systems**, achieving **99% data reproducibility** and a validated **2× runtime speedup** over legacy workflows",
      "Analyzed high-dimensional **WGS** and **single-cell multiome** (scRNA-seq + ATAC-seq) datasets end-to-end, performing QC, expression quantification, HVG selection, and downstream statistical analyses using **Scanpy**, **Muon**, and **AnnData**",
      "Standardized 3+ legacy **NGS workflows** into reproducible Python pipelines with consistent QC protocols, automated error handling, and data integrity checks across the lab",
      "Owned **post-deployment monitoring**, implementing structured error logging and automated recovery to maintain data integrity across complex multi-stage genomic workloads",
      "Refined **agent-based computational models** to simulate complex acidosis conditions across 3+ experimental scenarios, interpreting findings in biological context and recommending follow-up analytical approaches",
      "Partnered with 5+ bench scientists and Ph.D. investigators to translate raw **multi-omics data** into actionable biological insights, producing figures and reports for manuscript and grant deliverables"
    ]
  }
];
