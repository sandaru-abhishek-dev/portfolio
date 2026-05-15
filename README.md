# 🚀 Sandaru Abhishek — Portfolio

A modern, premium personal portfolio website built with **React + Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React** icons. Designed to impress recruiters and showcase AI/ML research and software development work.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- 🎨 **Dark/Light Mode** — persistent theme toggle
- 🌊 **Glassmorphism UI** — frosted glass cards and borders
- ✨ **Smooth Animations** — powered by Framer Motion
- 🎯 **Responsive** — mobile-first design
- 🔍 **SEO Optimized** — meta tags, Open Graph, semantic HTML
- 🧭 **Sticky Navbar** — with active section highlighting
- ⌨️ **Typing Effect** — animated role cycling in hero
- 🌌 **Particle Background** — canvas-based floating particles
- ⬆️ **Back-to-Top** — animated scroll button
- 🎬 **Loading Screen** — animated intro with progress bar
- 📱 **Mobile Menu** — smooth hamburger navigation

## 🏗️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| Vite 6 | Build Tool |
| Tailwind CSS 3 | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| gh-pages | Deployment |

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glassmorphism navbar
│   │   ├── Hero.jsx            # Hero with typing effect
│   │   ├── About.jsx           # Biography & highlights
│   │   ├── Skills.jsx          # Tabbed skills with progress bars
│   │   ├── Projects.jsx        # Project cards grid
│   │   ├── Experience.jsx      # Timeline layout
│   │   ├── Education.jsx       # Education card
│   │   ├── Achievements.jsx    # Achievement cards
│   │   ├── Contact.jsx         # Form + social links
│   │   ├── Footer.jsx          # Quick links & copyright
│   │   ├── ParticleBackground.jsx  # Canvas particles
│   │   ├── LoadingScreen.jsx   # Animated loading
│   │   └── BackToTop.jsx       # Scroll-to-top button
│   ├── data/
│   │   └── portfolioData.js    # All content (edit this!)
│   ├── hooks/
│   │   └── useScrollSpy.js     # Active section detection
│   ├── App.jsx                 # Main app with theme management
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles & utilities
├── index.html                  # SEO meta tags & fonts
├── tailwind.config.js          # Custom design tokens
├── postcss.config.js
├── vite.config.js              # GitHub Pages base path
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ installed
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The site will be available at `http://localhost:5173/portfolio/`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 GitHub Pages Deployment

### Step-by-Step Instructions

1. **Create a GitHub repository** named `portfolio` (or your preferred name)

2. **Update `vite.config.js`** — change the `base` value to match your repo name:
   ```js
   base: '/portfolio/'  // ← replace with your repo name
   ```

3. **Update SEO meta tags** in `index.html`:
   - Change `og:url` to your actual GitHub Pages URL

4. **Update personal info** in `src/data/portfolioData.js`:
   - Email, GitHub username, LinkedIn URL
   - Project links, CV download link

5. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

6. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```
   This runs `vite build` and publishes the `dist/` folder to the `gh-pages` branch.

7. **Enable GitHub Pages** in your repo:
   - Go to **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **/ (root)**
   - Click **Save**

8. Your site will be live at: `https://yourusername.github.io/portfolio/`

### Custom Domain (Optional)

If using a custom domain:
1. Set `base: '/'` in `vite.config.js`
2. Add a `CNAME` file in `public/` with your domain name
3. Configure DNS as per [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## ✏️ Customization

All personal content is centralized in **`src/data/portfolioData.js`**. Edit this single file to update:

- Hero text, roles, tech badges
- About biography, highlights, interests
- Skills (technical, research, soft)
- Projects (title, description, tags, colors)
- Experience timeline entries
- Education details
- Achievements
- Contact information

### Adding a Profile Photo

Replace the `SA` initials in `Hero.jsx` with an image:
```jsx
<img
  src="/your-photo.jpg"
  alt="Sandaru Abhishek"
  className="w-full h-full rounded-full object-cover"
/>
```
Place the image in the `public/` folder.

### Adding a CV

1. Place your CV PDF in `public/` (e.g., `public/Sandaru_Abhishek_CV.pdf`)
2. Update the Download CV button `href` in `Hero.jsx`:
   ```jsx
   href="/portfolio/Sandaru_Abhishek_CV.pdf"
   ```

## 📄 License

MIT License — feel free to use and modify for your own portfolio.

---

**Built with ❤️ by Sandaru Abhishek using React & Tailwind CSS**
