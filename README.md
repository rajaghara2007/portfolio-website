# Raj Aghara — 3D Developer Portfolio

A production-ready, dark, cinematic, futuristic 3D developer portfolio for **Raj Aghara** (Full Stack Developer & Software Developer, creator of [AegisLens](https://aegis-lens.vercel.app)).

Built with **React + Vite**, **Tailwind CSS**, **Three.js**, **React Three Fiber**, **Drei**, **GSAP + ScrollTrigger**, **Framer Motion**, **Lenis**, and **EmailJS**.

---

## ⚡ Tech Stack

- **Framework & Build**: React 18, Vite 5, Tailwind CSS v3, PostCSS, Autoprefixer
- **3D Graphics & Canvas**: Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
- **Physics & Motion**: GSAP 3 with ScrollTrigger, Framer Motion, Lenis Smooth Scroll
- **Icons**: Lucide React
- **Messaging Service**: EmailJS (`@emailjs/browser`)
- **Architecture**: 100% frontend static site; all dynamic content is isolated into structured data files in `src/data/`. Zero backend or database dependencies.

---

## 🚀 Quick Start & Local Setup

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed.

### 2. Installation
Navigate into the repository and install the dependencies:
```bash
npm install
```

### 3. Environment Variables
Copy `.env.example` to create your local `.env`:
```bash
cp .env.example .env
```
Fill in your EmailJS credentials (see [EmailJS Configuration](#-emailjs-configuration) below):
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxx
VITE_SITE_URL=https://rajaghara.dev
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build & Preview
To compile the optimized, code-split production bundle:
```bash
npm run build
npm run preview
```

---

## 📂 Project Directory Structure

```text
portfolio-website/
├── public/
│   ├── images/              # Profile avatar, project previews, vector SVGs
│   ├── certificates/        # Certificate scan PDFs and images (.gitkeep)
│   ├── resume/              # Raj-Aghara-Resume.pdf (Embedded viewer target)
│   ├── favicon.svg          # Cyberpunk monogram favicon
│   ├── robots.txt           # SEO crawler rules
│   └── sitemap.xml          # Search engine sitemap
├── src/
│   ├── animations/          # Framer Motion transition curves and variants
│   ├── assets/              # Static styling assets
│   ├── components/          # Reusable UI widgets
│   │   ├── EmptyState.jsx   # Futuristic placeholder for empty data files
│   │   ├── Footer.jsx       # Global footer with social links & status
│   │   ├── Navbar.jsx       # Glass floating header with smooth scroll & mobile drawer
│   │   ├── ProjectModal.jsx # Deep-dive dialog for inspecting project specs & links
│   │   ├── SectionHeading.jsx # Cyberpunk section header with animated pills
│   │   ├── TiltCard.jsx     # Mouse-tracking 3D tilt card with spring glare
│   │   └── WebGLFallback.jsx# Lightweight CSS gradient fallback for low-power/reduced motion
│   ├── data/                # Content files (NO fabrication)
│   │   ├── about.js         # Bio, education, journey, interests
│   │   ├── achievements.js  # Verified achievements list (currently empty placeholder)
│   │   ├── certificates.js  # Official credentials (currently empty placeholder)
│   │   ├── figma.js         # UI/UX design prototypes (currently empty placeholder)
│   │   ├── hackathons.js    # Hackathon timeline & project cards
│   │   ├── projects.js      # AegisLens, movie-react, task-arena-AI, reverse-engineering
│   │   ├── skills.js        # Evidenced skill matrix (TypeScript, React, Node, etc.)
│   │   └── socialLinks.js   # GitHub, LinkedIn, LeetCode, X, YouTube, Email
│   ├── hooks/
│   │   ├── useActiveSection.js # Intersection observer for scroll spy navigation
│   │   ├── useLenis.js         # Lenis inertia scroll synced to GSAP ScrollTrigger
│   │   └── useWebGLSupport.js  # Detects WebGL context & prefers-reduced-motion
│   ├── sections/            # Portfolio page sections
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── FigmaDesigns.jsx
│   │   ├── Hackathons.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── ResumeViewer.jsx
│   │   └── Skills.jsx
│   ├── styles/
│   │   └── index.css        # Tailwind directives, glassmorphism, scrollbars, neon glows
│   ├── three/               # React Three Fiber 3D Scene
│   │   ├── CyberGeometry.jsx # Interactive mouse-following wireframe icosahedron & core
│   │   ├── ParticleField.jsx # 1,000+ neon floating galactic particles
│   │   ├── SceneContainer.jsx# Canvas wrapper with lighting & performance bounds
│   │   └── ScrollCameraController.jsx # GSAP ScrollTrigger camera interpolation
│   ├── App.jsx              # Main application root
│   └── main.jsx             # React DOM entry point
├── .env.example
├── .gitignore
├── index.html               # SEO metadata, Open Graph, Twitter cards & Person Schema
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## ✏️ How to Edit Content & Fill in Placeholders

All content is intentionally isolated in `src/data/` so you can customize without touching UI code:

| Data File | Purpose | Notes |
|---|---|---|
| `src/data/about.js` | Bio, education degree & college, journey, interests | Update `education` with your university and graduation year. |
| `src/data/projects.js` | Project cards, descriptions, live demos, repositories | Add new projects or update existing ones. Empty link fields (`""`) hide action buttons automatically. |
| `src/data/skills.js` | Verified technical skills by category | Add database tools (e.g. MongoDB, PostgreSQL) once evidenced in your repos. |
| `src/data/certificates.js` | Official certificates & licenses | Add certificate objects with Credly or issuer verification URLs. |
| `src/data/hackathons.js` | Hackathon participations & sprint awards | Add problem statements, solutions, and project repo links. |
| `src/data/achievements.js` | Awards, competitive milestones | Add verified honors and contest rankings. |
| `src/data/figma.js` | Figma designs and UI kit prototypes | Add your Figma file links and preview images. |
| `src/data/socialLinks.js` | Social profiles (LinkedIn, LeetCode, X, YouTube) | Paste your profile URLs to activate the buttons. |

---

## 📧 EmailJS Configuration

The Contact section uses **EmailJS** to send messages directly from the static frontend without requiring a server backend.

### Setup Instructions:
1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. In the EmailJS Dashboard:
   - Go to **Email Services** &rarr; **Add New Service** (e.g. Gmail, Outlook, or SMTP). Note down your `Service ID`.
   - Go to **Email Templates** &rarr; **Create New Template**.
   - Set the template parameters to:
     - `from_name`: `{{from_name}}`
     - `reply_to`: `{{reply_to}}`
     - `subject`: `{{subject}}`
     - `message`: `{{message}}`
   - Save and note down your `Template ID`.
   - Go to **Account** &rarr; **API Keys** &rarr; copy your `Public Key`.
3. In EmailJS Dashboard &rarr; **Security**:
   - Turn on **Allow EmailJS API requests only from specific domains**.
   - Add your domains: `localhost`, `127.0.0.1`, and your deployed production domain (e.g., `your-portfolio.vercel.app` or `rajaghara.dev`).
4. Update `.env` (or project environment variables in Vercel/Netlify):
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

---

## 🌐 Deployment Instructions

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete production 3D developer portfolio"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **Add New Project** and select `portfolio-website`.
4. Framework Preset will auto-detect as **Vite**.
5. Under **Environment Variables**, add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_SITE_URL` (set to your Vercel URL or custom domain)
6. Click **Deploy**. Your site will be live with full SSL in ~30 seconds!

### Deploying to Netlify
1. Sign in to [Netlify](https://www.netlify.com/).
2. Select **Add new site** &rarr; **Import an existing project** &rarr; choose GitHub repository `portfolio-website`.
3. Build Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Add the environment variables under **Site configuration &rarr; Environment variables**.
5. Click **Deploy Site**.

---

## 🏷️ Custom Domain Setup

1. In Vercel / Netlify dashboard, navigate to **Settings &rarr; Domains**.
2. Enter your custom domain (e.g., `rajaghara.dev` or `rajaghara.com`).
3. Add the suggested DNS records at your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.):
   - **A Record**: `@` &rarr; `76.76.21.21` (for Vercel)
   - **CNAME Record**: `www` &rarr; `cname.vercel-dns.com`
4. Once DNS propagates (typically 5–30 minutes), SSL certificates are provisioned automatically.

---

## 🔍 Google Search Console & SEO Verification

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add your property (URL prefix: `https://your-domain.com`).
3. Verification Methods:
   - **HTML Tag**: Copy the `<meta name="google-site-verification" content="..." />` tag and paste it inside the `<head>` of `index.html`.
   - OR **DNS TXT Record**: Add the TXT record to your DNS provider.
4. Once verified, navigate to **Sitemaps** on the left menu.
5. Enter `sitemap.xml` and click **Submit**.
6. Google will automatically crawl and index your canonical routes defined in `public/sitemap.xml` and `public/robots.txt`.

---

## 🛡️ Performance, Accessibility & Fallback

- **3D Code Splitting**: Three.js, React Three Fiber, and Drei are isolated into a dedicated `threeVendor` chunk, loaded asynchronously via `React.lazy`.
- **Motion Optimization**: GSAP ticker is synced directly to the Lenis smooth scroll loop to eliminate layout thrashing.
- **Graceful WebGL Fallback**: When WebGL is disabled or when the user has enabled `prefers-reduced-motion`, the site displays an ultra-lightweight animated CSS cyber-gradient mesh, maintaining 60+ FPS without WebGL overhead.
- **Honeypot Anti-Spam & Throttling**: The contact form features a hidden honeypot field and a 30-second local throttle to prevent spam bots.
