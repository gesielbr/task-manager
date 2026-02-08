import { Component, input, output } from '@angular/core';
import { HeaderComponent } from '../header/header';

@Component({
  selector: 'app-view-post-card',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './view-post-card.html',
  styleUrl: './view-post-card.scss',
})
export class ViewPostCardComponent {
  // Inputs obrigatórios para o card não ficar vazio
  title = input.required<string>();
  username = input.required<string>();
  content = input.required<string>();
  timeAgo = input.required<string>();

  // Controle de exibição dos ícones (Edit/Delete)
  isOwner = input<boolean>(false);

  // Emite o clique para quem estiver usando o card (ex: Playground ou Main Screen)
  editClick = output<void>();
  deleteClick = output<void>();
}
