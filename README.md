# Yuhesh R — Portfolio

A vibrant, responsive creative-tech portfolio built with React, TypeScript, Vite, Framer Motion, Lucide React, and custom CSS/SVG artwork. Project preview interfaces and scientific visuals are illustrations created in code; no stock-photo dependency is required.

## Requirements

- Node.js 20 or later
- npm 10 or later

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Build and preview

```bash
npm run build
npm run preview
```

The production site is written to `dist/`.

## Deploy to GitHub Pages

This repository includes `.github/workflows/deploy.yml`. It builds the site and deploys it to GitHub Pages automatically whenever you push to `main`. Vite uses relative asset paths, so the build works both for a project repository and for a `username.github.io` repository.

1. Create a new GitHub repository (for example, `yuhesh-portfolio`).
2. Extract this ZIP and open a terminal in the extracted `yuhesh-portfolio` folder.
3. Run the following commands, replacing the URL with your repository's URL:

   ```bash
   git init
   git add .
   git commit -m "Add portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

4. In the GitHub repository, open **Settings → Pages**. Under **Build and deployment**, select **GitHub Actions** as the source.
5. Open the **Actions** tab and wait for **Build and deploy portfolio to GitHub Pages** to complete. After the workflow succeeds, open the published URL shown in **Settings → Pages**.

No API keys or environment variables are required. Every subsequent push to `main` triggers a new deployment.

## Deploy to Vercel instead

Import the GitHub repository into Vercel and use:

- Build command: `npm run build`
- Output directory: `dist`

## Project structure

```text
.github/workflows/deploy.yml
public/
  .nojekyll
  favicon.svg
src/
  App.tsx
  main.tsx
  styles.css
  components/
    Navbar.tsx
    HeroSection.tsx
    AboutSection.tsx
    SkillsSection.tsx
    ExperienceSection.tsx
    ProjectsSection.tsx
    EducationSection.tsx
    DevelopmentApproach.tsx
    ContactSection.tsx
    Footer.tsx
    Reveal.tsx
    SectionHeading.tsx
index.html
vite.config.ts
package.json
tsconfig.json
tsconfig.app.json
```

## Content authenticity

Project cards intentionally do not point to invented repositories or demos. The supplied GitHub profile, email, and telephone information is used for contact links. Dashboard and EEG visuals are illustrative mockups, not claims of deployed or clinically validated systems.

## Accessibility and responsiveness

- Semantic landmarks, skip-to-content link, labelled navigation, and keyboard focus states.
- Mobile navigation opens, closes, and closes after selecting a section.
- `prefers-reduced-motion` is respected for entrance and decorative animation.
- Layout adapts from narrow mobile screens through desktop widths.
- Email and telephone actions use `mailto:` and `tel:` links.
