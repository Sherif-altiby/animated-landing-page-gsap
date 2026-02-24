# 🍹 Mojito — Animated Cocktail Landing Page

An animated cocktail landing page built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **GSAP**. Features smooth scroll-driven animations, video scrubbing, parallax effects, and text splitting animations.

## ✨ Features

- **GSAP SplitText** — animated character-by-character title entrance
- **ScrollTrigger** — scroll-driven video scrubbing and parallax leaf animations
- **Pinned video section** — video plays frame-by-frame as you scroll
- **Responsive design** — mobile-first layout with adaptive animation values
- **Noisy texture aesthetic** — unique visual style for the hero section

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) — React framework
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [GSAP](https://gsap.com/) — animations (SplitText, ScrollTrigger)
- [react-responsive](https://github.com/yocontra/react-responsive) — responsive breakpoint hooks

## 🚀 Getting Started
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project.

## 📁 Project Structure
```
app/
├── components/
│   └── Hero.tsx       # Main hero section with all GSAP animations
├── globals.css        # Global styles and noisy texture
└── page.tsx           # Root page
public/
├── images/            # Leaf assets
└── videos/            # Hero background video
```

## 📦 Key Dependencies
```bash
npm install gsap @gsap/react react-responsive
```

## 🔗 Live Demo

[View on vercel](https://animated-landing-page-gsap.vercel.app/)
