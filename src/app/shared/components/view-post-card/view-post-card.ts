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
  title = input.required<string>();
  username = input.required<string>();
  content = input.required<string>();
  timeAgo = input.required<string>();

  isOwner = input<boolean>(false);

  editClick = output<void>();
  deleteClick = output<void>();
}
