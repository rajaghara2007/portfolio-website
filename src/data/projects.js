/**
 * Projects Data File - Raj Aghara
 * 
 * Filtered to verified projects only.
 * Excludes reverse-engineering per explicit user instruction.
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
      'An enterprise-grade vulnerability intelligence and risk orchestration platform designed for modern security teams. Features interactive dashboards, continuous asset inventory, automated CVSS v3.1 scoring, remediation Kanban boards, audit logs, and an integrated AI assistant interface.',
    longDescription:
      'AegisLens is a full-featured security intelligence platform built to bridge the gap between vulnerability discovery and remediation. It aggregates discovered flaws across digital assets, calculates risk metrics using industry-standard CVSS v3.1 scoring formulas, and presents real-time heatmaps for executive visibility. Security analysts can initiate retesting, manage remediation using an intuitive Kanban board, inspect comprehensive audit logs, and query an integrated AI assistant interface for threat triage guidance.',
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
    youtubeUrl: '',
    postmanDocsUrl: '',
  },
  {
    id: 'movie-react',
    title: 'movie-react',
    tagline: 'React & CSS UI Exploration',
    category: 'Frontend',
    isFork: false,
    featured: false,
    description:
      'A clean React frontend application exploring responsive component architectures, movie browsing user interfaces, and modular CSS styling patterns.',
    longDescription:
      'A React frontend project focusing on user interface styling, layout composition, and responsive CSS styling with clean component structures.',
    techStack: ['React', 'CSS', 'JavaScript'],
    features: [
      'Responsive React component structure',
      'Modular CSS styling architecture',
      'Fast client-side rendering with clean UI state'
    ],
    previewImage: '/images/movie-react-preview.svg',
    githubUrl: 'https://github.com/rajaghara2007/movie-react',
    liveDemoUrl: '',
    youtubeUrl: '',
    postmanDocsUrl: '',
  },
  {
    id: 'task-arena-ai',
    title: 'task-arena-AI',
    tagline: 'Task Benchmark & AI Workflow Exploration',
    category: 'AI & Tools',
    isFork: true,
    forkOriginal: 'yagna-patel6969/task-arena',
    featured: false,
    description:
      'A task management and benchmark evaluation interface exploring automated execution workflows, task scheduling, and AI-assisted task arenas.',
    longDescription:
      'An exploration repository focusing on benchmarking task execution, testing automated workflow interactions, and structuring task arena pipelines.',
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
    features: [
      'Task management and execution workflow experiments',
      'Automated testing workflows and task benchmarking',
      'Interactive JavaScript client application'
    ],
    previewImage: '/images/task-arena-preview.svg',
    githubUrl: 'https://github.com/rajaghara2007/task-arena-AI',
    liveDemoUrl: '',
    youtubeUrl: '',
    postmanDocsUrl: '',
  }
];
