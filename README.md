# Codelab Front-End Test - Angular Project

## 📝 Description
Project developed for the **Codelab technical test**. This application simulates a user authentication flow (Signup), demonstrating modern Angular best practices, high-performance reactivity, and responsive UI/UX design.

## ✨ Key Features
- **Angular 19 Architecture**: Built using **Standalone Components** for a modular, lightweight, and modern project structure.
- **Signal-based Inputs**: Leverages the new **Angular Signals API** (`input()` function) for optimized change detection and fine-grained reactivity.
- **Reusable Form Components**: A custom, highly configurable `InputComponent` that centralizes validation logic and styling, reducing code duplication.
- **A11y (Accessibility)**: Implementation of ARIA attributes (`aria-label`, `aria-describedby`) to ensure full compatibility with screen readers and assistive technologies.
- **Bootstrap 5 Integration**: Utilizing modern CSS classes for a fully responsive layout and real-time form validation feedback.
- **Reactive Forms**: Implementation of typed `FormGroup` and `FormControl` with `NonNullableFormBuilder` for robust data handling.

## 🛠️ Tech Stack
- **Framework:** Angular 19
- **Style:** Bootstrap 5 & SCSS
- **Forms:** Reactive Forms (Typed)

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Angular CLI](https://angular.io/cli) installed globally (`npm install -g @angular/cli`)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <task-manager>

2. **Install dependencies:**
   ```bash
   npm install

3. **Install dependencies:**
   ```bash
   ng serve

4. **Access the app: Open your browser at http://localhost:4200/**
📂 Project Structure Highlights
src/app/shared/components/input: Contains the reusable input component using Signal-based inputs.

src/app/features/auth/signup: The main registration page containing the business logic for user creation.

src/app/core: Reserved for global services, authentication logic, and guards.

🧪 Validation Logic
The form includes the following real-time validations:

Full Name: Required, minimum 3 characters.

Email: Required, must follow a valid email format.

Password: Required, minimum 6 characters.

Developed by Gesiel Souza Oliveira