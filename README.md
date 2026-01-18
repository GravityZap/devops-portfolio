# DevOps Portfolio Platform

Production-style DevOps portfolio platform demonstrating real-world CI/CD, platform engineering and cloud delivery practices.

This repository is not only a personal website, but also a fully automated delivery system built to reflect how modern cloud and platform teams design, build and release software.

🌐 Live: https://maciejhofman.cloud

---

## 🚀 What this project demonstrates

- Production-grade CI/CD pipeline
- Quality gates and automated validation
- Artifact-based build and deployment
- Environment-aware delivery flow
- GitHub Pages as a static hosting platform
- Real-world DevOps and platform engineering patterns

---

## 🏗 High-level architecture

Developer → GitHub → GitHub Actions → Build → Artifact → Deploy → GitHub Pages → Users

Core components:

- React + Vite frontend
- GitHub Actions CI/CD
- GitHub Pages hosting
- Custom domain with HTTPS
- Automated build and deployment

---

## 🔄 CI/CD pipeline

The pipeline is implemented using GitHub Actions and is automatically triggered on:

- every pull request to `main`
- every push to `main`

The delivery flow is divided into three logical stages.

### 1️⃣ Quality stage (pre-merge gate)

Executed for pull requests and main branch pushes.

Responsibilities:

- source checkout  
- dependency installation (`npm ci`)  
- static code analysis (lint)  
- optional automated tests  

Purpose:

- fail fast on quality issues  
- protect production from broken or non-compliant code  
- enforce deterministic builds  

This stage acts as a quality gate for the entire platform.

---

### 2️⃣ Build stage (environment-aware build)

Executed only if the quality stage succeeds.

Key characteristics:

- pinned Node.js runtime  
- dependency caching  
- reproducible builds  
- environment-based configuration  

Supported logical environments:

| Environment | Trigger      | Purpose                              |
|-------------|--------------|--------------------------------------|
| preview     | pull request | validation and integration builds    |
| production  | push to main | production artifact generation       |


The pipeline dynamically injects the correct environment configuration and produces a versioned build artifact.

---

### 3️⃣ Deploy stage (controlled release)

Executed only for production builds from the `main` branch.

Responsibilities:

- download build artifact  
- deploy to GitHub Pages  
- bind deployment to the production environment  

Key features:

- clear release boundary  
- environment binding  
- optional manual approvals (supported by GitHub Environments)  
- automatic HTTPS certificate provisioning  

This stage represents the separation between CI and production delivery.

---

## 🌍 Environment strategy

The platform applies explicit environment separation:

- **preview** – validation builds for pull requests  
- **production** – official public releases  

Environment configuration:

- versioned non-secret config in repository  
- secrets managed through GitHub Environments  
- dynamic injection during build stage  

This mirrors real-world multi-environment platform patterns.

---

## 🛡 Platform principles

This repository follows production delivery standards:

- clear stage separation  
- quality gates and fast failure  
- deterministic and reproducible builds  
- artifact-based promotion  
- environment awareness  
- automated and auditable releases  

---

## 💻 Local development

Requirements:

- Node.js 22+

Run locally:

```bash
npm install
npm run dev
```
Production build:

```bash
npm run build
npm run preview
```


## 🏗 Architecture diagram
```mermaid
flowchart TD
    Dev["Developer workstation"]
    Repo["GitHub Repository"]
    
    subgraph GitHub["GitHub Platform"]
        Actions["GitHub Actions CI/CD"]
        Cache["Dependency cache"]
        Artifacts["Build artifacts"]
    end

    subgraph Pipeline["CI/CD Pipeline"]
        Install["Install dependencies"]
        Lint["Lint and quality checks"]
        Test["Tests"]
        Build["Production build"]
    end

    Pages["GitHub Pages hosting"]
    User["End users / Browser"]

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


