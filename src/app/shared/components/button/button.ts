import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
  /* host: {
    display: 'block',
    style: 'width: 100%;',
  }, */
  host: {
    display: 'block', // Mantém como bloco para o container interno funcionar
    '[style.width]': 'fullWidth() ? "100%" : "fit-content"',
    // Se for fullWidth (Create), 100%. Se não (Edit/Delete), apenas o necessário.
  },
})
export class ButtonComponent {
  label = input.required<string>();
  type = input<'button' | 'submit' | 'reset'>('button');
  color = input<string>('primary');
  outline = input<boolean>(false);
  fullWidth = input<boolean>(true); // Padrão CodeLeap
  justify = input<'start' | 'center' | 'end'>('end'); // Padrão para alinhar à direita
  disabled = input<boolean>(false);
  isLoading = input<boolean>(false);

  btnClick = output<void>();

  // Classe do container baseada no Bootstrap 5
  containerClass = computed(() => {
    if (this.fullWidth()) return 'd-grid';
    return `d-flex justify-content-${this.justify()}`;
  });

  // Classes de estilo do botão
  buttonClass = computed(() => {
    const variantPrefix = this.outline() ? 'btn-outline-' : 'btn-';
    return `${variantPrefix}${this.color()}`;
  });

  onClick() {
    if (!this.disabled() && !this.isLoading()) {
      this.btnClick.emit();
    }
  }
}
