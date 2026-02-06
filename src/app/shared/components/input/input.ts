import { Component, input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {
  // Inputs baseados em Signals (Angular 19)
  label = input<string>('');
  placeholder = input<string>('');
  type = input<'text' | 'password' | 'email' | 'number'>('text');
  control = input.required<FormControl>();
  
  // Propriedades de acessibilidade
  ariaLabel = input<string>(''); 
  addonId = input<string>(''); 

  /**
   * Gerador de ID único: Resolve o erro "Property inputId does not exist"
   * e garante que o Label sempre clique no Input correto.
   */
  inputId = 'cl-input-' + Math.random().toString(36).substring(2, 9);

  get errorMessage() {
    const errors = this.control().errors;
    if (!errors) return null;

    if (errors['required']) return 'This field is required';
    
    if (errors['minlength']) {
      return `Minimum of ${errors['minlength'].requiredLength} characters required`;
    }

    return 'Invalid field';
  }
}