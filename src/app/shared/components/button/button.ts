import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class ButtonComponent {
  // Label and behavioral properties
  label = input.required<string>();
  type = input<'button' | 'submit' | 'reset'>('button');
  
  // Style properties based on Bootstrap 5 classes (primary, secondary, danger, etc.)
  color = input<string>('primary');
  
  // Bootstrap sizes: 'sm' (Small), 'lg' (Large). Leave empty for default (Medium).
  size = input<'sm' | 'lg' | ''>('');
  
  // Design variants
  outline = input<boolean>(false);
  
  fullWidth = input<boolean>(true);
  
  // Renomeado para evitar conflito com atributo obsoleto do HTML
  justify = input<'start' | 'center' | 'end'>('center');

  // Computed atualizado
  containerClass = computed(() => {
    if (this.fullWidth()) return 'd-grid'; 
    return `d-flex justify-content-${this.justify()}`;
  });
  
  // State management
  disabled = input<boolean>(false);
  isLoading = input<boolean>(false);

  // Event emitter for parent interaction
  btnClick = output<void>();

  /**
   * Computed signal to handle Bootstrap class logic dynamically.
   * This prevents empty classes and handles the 'outline' variant prefix.
   */
  buttonClass = computed(() => {
    const variantPrefix = this.outline() ? 'btn-outline-' : 'btn-';
    const colorClass = `${variantPrefix}${this.color()}`;
    const sizeClass = this.size() ? `btn-${this.size()}` : '';
    
    return `${colorClass} ${sizeClass}`.trim();
  });

  onClick() {
    if (!this.disabled() && !this.isLoading()) {
      this.btnClick.emit();
    }
  }
}
