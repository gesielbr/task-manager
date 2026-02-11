# 🚀 CodeLeap Network - Frontend Assessment

## 📝 Project Overview

This project is a frontend implementation of the CodeLeap Network challenge.

The application demonstrates a modern Angular architecture using Standalone Components, Signals, and a scalable feature-based structure. It implements a complete CRUD flow with route protection and ownership-based UI controls.

🔗 **Live Application**  
https://task-manager-km9wy51we-gesielbrs-projects.vercel.app

---

## ✨ Key Features

- **Standalone Angular Architecture** (modular and lightweight structure)
- **Signal-based State Management**
- **Route Protection using AuthGuard (CanActivate)**
- **Ownership-based UI Authorization (Edit/Delete visibility)**
- **Reusable UI Component System**
- **Lazy-loaded Feature Components**
- **Full CRUD Integration with Backend API**

---

## 🔐 Authentication Strategy

A lightweight authentication flow was implemented using:

- `localStorage` persistence for session management
- Functional `AuthGuard` to protect private routes
- Conditional UI rendering based on post ownership

Only authenticated users can access protected routes, and only post owners can edit or delete their content.

---

## 🛠️ Tech Stack

- **Angular (Standalone Components)**
- **Angular Signals**
- **Reactive Forms**
- **Bootstrap 5**
- **SCSS**

---

## 📂 Project Structure

```
src/app
 ├── core/        → Guards and global logic
 ├── shared/      → Reusable UI components
 ├── features/    → Domain-based feature organization
```

This structure promotes scalability, separation of concerns, and maintainability.

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/gesielbr/task-managerl
```

### Install dependencies

```bash
npm install
```

### Run the application

```bash
ng serve
```

Access locally at:

```
http://localhost:4200
```

---

Developed by **Gesiel Souza Oliveira**
