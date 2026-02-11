import { Component, input, output, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export type TextareaSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './textarea.html',
  styleUrl: './textarea.scss',
})
export class TextareaComponent {
  label = input.required<string>();
  control = input.required<FormControl>();
  placeholder = input<string>('');
  size = input<TextareaSize>('md');
  keyDown = output<KeyboardEvent>();

  // ID
  readonly inputId = `textarea-${Math.random().toString(36).substring(2, 9)}`;

  textareaSizeClass = computed(() => `textarea-${this.size()}`);

  errorMessage = computed(() => {
    const ctrl = this.control();
    if (!ctrl.errors || !ctrl.touched) return null;

    const errors = ctrl.errors;
    if (errors['required']) return 'This field is required';
    if (errors['minlength']) return `Minimum ${errors['minlength'].requiredLength} characters`;

    return 'Invalid field';
  });
}
