import { Routes } from '@angular/router';
import { SignupComponent } from './features/auth/signup/signup';
// Não precisamos importar o Playground aqui em cima porque ele já está usando Lazy Loading abaixo

export const routes: Routes = [
  // 1. Rota de entrada: Signup
  { path: 'signup', component: SignupComponent },

  // 2. Rota Principal: Network (A que estamos criando agora)
  {
    path: 'network',
    // O caminho correto geralmente é: pasta features / pasta do componente / arquivo do componente
    loadComponent: () => import('./features/network/network').then((m) => m.NetworkComponent),
  },

  // 3. Rota Padrão: Redireciona para o signup ao abrir o app
  { path: '', redirectTo: 'signup', pathMatch: 'full' },

  // 4. Sua Ferramenta de Testes (Sandbox)
  {
    path: 'playground',
    loadComponent: () =>
      import('./features/sandbox/playground/playground').then((m) => m.PlaygroundComponent),
  },

  // 5. Wildcard: Se digitar qualquer coisa errada, volta para o signup
  { path: '**', redirectTo: 'signup' },
];
