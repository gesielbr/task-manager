import { Component, input, output } from '@angular/core';

export type HeaderVariant = 'standard' | 'rounded';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [], // Removido CommonModule pois usamos @if
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  title = input.required<string>();
  variant = input<HeaderVariant>('standard');
  showActions = input<boolean>(false);

  editClick = output<void>();
  deleteClick = output<void>();
}
