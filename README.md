# 📽️ Wedding Films Website

A fully responsive, mobile-first SvelteKit site to showcase cinematic wedding films. Built with Chakra UI, scroll-snapping, and deploys automatically via GitHub Actions to Vercel.

---

## 🚀 Features

- 🎨 Full Chakra UI dark mode theme
- ✨ Scroll-snapping sections with smooth animation
- 📷 Lazy-loaded image galleries
- 📨 Quick inquiry form + future CRM sync
- 📱 Mobile-first, responsive layout
- ⚡ GitHub → Vercel CI/CD pipeline

---

## 📁 File Structure

src/
├─ routes/
│  ├─ +layout.svelte       # Global Chakra wrapper
│  ├─ +page.svelte         # Hero, gallery, contact
│  └─ api/inquiry.js       # Contact form endpoint
├─ lib/useInView.js        # Animate-on-scroll
├─ app.html                # Meta, favicon, preview tags
theme/
└─ theme.js                # Chakra theme config

---

## 🧑‍💻 Development

Install & run locally:

```bash
pnpm install
pnpm dev