# Codelab Front-End Test – Angular Project

## 📝 Description

Project developed for the **Codelab Front-End technical test**.  
This application simulates a **user signup flow**, focusing on **clean architecture**, **reusable UI components**, **modern Angular APIs**, and **high-quality UX and accessibility**.

---

## ✨ Key Features

- **Angular 19 Architecture** Built using **Standalone Components**, ensuring a lightweight, modular, and future-proof structure.

- **Signal-based Inputs (Angular Signals API)** Usage of `input()` signals for optimized change detection and fine-grained reactivity.

- **Reusable UI Components**
  - **ModalComponent**: A highly flexible and accessible modal system built from scratch to ensure brand consistency.eatures a robust output system to communicate actions (Confirm/Cancel) back to parent components through Signals.
  - **ViewPostCardComponent**: A card-based component responsible for displaying user posts. It encapsulates the HeaderComponent and manages the visibility of action icons (Edit/Delete) based on a string-check ownership logic.
  - **PostCreateCardComponent**: Integrated component that combines input, textarea, and button to handle post creation with reactive validation.
  - **HeaderComponent**: Dual-variant header supporting a main site view (80px) and a card-based view (70px) with rounded corners and action triggers.
  - **InputComponent**: Centralized validation logic, accessibility support, and Bootstrap styling.
  - **TextareaComponent**: Scalable textarea with support for multiple size variants (`sm`, `md`, `lg`) and reactive forms integration.
  - **ButtonComponent**: State control (`disabled`, loading-ready structure) for consistent UI behavior.

- **Component Playground** A dedicated **Playground environment** to test and visualize UI components in isolation, speeding up development and ensuring design consistency.

- **Reactive & Typed Forms** Implementation of typed `FormGroup` and `FormControl` using `NonNullableFormBuilder` for safer and more predictable form handling.

- **A11y (Accessibility)** Proper use of ARIA attributes (`aria-label`, `aria-describedby`) to guarantee accessibility compliance.

---

### 🔘 Button Component

O botão agora é um componente inteligente que adapta seu layout baseando-se no contexto de uso.

- **Cores Oficiais:** Primary (Azul `#7695ec`), Success (Verde `#47B960`) e Danger (Vermelho `#ff5151`).
- **Modos de Largura:**
  - `fullWidth=true`: Ocupa 100% da largura (ex: Login, Mobile).
  - `fullWidth=false`: Mantém o padrão de design de 120px (ex: Modais, Alinhamento à direita).
- **Estados Visuais:** Inclui feedback tátil no clique (`active scale`), transições suaves e variação de contraste no hover.

### 📝 Post Create/Edit Card

O card de criação foi transformado em um componente híbrido para evitar duplicação de código.

- **Dual Mode:** Suporta os modos `create` (Home) e `edit` (Modal).
- **Auto-preenchimento:** Utiliza o novo sistema de `Signals` e `effects` do Angular para detectar mudanças e preencher o formulário instantaneamente ao abrir uma edição.
- **Layout Adaptativo:** O card altera seus títulos, cores de botões e visibilidade de ações (como o botão "Cancel") automaticamente conforme o modo selecionado.

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

git clone <repository-url>

### Install dependencies

npm install

### Run the application

ng serve

### Access the app

http://localhost:4200

📂 Project Structure Highlights

src/app/shared/components/view-post-card: Integrated card for view, edit or delete posts.

src/app/shared/components/post-create-card: Integrated card for creating new posts.

src/app/shared/components/header: Flexible header with size variants and action buttons.

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
