import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class ButtonComponent {
  label = input.required<string>();
  type = input<'button' | 'submit' | 'reset'>('button');
  color = input<string>('primary');
  size = input<'sm' | 'lg' | ''>('');
  outline = input<boolean>(false);
  fullWidth = input<boolean>(true);
  justify = input<'start' | 'center' | 'end'>('center');
  disabled = input<boolean>(false);
  isLoading = input<boolean>(false);
  btnClick = output<void>();

  containerClass = computed(() => {
    if (this.fullWidth()) return 'd-grid'; 
    return `d-flex justify-content-${this.justify()}`;
  });

  buttonClass = computed(() => {
    const variantPrefix = this.outline() ? 'btn-outline-' : 'btn-';
    const colorClass = `${variantPrefix}${this.color()}`;
    
    // Se size for vazio, aplicamos nossa classe customizada 'btn-default'
    const sizeClass = this.size() ? `btn-${this.size()}` : 'btn-default';
    
    return `${colorClass} ${sizeClass}`.trim();
  });

  onClick() {
    if (!this.disabled() && !this.isLoading()) {
      this.btnClick.emit();
    }
  }
}