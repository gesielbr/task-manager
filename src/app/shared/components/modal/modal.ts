import {
  Component,
  input,
  output,
  effect,
  HostListener,
  ElementRef,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class ModalComponent {
  isOpen = input<boolean>(false);
  close = output<void>();

  modalContainer = viewChild<ElementRef>('modalContainer');

  constructor() {
    // Effect to lock body scroll when modal opens
    effect(() => {
      if (this.isOpen()) {
        document.body.style.overflow = 'hidden';
        // Small timeout to wait for @if to render the HTML
        setTimeout(() => {
          this.modalContainer()?.nativeElement.focus();
        }, 10);
      } else {
        document.body.style.overflow = 'auto';
      }
    });
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.isOpen()) {
      this.close.emit();
    }
  }

  handleOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.close.emit();
    }
  }
}
