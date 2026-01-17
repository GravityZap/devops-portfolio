# 🏗 CI/CD Architecture Overview

This repository implements a production-style CI/CD architecture designed to demonstrate real-world DevOps and platform engineering practices.

The delivery pipeline is built around clear stage separation, environment awareness, and automated quality gates.

---

## 🔄 Pipeline Flow

The pipeline is implemented using GitHub Actions and is triggered on:

- every push to the `main` branch  
- every pull request targeting `main`

It consists of three logical stages:

---

### 1️⃣ Quality stage (pre-merge gate)

Executed for both pull requests and main branch pushes.

**Responsibilities:**

- source checkout  
- dependency installation using deterministic lockfile (`npm ci`)  
- static code analysis (lint)  
- automated tests (if present)  

**Purpose:**

- fail fast on code quality issues  
- prevent unstable or non-compliant code from reaching the build and deployment stages  

This stage acts as a **quality gate protecting production**.

---

### 2️⃣ Build stage (environment-aware build)

Executed only if the quality stage succeeds.

**Key characteristics:**

- pinned Node.js runtime  
- dependency caching  
- reproducible builds  
- environment-specific configuration injection  

Two logical environments are supported:

| Environment | Trigger         | Purpose                              |
|-------------|------------------|--------------------------------------|
| preview     | pull request     | validation and integration testing   |
| production  | push to `main`   | production artifact generation       |

The pipeline dynamically injects the correct configuration by selecting the appropriate `.env` file during the build.

Build output is packaged as a **versioned artifact**, decoupling build from deployment.

---

### 3️⃣ Deploy stage (controlled release)

Executed only for production builds from the `main` branch.

**Responsibilities:**

- retrieve build artifact  
- deploy static site to GitHub Pages  
- bind deployment to the `production` environment  

**Key features:**

- environment binding in GitHub  
- optional manual approval support  
- automatic TLS certificate provisioning by GitHub Pages  

This stage represents the **release boundary between CI and production delivery**.

---

## 🌍 Environment Strategy

The architecture implements explicit environment separation:

### preview  
Used for validation builds triggered by pull requests.

### production  
Used for officially released builds deployed to the public domain.

Environment-specific configuration is:

- versioned in the repository (non-secret config)  
- injected dynamically at build time  
- isolated from secrets, which are managed through GitHub Environments  

This model reflects real-world platform patterns used in multi-environment delivery pipelines.

---

## 🛡 Platform and reliability principles

The CI/CD architecture follows these principles:

- clear stage separation  
- fast failure and quality gates  
- deterministic and reproducible builds  
- artifact-based promotion  
- environment awareness  
- automated and auditable releases  

Together, these practices align the repository with **production-grade delivery standards**.

---

## 🎯 Architectural goals

- demonstrate CI/CD as a platform, not a script  
- show environment and release management  
- reflect modern DevOps and platform engineering practices  
- provide a clean, auditable delivery flow  
