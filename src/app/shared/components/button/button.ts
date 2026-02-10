import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
  host: {
    display: 'block',
    '[style.width]': 'fullWidth() ? "100%" : "fit-content"',
  },
})
export class ButtonComponent {
  label = input.required<string>();
  type = input<'button' | 'submit' | 'reset'>('button');
  color = input<string>('primary');
  outline = input<boolean>(false);
  fullWidth = input<boolean>(true);
  justify = input<'start' | 'center' | 'end'>('end');
  disabled = input<boolean>(false);
  isLoading = input<boolean>(false);

  btnClick = output<void>();

  // Container class based on Bootstrap 5
  containerClass = computed(() => {
    if (this.fullWidth()) return 'd-grid';
    return `d-flex justify-content-${this.justify()}`;
  });

  // Dynamic button variant classes
  buttonClass = computed(() => {
    const variantPrefix = this.outline() ? 'btn-outline-' : 'btn-';
    const variant = `${variantPrefix}${this.color()}`;

    // Apply disabled styling if the button is inactive or in a loading state
    return this.disabled() || this.isLoading() ? `${variant} is-disabled` : variant;
  });

  onClick() {
    // Double-check de segurança
    if (this.disabled() || this.isLoading()) {
      return;
    }
    this.btnClick.emit();
  }
}
