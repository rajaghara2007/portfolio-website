# Raj Aghara — Developer Portfolio

A clean, modern, high-performance personal developer portfolio for **Raj Aghara** (Full Stack Developer & Computer Science Student, creator of [AegisLens](https://aegis-lens.vercel.app)).

Modeled after modern developer portfolios with clean section layouts, crisp typography, responsive project cards, and fast load times.

---

## ⚡ Tech Stack

- **Framework**: React 18, Vite 5
- **Styling**: Tailwind CSS v3, PostCSS, Autoprefixer
- **Icons**: Lucide React
- **Messaging**: EmailJS (`@emailjs/browser`)
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

---

## 🚀 Quick Start & Local Setup

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed.

### 2. Installation
```bash
npm install
```

### 3. Environment Variables
Copy `.env.example` to create your local `.env`:
```bash
cp .env.example .env
```
Add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxx
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm run preview
```

---

## 📂 Project Structure

```text
portfolio-website/
├── public/
│   ├── images/              # Profile avatar, project previews, vector SVGs
│   ├── resume/              # Raj-Aghara-Resume.pdf (Embedded viewer target)
│   ├── favicon.svg          # Portfolio favicon
│   ├── robots.txt           # Search crawler index rules
│   └── sitemap.xml          # Search sitemap
├── src/
│   ├── components/          # Reusable UI widgets
│   │   ├── Navbar.jsx       # Clean responsive header with mobile drawer
│   │   ├── SectionHeading.jsx # Section title badge and underline
│   │   ├── ProjectModal.jsx # Detail dialog for inspecting project specs
│   │   └── Footer.jsx       # Clean footer with social links & status
│   ├── data/                # Data files
│   │   ├── about.js         # Bio, education details, developer journey
│   │   ├── certificates.js  # Verified certifications
│   │   ├── hackathons.js    # Hackathon project showcases
│   │   ├── projects.js      # AegisLens, movie-react, task-arena-AI (excludes reverse-engineering)
│   │   ├── skills.js        # Categorized skill matrix (Languages, Frontend, Backend, Tools)
│   │   └── socialLinks.js   # GitHub, LinkedIn, LeetCode, Email
│   ├── sections/            # Portfolio page sections
│   │   ├── Hero.jsx         # Clean hero introduction & action buttons
│   │   ├── About.jsx        # Bio, education at Swaminarayan University / CodingGita
│   │   ├── Skills.jsx       # Organized skill cards by category
│   │   ├── Projects.jsx     # Project showcase with category filters & modal
│   │   ├── Certificates.jsx # Verified certifications grid
│   │   ├── Hackathons.jsx   # Hackathon timeline & project cards
│   │   ├── ResumeViewer.jsx # Embedded PDF viewer with open & download buttons
│   │   └── Contact.jsx      # Clean contact cards & EmailJS form
│   ├── styles/
│   │   └── index.css        # Clean Tailwind styles and scrollbar styling
│   ├── App.jsx              # Main application root
│   └── main.jsx             # React DOM entry point
├── .env.example
├── .gitignore
├── index.html               # Clean SEO metadata, Open Graph & schema
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🌐 Deployment to Vercel

1. Commit and push the repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: clean modern developer portfolio for Raj Aghara"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com/) &rarr; click **Add New Project** &rarr; select `portfolio-website`.
3. Framework Preset will auto-detect as **Vite**.
4. Add your EmailJS environment variables in the Vercel dashboard.
5. Click **Deploy**. Your site will be live immediately!
