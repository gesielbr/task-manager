import { Routes } from '@angular/router';
import { Signup } from './features/auth/signup/signup';


export const routes: Routes = [
  { path: 'signup', component: Signup },
  { path: '', redirectTo: 'signup', pathMatch: 'full' }
];
