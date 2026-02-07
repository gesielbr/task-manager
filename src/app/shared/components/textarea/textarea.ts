import { Component, input, computed } from '@angular/core';
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

  // Ajustei para usar substring (moderno)
  inputId = `textarea-${Math.random().toString(36).substring(2, 9)}`;

  // Computed para as classes de tamanho
  textareaSizeClass = computed(() => `textarea-${this.size()}`);

  get errorMessage(): string | null {
    const errors = this.control().errors;
    const touched = this.control().touched;

    if (!touched || !errors) return null;
    if (errors['required']) return 'This field is required';
    if (errors['minlength']) return `Minimum ${errors['minlength'].requiredLength} characters`;
    
    return 'Invalid field';
  }
}