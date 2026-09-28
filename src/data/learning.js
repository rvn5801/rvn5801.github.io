export const learningFolders = [
  {
    id: "big-data",
    icon: "📁",
    title: "Big Data Analysis",
    description: "Distributed computing coursework demonstrating MapReduce, MPI-based graph processing, and large-scale optimization on HPC clusters.",
    color: "#00d4ff",
    courses: [
      {
        icon: "🗂️",
        title: "MapReduce Implementation",
        subtitle: "Parallel Data Processing",
        topics: "MapReduce paradigm, data partitioning, aggregation pipelines",
        skills: "Python, Bash, SLURM, parallel I/O",
        github: "https://github.com/rvn5801/Big-Data-Analysis/tree/main/Assignment1"
      },
      {
        icon: "📊",
        title: "PageRank with MPI",
        subtitle: "Distributed Graph Processing",
        topics: "PageRank algorithm, sparse graph processing, MPI communication",
        skills: "MPI4Py, OpenMPI, collective operations",
        github: "https://github.com/rvn5801/Big-Data-Analysis/tree/main/Assignment2"
      },
      {
        icon: "⚙️",
        title: "ADMM Logistic Regression",
        subtitle: "Distributed Optimization",
        topics: "ADMM optimization, consensus updates, iterative convergence",
        skills: "Python, MPI4Py, numerical optimization, SLURM",
        github: "https://github.com/rvn5801/Big-Data-Analysis/tree/main/Assignment3"
      }
    ]
  },
  {
    id: "medical-image",
    icon: "📁",
    title: "Medical Image Analysis",
    description: "Comprehensive coursework covering preprocessing, deep learning, segmentation, and registration techniques in medical imaging.",
    color: "#7c3aed",
    courses: [
      {
        icon: "🔍",
        title: "Medical Image Preprocessing",
        subtitle: "Normalization, Bias Correction, Resampling",
        topics: "Histogram normalization, bias field correction, spatial resampling",
        skills: "NumPy, SciPy interpolation, statistical methods",
        github: "https://github.com/rvn5801/Medical-Image-Analysis/tree/main/HW1"
      },
      {
        icon: "🫀",
        title: "Chest X-ray Classification",
        subtitle: "Deep Learning with MONAI",
        topics: "MONAI pipelines, transfer learning, class imbalance",
        skills: "PyTorch, MONAI, EfficientNet, GPU training",
        github: "https://github.com/rvn5801/Medical-Image-Analysis/tree/main/HW2"
      },
      {
        icon: "🩸",
        title: "3D Artery Segmentation",
        subtitle: "3D U-Net with Vesselness Filtering",
        topics: "3D U-Net, patch-based training, instance normalization",
        skills: "3D convolutions, MONAI loaders, GPU memory optimization",
        github: "https://github.com/rvn5801/Medical-Image-Analysis/tree/main/HW3"
      },
      {
        icon: "🔄",
        title: "Medical Image Registration",
        subtitle: "Deformable Registration with ANTs & VoxelMorph",
        topics: "ANTs registration, affine transforms, deformable registration",
        skills: "SimpleITK, VoxelMorph, coordinate transformations",
        github: "https://github.com/rvn5801/Medical-Image-Analysis/tree/main/HW4"
      }
    ]
  }
];
