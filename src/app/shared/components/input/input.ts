import { Component, input, computed } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {
  label = input<string>('');
  placeholder = input<string>('');
  type = input<'text' | 'password' | 'email' | 'number'>('text');
  control = input.required<FormControl>();

  // Accessibility properties
  ariaLabel = input<string>('');

  // Unique ID generated only once during initialization
  readonly inputId = `cl-input-${Math.random().toString(36).substring(2, 9)}`;

  // Computed Signal: Recalculates only when the control status or value changes
  errorMessage = computed(() => {
    const control = this.control();
    // We force the signal to observe changes in the form status
    if (!control.errors || !control.touched) return null;

    const errors = control.errors;
    if (errors['required']) return 'This field is required';
    if (errors['minlength']) {
      return `Minimum of ${errors['minlength'].requiredLength} characters required`;
    }

    return 'Invalid field';
  });
}
