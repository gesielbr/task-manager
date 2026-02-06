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
  
  // Using Signal-based inputs for better performance and fine-grained reactivity (Angular 19)
  label = input<string>('');
  placeholder = input<string>('');
  type = input<'text' | 'password' | 'email' | 'number'>('text');
  
  // The 'required' modifier ensures the parent component must provide a FormControl
  control = input.required<FormControl>();
  
  // Accessibility properties for screen readers and ARIA descriptions
  ariaLabel = input<string>(''); 
  addonId = input<string>(''); 

  /**
   * Getter that evaluates the FormControl state and returns 
   * localized error messages based on active validators.
   */
  get errorMessage() {
    const errors = this.control().errors;
    
    // Return null if no errors are present
    if (!errors) return null;

    if (errors['required']) return 'This field is required';
    if (errors['email']) return 'Please enter a valid email address';
    if (errors['minlength']) {
      return `Minimum of ${errors['minlength'].requiredLength} characters required`;
    }
    
    return 'Invalid field';
  }
}