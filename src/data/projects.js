/**
 * Projects Data File
 * 
 * NOTE: Only projects verified from GitHub profile (https://github.com/rajaghara2007)
 * are listed below. Do not fabricate projects or links.
 * 
 * Empty buttons (e.g. empty liveDemo, youtube, postmanDocs) are automatically hidden in the UI.
 * Categories available: 'Full Stack', 'Frontend', 'Games', 'Website Clones', 'Other'.
 * The category filter automatically hides categories with 0 items.
 */

export const projects = [
  {
    id: 'aegislens',
    title: 'AegisLens',
    tagline: 'Security Assessment & Vulnerability Intelligence Platform',
    category: 'Full Stack',
    isFork: false,
    featured: true,
    description:
      'An enterprise-grade vulnerability intelligence and risk orchestration platform designed for modern security teams. Provides comprehensive assessment workflows, continuous asset inventory, automated CVSS v3.1 scoring, remediation lifecycle tracking, and an interactive AI security assistant interface.',
    longDescription:
      'AegisLens is a full-featured security intelligence platform built to bridge the gap between vulnerability discovery and remediation. It aggregates discovered flaws across digital assets, calculates risk metrics using industry-standard CVSS v3.1 scoring formulas, and presents real-time heatmaps for immediate executive visibility. Security analysts can initiate retesting, manage remediation using an intuitive Kanban board, inspect comprehensive audit logs, and query an integrated AI assistant interface for threat triage guidance.',
    techStack: [
      'React',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'Recharts',
      'Lucide React',
      'Node.js',
      'Express'
    ],
    features: [
      'Interactive security assessment dashboards & risk analytics',
      'Continuous asset inventory tracking with risk heatmaps',
      'Standardized CVSS v3.1 vulnerability calculator',
      'Remediation lifecycle management via interactive Kanban board',
      'Retesting verification workflows and exportable compliance audit logs',
      'Integrated AI-assisted security triage interface'
    ],
    previewImage: '/images/aegislens-preview.svg',
    githubUrl: 'https://github.com/rajaghara2007/AegisLens',
    liveDemoUrl: 'https://aegis-lens.vercel.app',
    youtubeUrl: '', // Left empty - button automatically hidden
    postmanDocsUrl: '', // Left empty - button automatically hidden
  },
  {
    id: 'movie-react',
    title: 'movie-react',
    tagline: 'React & CSS UI Exploration',
    category: 'Frontend',
    isFork: false,
    featured: false,
    description:
      'TODO: Add detailed description of movie-react features and implementation in src/data/projects.js.',
    longDescription:
      'A React frontend project focusing on user interface styling, layout composition, and responsive CSS styling. [TODO: Add further details regarding API integration, movie browsing features, and UI components].',
    techStack: ['React', 'CSS', 'JavaScript'],
    features: [
      'Responsive React component structure',
      'Modular CSS styling architecture',
      'TODO: Add specific feature points'
    ],
    previewImage: '/images/movie-react-preview.svg',
    githubUrl: 'https://github.com/rajaghara2007/movie-react',
    liveDemoUrl: '', // Left empty - button automatically hidden
    youtubeUrl: '',
    postmanDocsUrl: '',
  },
  {
    id: 'task-arena-ai',
    title: 'task-arena-AI',
    tagline: 'Fork of yagna-patel6969/task-arena',
    category: 'Other',
    isFork: true,
    forkOriginal: 'yagna-patel6969/task-arena',
    featured: false,
    description:
      'Forked repository of yagna-patel6969/task-arena exploring benchmark testing, task orchestration, and AI evaluation workflows.',
    longDescription:
      'An exploration fork focusing on benchmarking task execution and evaluating automated workflow interactions based on the upstream project yagna-patel6969/task-arena.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    features: [
      'Forked from upstream yagna-patel6969/task-arena',
      'Task management and execution workflow experiments',
      'JavaScript frontend interactions'
    ],
    previewImage: '/images/task-arena-preview.svg',
    githubUrl: 'https://github.com/rajaghara2007/task-arena-AI',
    liveDemoUrl: '',
    youtubeUrl: '',
    postmanDocsUrl: '',
  },
  {
    id: 'reverse-engineering',
    title: 'reverse-engineering',
    tagline: 'Fork of morluto/rea',
    category: 'Other',
    isFork: true,
    forkOriginal: 'morluto/rea',
    featured: false,
    description:
      'Forked repository of morluto/rea exploring reverse engineering utilities, binary analysis, and TypeScript tooling.',
    longDescription:
      'An exploration and research fork based on morluto/rea focusing on reverse engineering methodologies, type definitions, and code decompilation utilities.',
    techStack: ['TypeScript', 'JavaScript'],
    features: [
      'Forked from upstream morluto/rea',
      'Static code and binary inspection tooling',
      'TypeScript type system and algorithmic analysis'
    ],
    previewImage: '/images/reverse-eng-preview.svg',
    githubUrl: 'https://github.com/rajaghara2007/reverse-engineering',
    liveDemoUrl: '',
    youtubeUrl: '',
    postmanDocsUrl: '',
  }
];

