# 🚀 CodeLeap Network - Frontend Assessment

## 📝 Project Overview

This project is a high-performance social media dashboard built for the **CodeLeap** recruitment process. It features a complete CRUD flow, focused on **clean architecture**, **reusable UI components**, and the latest **Angular 19 APIs**.

**🔗 [Live Demo on Vercel](https://task-manager-km9wy51we-gesielbrs-projects.vercel.app/signup)**
**🔗 [Live Demo on Vercel](https://task-manager-km9wy51we-gesielbrs-projects.vercel.app/network)**
**🔗 [Live Demo on Vercel](https://task-manager-km9wy51we-gesielbrs-projects.vercel.app/playground)**

---

## ✨ Key Features

- **Angular 19 Architecture**: Built using **Standalone Components**, ensuring a lightweight, modular, and future-proof structure.
- **Signal-based Reactivity**: Leveraging Angular's new `input()` and `computed()` signals for fine-grained change detection and superior performance.
- **Hybrid Component Strategy**: The `PostCreateCardComponent` is a dual-mode engine that handles both creation and editing, reducing code duplication (DRY principle) and ensuring UI consistency.
- **Component Playground**: A dedicated environment to test UI components in isolation, ensuring they work perfectly before integration.

- **Reusable UI Components**
  - **ModalComponent**: A lightweight, accessible modal system designed to maintain brand identity. It utilizes a Signal-driven communication pattern to bridge actions (Confirm/Cancel) between the overlay and parent components.
  - **ViewPostCardComponent**: The core content display unit. It encapsulates the HeaderComponent and dynamically toggles administrative actions (Edit/Delete) using granular ownership logic.
  - **PostCreateCardComponent**: A hybrid "Smart Component" that orchestrates inputs, textareas, and buttons. It handles both Creation and Edition states, leveraging reactive validation for data integrity.
  - **HeaderComponent & TextareaComponent**: A versatile UI element supporting dual variants: a Global Header (80px) for site navigation and a Contextual Card Header (70px) with rounded corners and event triggers.
  - **ButtonComponent**: A robust action component featuring state-management for loading and disabled behaviors, ensuring a consistent tactile experience across the entire platform.
- **Component Playground** A dedicated **Playground environment** to test and visualize UI components in isolation, speeding up development and ensuring design consistency.

---

- **Why this structure stands out**:

**Scalability**
By separating Core, Shared, and Features, you demonstrate an understanding of enterprise-level Angular patterns.

**Efficiency**
Highlighting the "Hybrid" nature of your cards proves you value code reusability.

**Modernity**
Mentioning Signals and Content Projection shows you are proficient with advanced, modern Angular techniques.

---

## 🛠️ Tech Stack

- **Framework:** Angular 19
- **Styling:** Bootstrap 5 & SCSS
- **Forms:** Reactive Forms (Typed)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Angular CLI](https://angular.io/cli) installed globally
  ```bash
  npm install -g @angular/cli
  ```

### Installation & Setup

### Clone the repository

git clone <https://github.com/gesielbr/task-managerl>

### Install dependencies

npm install

### Run the application

ng serve

### Access the app

http://localhost:4200

📂 Project Structure Highlights

### src/app/core:

The backbone of the application. Reserved for global singleton services, authentication logic, interceptors, and route guards.

### src/app/features/auth/signup:

Encapsulates the user onboarding logic, including reactive form state management and domain-specific validation rules.

### src/app/shared/components/modal:

A robust and accessible dialog system that utilizes Content Projection (<ng-content>) to dynamically render edit forms or deletion confirmation alerts.

### src/app/shared/components/post-create-card:

hybrid "Smart Component" designed for both creating and editing posts, significantly reducing code duplication through state-driven logic (DRY principle).

### src/app/shared/components/view-post-card:

An integrated unit for post visualization that orchestrates delete/edit interactions based on user ownership permissions.

### src/app/shared/components/header:

A multi-variant header component that adapts its height and styling according to its placement, supporting both Global and Card-based views.

### src/app/shared/components:

(UI Kit): Includes Input, Textarea, and Button components. These are atomic, reusable elements leveraging Signal-based inputs for high-performance reactivity and centralized validation.

### src/app/playground:

A dedicated sandboxed environment for isolated component testing and UI experimentation, ensuring design system integrity before feature integration.

### 🧪 Validation Logic

The signup form includes real-time validations:

Full Name: Required, minimum of 3 characters

Email: Required, must be a valid email format

Password: Required, minimum of 6 characters

Developed by Gesiel Souza Oliveira
