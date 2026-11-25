export const experiences = [
  {
    id: 2,
    role: "AI Engineer · Volunteer",
    company: "MatchMyCancer.ai",
    companyLink: "https://match-my-cancer.vercel.app/",
    location: "Remote · ChiEAC (Chicago Advocacy Education Corporation)",
    date: "Apr 2026 – Present",
    demo: "assets/matchmycancer_demo.mp4",
    poster: "assets/matchmycancer_poster.jpg",
    tags: ["FastAPI", "Next.js", "TypeScript", "LangChain", "OpenAI", "Tesseract OCR", "Azure Container Apps", "Vercel", "Redis", "ChromaDB", "Docker"],
    highlights: [
      "Designed and built **MatchMyCancer.ai end to end, working solo**: a full-stack AI platform that reads oncology pathology reports and matches patients to **FDA-approved therapies** and live **ClinicalTrials.gov** trials, with eligibility explained in plain language a patient can act on",
      "Built the document pipeline from scratch: **Tesseract OCR** for scanned reports, an **LLM extraction pipeline** (LangChain + OpenAI) that pulls biomarkers into **schema-validated structured data**, and a matching layer that reasons over trial eligibility criteria instead of keyword search",
      "Engineered the **FastAPI backend** for reliability in a medical context: **markdown-fenced JSON parsing**, **source-verification guardrails**, and **confidence scoring** on extracted values, so uncertain reads are flagged rather than presented as fact",
      "Developed a **Next.js (App Router, TypeScript)** frontend with **Server-Sent Events streaming**, so analysis results appear progressively as each pipeline stage completes instead of behind a single long wait",
      "Designed privacy in from the start: patient reports are processed **in memory only** and never written to disk or logs; **Redis (Upstash, TLS)** tracks LLM spend against hard ceilings so a runaway loop cannot burn the budget",
      "Containerized the backend with a multi-stage **Docker build** and deployed to **Azure Container Apps** (scale-to-zero) through Azure Container Registry, with the frontend on **Vercel** and **CI/CD** auto-deploys across both providers"
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
      "Ran a **foundation-model evaluation study** on DeepMind's **AlphaGenome**: applied the model to **16M+ genetic variants** to test whether **COSMIC mutational signatures** change predicted regulatory effects more than random mutations do, running as checkpointed **SLURM batch jobs** on the university HPC cluster",
      "Built the **validation framework before the analysis**: a sampler validator drawing **10,000 mutations per signature** and comparing outputs against a reference implementation, which caught a **reverse-complement bug** before it could contaminate results; after the fix, outputs matched the reference at **0.9998 cosine similarity**",
      "Reworked the input data itself: expanded the **COSMIC context table from 96 to 192 contexts** with reverse complements so every genomic position could be scored, and stored multi-track outputs in **Parquet** for fast downstream analysis",
      "Applied **Kolmogorov-Smirnov statistical tests** track by track and a **JASPAR transcription-factor analysis** across **856 motifs and 47 signatures**, choosing an SNR-based threshold over fixed cutoffs and reporting the result honestly, including a **GC-content correlation (r = -0.194, p = 0.010)** that partly explains the signal",
      "Refactored exploratory research code into **reusable, checkpointed Python pipelines** with resumable execution, turning multi-day analyses into reliable, repeatable runs the lab can rerun without me"
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
      "Rebuilt the lab's **single-cell multi-omics analysis** from scattered R scripts into **one modular Python pipeline** (**Scanpy**, **Muon**, **SnapATAC2**) that the whole lab now runs: quality control, normalization, batch correction, PCA, UMAP, **Leiden clustering**, marker detection, and **differential expression**",
      "Scaled the pipeline to **16,000+ cells and 36,000+ features** across **scRNA-seq and ATAC-seq** modalities and **3 pH (acidosis) conditions**, orchestrated with **Snakemake** on **HPC / SLURM** so long runs survive node failures and resume from checkpoints",
      "Made the work reusable by non-programmers: wrote the **documentation and run guides** that let **5 non-engineers** on the team rerun **10+ experiments** and interpret the figures on their own, instead of queuing behind the one person who wrote the code",
      "Partnered directly with **bench scientists and Ph.D. investigators** to translate raw multi-omics data into biological findings, producing the **figures and reports** used in manuscript and grant work",
      "Kept every stage under **version control in Git** with consistent QC protocols and data-integrity checks, so any result the lab publishes can be traced back to the exact code and inputs that produced it"
    ]
  },
  {
    id: 4,
    role: "Software Engineer",
    company: "Matchday AI",
    location: "Hyderabad, India",
    date: "Jan 2023 – Dec 2023",
    tags: ["Python", "Flask", "MongoDB", "Kafka", "OAuth 2.0", "Azure Pipelines", "Prometheus", "Grafana", "React"],
    highlights: [
      "Built the **backend services** for a live sports data platform: **Flask REST APIs** that ingest, process, and deliver live match events to a **React analytics dashboard** used during matches, where latency is visible to every user",
      "Tuned the data layer under real load: indexed frequent **MongoDB** queries to cut API response time by **~20%**, and added **Kafka buffering** between ingestion and serving to raise peak throughput by **~15%** during match-time spikes",
      "Secured the platform with **OAuth 2.0** authentication and role-based access for internal tools and partner integrations",
      "Owned the delivery pipeline end to end: **Azure Pipelines CI/CD** for builds and deploys, and **Prometheus + Grafana** monitoring and alerting so production issues surfaced before users reported them",
      "Worked in a collaborative **Git workflow** with a small engineering team, reviewing each other's changes and documenting API contracts for the frontend team"
    ]
  }
];
