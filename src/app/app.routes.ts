import { Routes } from '@angular/router';
import { Signup } from './features/auth/signup/signup';
import { PlaygroundComponent } from './features/sandbox/playground/playground';

export const routes: Routes = [
  { path: 'signup', component: Signup },
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { 
  path: 'playground', 
  loadComponent: () => import('./features/sandbox/playground/playground').then(m => m.PlaygroundComponent) 
}
];
