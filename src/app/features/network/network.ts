import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header';
import { PostCreateCardComponent } from '../../shared/components/post-create-card/post-create-card';
import { ViewPostCardComponent } from '../../shared/components/view-post-card/view-post-card';
import { Post } from '../../shared/models/post.model';

@Component({
  selector: 'app-network',
  imports: [CommonModule, HeaderComponent, ViewPostCardComponent, PostCreateCardComponent],
  templateUrl: './network.html',
  styleUrl: './network.scss',
})
export class NetworkComponent implements OnInit, OnDestroy {
  currentUser = signal<string>('Victor');

  timeTrigger = signal(Date.now());
  private intervalId: any;

  posts = signal<Post[]>([
    {
      id: 1,
      username: 'Victor',
      created_datetime: new Date(new Date().getTime() - 25 * 60000),
      title: 'My First Post!',
      content: 'Hello CodeLeap Network! Testing the real-time relative time logic.',
    },
    {
      id: 2,
      username: 'GesielDev',
      created_datetime: new Date(new Date().getTime() - 2 * 60000),
      title: 'Angular 19 Tips',
      content: 'Signals are the future of state management.',
    },
  ]);

  getRelativeTime(postDate: Date): string {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);

    if (diffInMinutes < 1) return 'just now';
    if (diffInMinutes === 1) return '1 minute ago';
    return `${diffInMinutes} minutes ago`;
  }

  ngOnInit() {
    // A cada 60 segundos, atualizamos o trigger
    this.intervalId = setInterval(() => {
      this.timeTrigger.set(Date.now());
      console.log('⏰ Time updated!');
    }, 60000);
  }

  ngOnDestroy() {
    // Limpa o cronômetro quando sair da página (boas práticas!)
    if (this.intervalId) clearInterval(this.intervalId);
  }

  handleCreatePost(newPost: any) {
    const postParaAdicionar: Post = {
      id: Math.random(),
      username: this.currentUser(),
      created_datetime: new Date(), // Pega a hora exata do clique
      ...newPost,
    };
    this.posts.update((current) => [postParaAdicionar, ...current]);
  }

  handleEdit(id: number) {
    console.log('Abrir modal de edição para o post:', id);
  }

  handleDelete(id: number) {
    console.log('Abrir confirmação de deleção para o post:', id);
  }
}
