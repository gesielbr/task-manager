# Codelab Front-End Test – Angular Project

## 📝 Description
Project developed for the **Codelab Front-End technical test**.  
This application simulates a **user signup flow**, focusing on **clean architecture**, **reusable UI components**, **modern Angular APIs**, and **high-quality UX and accessibility**.

---

## ✨ Key Features

- **Angular 19 Architecture**  
  Built using **Standalone Components**, ensuring a lightweight, modular, and future-proof structure.

- **Signal-based Inputs (Angular Signals API)**  
  Usage of `input()` signals for optimized change detection and fine-grained reactivity.

- **Reusable Form Components**  
  - Custom `InputComponent` with centralized validation logic, accessibility support, and Bootstrap styling.
  - Custom `ButtonComponent` with state control (`disabled`, loading-ready structure), improving consistency and reuse across the app.

- **Component Playground**  
  A dedicated **Playground environment** to test and visualize UI components in isolation, speeding up development and ensuring design consistency.

- **Reactive & Typed Forms**  
  Implementation of typed `FormGroup` and `FormControl` using `NonNullableFormBuilder` for safer and more predictable form handling.

- **A11y (Accessibility)**  
  Proper use of ARIA attributes (`aria-label`, `aria-describedby`) to guarantee accessibility compliance.

- **Bootstrap 5 Integration**  
  Responsive layout, modern UI, and real-time validation feedback using Bootstrap 5 utility classes and components.

- **Smart UI State Control**  
  Submit button is only enabled when the form is valid, improving user experience and preventing invalid submissions.

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

### Installation & Setup

### Clone the repository

git clone <repository-url>


### Install dependencies

npm install


### Run the application

ng serve


### Access the app

http://localhost:4200

📂 Project Structure Highlights
src/app/shared/components/input Reusable input component using Signal-based inputs and centralized validation.

src/app/shared/components/textarea Scalable textarea component with multiple size supports.

src/app/shared/components/button Reusable button component with state handling and consistent UI behavior.

src/app/playground Component playground for isolated testing and UI experimentation.

src/app/features/auth/signup Signup feature containing form logic and validation rules.

src/app/core Reserved for global services, authentication logic, and guards.

### 🧪 Validation Logic

The signup form includes real-time validations:

Full Name: Required, minimum of 3 characters

Email: Required, must be a valid email format

Password: Required, minimum of 6 characters

Developed by Gesiel Souza Oliveira