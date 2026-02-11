import { Routes } from '@angular/router';
import { SignupComponent } from './features/auth/signup/signup';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  // Public route - accessible without authentication
  { path: 'signup', component: SignupComponent },

  // Protected route - requires authenticated user
  {
    path: 'network',
    loadComponent: () => import('./features/network/network').then((m) => m.NetworkComponent),
    canActivate: [authGuard],
  },

  // Default route
  { path: '', redirectTo: 'signup', pathMatch: 'full' },

  // Sandbox / development playground
  {
    path: 'playground',
    loadComponent: () =>
      import('./features/sandbox/playground/playground').then((m) => m.PlaygroundComponent),
  },

  // Fallback route
  { path: '**', redirectTo: 'signup' },
];
