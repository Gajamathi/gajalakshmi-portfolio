# Quick Start Guide — Gajalakshmi Mathi Portfolio

## 🚀 Getting Started in 5 Minutes

### Prerequisites
- Node.js 16+ (download from nodejs.org)
- npm (comes with Node.js)
- A code editor (VS Code recommended)

### 1. Start the Development Server

```bash
cd gajalakshmi-portfolio
npm install  # Only needed first time
npm run dev
```

The website will open at **http://localhost:5173**

Changes auto-refresh in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

Creates an optimized `dist/` folder ready for deployment.

---

## 🌐 Deploy in 60 Seconds

### Option A: Vercel (Easiest)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Click through prompts, done! Your site is live.

### Option B: Netlify
1. Build locally: `npm run build`
2. Go to netlify.com → Sign up
3. Drag & drop the `dist/` folder
4. Your site is live!

### Option C: GitHub Pages
```bash
# Create a GitHub repo
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio
git push -u origin main

# Enable GitHub Pages in repo settings
# Set source to "main" branch
```

---

## 🔧 Essential Customizations

### 1. Add Your Resume
```
1. Add PDF to: public/Gajalakshmi_Mathi_Resume.pdf
2. Update button links in Navigation.tsx and Hero.tsx
3. Change href to "/Gajalakshmi_Mathi_Resume.pdf"
```

### 2. Connect Contact Form
```
Update LetsConnect.tsx:
  - Line 20: Change fetch URL to your backend
  - Add email service (SendGrid, Mailgun, custom API)
  - Test form submission
```

### 3. Update Social Links
- LinkedIn: Update URL in Footer.tsx
- GitHub: Update URL in Footer.tsx & LetsConnect.tsx
- Email: mathigajalakshmi@gmail.com (already set)

### 4. Update Project Links
In WhatIDocument.tsx:
- AuditX View Project → link to case study
- Smart TV View Project → link to case study

---

## 📱 Testing Checklist

- [ ] Desktop (1920px width)
- [ ] Tablet (768px width)
- [ ] Mobile (375px width)
- [ ] Scroll animations work smoothly
- [ ] Forms are keyboard accessible
- [ ] All links work
- [ ] Mobile menu opens/closes
- [ ] No console errors

---

## 🎨 Design System Colors

Use these throughout:
```
--color-alabaster: #F3EEE6      (main background)
--color-midnight-ink: #163F46   (text, structure)
--color-deep-maroon: #7F0303    (accent)
--color-muted-tan: #C9A982      (supporting)
--color-soft-blue: #A9C6D0      (diagrams)
```

In Tailwind:
```html
<div className="bg-alabaster text-midnight-ink">
<button className="bg-deep-maroon text-alabaster">
<span className="border-muted-tan">
```

---

## 📚 File Structure Quick Reference

```
src/
├── components/
│   ├── Navigation.tsx      ← Header & menu
│   ├── Hero.tsx           ← Big intro
│   ├── About.tsx          ← Biography
│   ├── WhatIDocument.tsx   ← Projects
│   ├── ToolsAndTechnology.tsx  ← Tools list
│   ├── MyJourney.tsx       ← Timeline
│   ├── LetsConnect.tsx     ← Contact form
│   ├── Footer.tsx         ← Bottom
│   └── InkFlow.tsx        ← Animations
├── App.tsx                 ← Main layout
├── index.css              ← Global styles
└── main.tsx               ← Entry point
```

---

## 🆘 Common Issues

### "npm ERR! 404 Not Found"
```bash
npm cache clean --force
npm install --legacy-peer-deps
```

### Scroll animations lag
- Disable browser extensions
- Check for console errors
- Reduce animation complexity

### Colors look wrong
- Clear browser cache (Cmd+Shift+Delete)
- Check CSS is loaded: DevTools → Styles tab
- Verify Tailwind config is installed

### Mobile menu not working
- Check Navigation.tsx state
- Verify onClick handlers
- Test in incognito window

---

## 🚀 Deployment Checklist

Before going live:

- [ ] Resume PDF added
- [ ] Contact form backend configured
- [ ] Social links updated
- [ ] Project links pointing to correct pages
- [ ] All text & content verified
- [ ] Tested on mobile, tablet, desktop
- [ ] No console errors
- [ ] Scroll animations smooth
- [ ] Meta tags added (for social sharing)
- [ ] Analytics configured (optional)

---

## 📞 Need Help?

**For Vite/React issues:** vite.dev/guide
**For GSAP animations:** greensock.com/docs
**For Tailwind CSS:** tailwindcss.com/docs
**For deployment:** vercel.com, netlify.com, github.com

---

## Performance Targets

After deployment, check:
- [ ] Lighthouse score 85+
- [ ] First Contentful Paint < 1.5s
- [ ] Smooth 60 FPS scrolling
- [ ] Mobile score 75+

---

## Version Info

- React: 19.2.8
- Vite: 8.3.0
- GSAP: 3.15.0
- Tailwind CSS: 4.3.3
- Node: 16+ required

---

## That's It! 🎉

Your portfolio is ready to go live.

Good luck!
