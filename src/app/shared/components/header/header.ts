import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para *ngIf

export type HeaderVariant = 'standard' | 'rounded';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  // Inputs
  title = input.required<string>();
  variant = input<HeaderVariant>('standard'); 
  showActions = input<boolean>(false);

  // Outputs (Eventos)
  editClick = output<void>();
  deleteClick = output<void>();
}