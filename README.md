# DevOps Portfolio

Personal portfolio website of a DevOps Engineer with multi-cloud experience.
Built with React and automatically deployed to GitHub Pages using CI/CD.

![Deploy](https://github.com/GravityZap/devops-portfolio/actions/workflows/deploy.yml/badge.svg)

---

## 🚀 Live site
https://gravityzap.github.io/devops-portfolio

---

## 🏗 Architecture

Developer → GitHub → GitHub Actions → Build → Artifact → GitHub Pages → Browser

- React (Vite)
- Node.js 22
- GitHub Actions CI/CD
- GitHub Pages hosting

---

## 🔄 CI/CD Pipeline

Pipeline is triggered on every push to `main` branch.

Steps:
1. Checkout source code
2. Install dependencies
3. Build production artifacts
4. Upload artifact
5. Deploy to GitHub Pages

---

## 💻 Local development

```bash
npm install
npm run dev

## 🏗 Architecture diagram

```mermaid
flowchart LR
    Dev[Developer workstation]
    Repo[GitHub Repository]
    
    subgraph GitHub["GitHub Platform"]
        Actions[GitHub Actions CI/CD]
        Cache[Dependency cache]
        Artifacts[Build artifacts]
    end

    subgraph Pipeline["CI/CD Pipeline"]
        Install[Install dependencies]
        Lint[Lint & quality checks]
        Build[Production build (Vite)]
        Test[Optional tests]
    end

    Pages[GitHub Pages Hosting]
    User[End users / Browser]

    Dev --> Repo
    Repo --> Actions

    Actions --> Install
    Install --> Cache
    Install --> Lint
    Lint --> Test
    Test --> Build
    Build --> Artifacts
    Artifacts --> Pages
    Pages --> User

