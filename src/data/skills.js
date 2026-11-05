/**
 * Skills Data File
 * 
 * HARD RULE: Evidence-based skills only. Derived strictly from real repository code:
 * - TypeScript, JavaScript, HTML, CSS (from AegisLens, movie-react, forks)
 * - React, Vite, Tailwind CSS, Recharts, Lucide React (from AegisLens, movie-react)
 * - Node.js, Express (from AegisLens backend)
 * - No database was evidenced in public repos, so Databases is kept empty as a TODO.
 */

export const skillCategories = [
  {
    name: 'Programming Languages',
    description: 'Core languages utilized across production and experimental repositories.',
    skills: [
      { name: 'TypeScript', level: 'Proficient', icon: 'FileCode2', evidence: 'AegisLens, reverse-engineering' },
      { name: 'JavaScript', level: 'Proficient', icon: 'Code', evidence: 'task-arena-AI, movie-react, AegisLens' },
      { name: 'HTML5', level: 'Experienced', icon: 'Layout', evidence: 'AegisLens, Web projects' },
      { name: 'CSS3', level: 'Experienced', icon: 'Palette', evidence: 'movie-react, Styling' }
    ]
  },
  {
    name: 'Frontend Development',
    description: 'Modern user interface and single-page application engineering.',
    skills: [
      { name: 'React.js', level: 'Proficient', icon: 'Atom', evidence: 'AegisLens, movie-react' },
      { name: 'Vite', level: 'Proficient', icon: 'Zap', evidence: 'AegisLens' },
      { name: 'Tailwind CSS', level: 'Proficient', icon: 'Sparkles', evidence: 'AegisLens' },
      { name: 'Recharts', level: 'Familiar', icon: 'BarChart3', evidence: 'AegisLens Risk Visualizations' },
      { name: 'Lucide React', level: 'Proficient', icon: 'Feather', evidence: 'AegisLens Iconography' }
    ]
  },
  {
    name: 'Backend Development',
    description: 'Server runtime and API services evidenced in project codebases.',
    skills: [
      { name: 'Node.js', level: 'Working Knowledge', icon: 'Server', evidence: 'AegisLens Backend Server' },
      { name: 'Express.js', level: 'Working Knowledge', icon: 'Cpu', evidence: 'AegisLens REST Services' }
    ]
  },
  {
    name: 'Databases',
    description: 'Database engines and ORMs (Update once repos demonstrate usage).',
    // Kept empty per strict rules: No databases evidenced in public repos.
    skills: [
      // TODO: Add database technologies (e.g. MongoDB, PostgreSQL, SQLite, Prisma) once evidenced in repositories.
    ],
    placeholderNote: 'Add database entries in src/data/skills.js once evidenced.'
  },
  {
    name: 'Tools & Platforms',
    description: 'Development environments, version control, and cloud hosting.',
    skills: [
      { name: 'Git', level: 'Proficient', icon: 'GitBranch', evidence: 'GitHub repositories' },
      { name: 'GitHub', level: 'Proficient', icon: 'Github', evidence: 'Version control & collaboration' },
      { name: 'Vercel', level: 'Proficient', icon: 'Cloud', evidence: 'AegisLens production deployment' },
      { name: 'Postman', level: 'Familiar', icon: 'Send', evidence: 'API verification & testing' },
      { name: 'npm', level: 'Proficient', icon: 'Package', evidence: 'Package management' }
    ]
  },
  {
    name: 'Architectural Concepts',
    description: 'Core engineering practices and workflow patterns.',
    skills: [
      { name: 'RESTful API Design', level: 'Familiar', icon: 'Network', evidence: 'Client-server communications' },
      { name: 'Component-Driven UI', level: 'Proficient', icon: 'Boxes', evidence: 'Modular design systems' },
      { name: 'Responsive Web Design', level: 'Proficient', icon: 'Smartphone', evidence: 'Cross-device layout engineering' },
      { name: 'CVSS Risk Calculations', level: 'Specialized', icon: 'ShieldAlert', evidence: 'AegisLens scoring implementation' }
    ]
  }
];

