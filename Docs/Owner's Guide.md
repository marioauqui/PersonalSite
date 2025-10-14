# 👑 Owner’s Guide (marioauqui.com)

A private guide for maintaining and upgrading my personal website.  
This file explains how the site works, where to change things, and how to fix common issues.

---

## 🧭 Purpose

This site serves as my personal portfolio and professional hub.  
It’s built with **Next.js**, **TypeScript**, **Tailwind CSS**, and deployed via **Vercel**.

I use it to:

- Showcase my skills, research, and projects
- Provide links to my LinkedIn, GitHub, and resume
- Experiment with front-end features and design updates

---

## 📁 File & Folder Quick Reference

| Location                         | Description                                    | Edit Often?                     |
| -------------------------------- | ---------------------------------------------- | ------------------------------- |
| `src/app/page.tsx`               | Homepage text, layout, and sections            | ✅ Yes                          |
| `src/app/layout.tsx`             | Global layout wrapper (navbar, footer, theme)  | ⚙️ Sometimes                    |
| `src/components/ThemeToggle.tsx` | Light/Dark mode button                         | ⚙️ Sometimes                    |
| `src/app/globals.css`            | Global styles                                  | ⚙️ Sometimes                    |
| `tailwind.config.ts`             | Color palette, fonts, Tailwind settings        | ⚙️ Rarely                       |
| `public/`                        | Images, favicon, resume PDF, Open Graph banner | ✅ Yes                          |
| `package.json`                   | Dependencies and scripts                       | ⚠️ Only when updating libraries |
| `.next/` & `node_modules/`       | Build & dependencies (auto-generated)          | 🚫 Never touch                  |

---

## 🧠 Common Tasks

### 🔹 Update Homepage Content

Edit:

src/app/page.tsx

Look for `<section>` blocks or text within `<p>` and `<h1>` tags.  
Save → the page updates automatically when running `npm run dev`.

---

### 🔹 Add a New Page

1. Create a new folder inside `src/app/`  
   Example:

src/app/projects/page.tsx

2. Add your content using React/JSX.
3. Visit `http://localhost:3000/projects` to view it.

---

### 🔹 Change Colors or Fonts

Edit in:
tailwind.config.ts

Example:

```ts
theme: {
  extend: {
    colors: {
      brand: '#2563eb', // blue
      accent: '#fbbf24', // yellow
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
},

Save and restart the dev server.

🔹 Update Resume or Images

Replace the files in:

public/

Example:
public/resume.pdf → automatically available at marioauqui.com/resume.pdf

🔹 Deploy Changes

Commit your changes:

git add .
git commit -m "Update content"
git push origin main

2. Vercel automatically rebuilds and updates the live site within ~30 seconds.



```
