import { Component, signal, OnInit, OnDestroy, inject } from '@angular/core'; // Adicionei inject
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header';
import { PostCreateCardComponent } from '../../shared/components/post-create-card/post-create-card';
import { ViewPostCardComponent } from '../../shared/components/view-post-card/view-post-card';
import { Post, CreatePostDto } from '../../shared/models/post.model';
import { PostService } from '../../services/post';

@Component({
  selector: 'app-network',
  standalone: true, // Garanta que está como standalone se for v17+
  imports: [CommonModule, HeaderComponent, ViewPostCardComponent, PostCreateCardComponent],
  templateUrl: './network.html',
  styleUrl: './network.scss',
})
export class NetworkComponent implements OnInit, OnDestroy {
  // Injeção do Service
  private postService = inject(PostService);

  currentUser = signal<string>('Victor');
  posts = signal<Post[]>([]); // Começa vazio agora
  timeTrigger = signal(Date.now());
  private intervalId: any;

  ngOnInit() {
    this.loadPosts(); // Carrega os posts do Render ao iniciar

    this.intervalId = setInterval(() => {
      this.timeTrigger.set(Date.now());
    }, 60000);
  }

  // --- MÉTODOS DE COMUNICAÇÃO COM O BACKEND ---

  loadPosts() {
    this.postService.getPosts().subscribe({
      next: (data) => {
        // O Django retorna os posts, vamos atualizar o signal
        this.posts.set(data);
      },
      error: (err) => console.error('Erro ao carregar posts:', err),
    });
  }

  handleCreatePost(eventData: { title: string; content: string }) {
    // Criamos o objeto completo exigido pelo CreatePostDto (incluindo o username)
    const postParaEnviar: CreatePostDto = {
      username: this.currentUser(), // Pegamos o valor do seu Signal
      title: eventData.title,
      content: eventData.content,
    };

    // Agora passamos o objeto completo para o Service
    this.postService.createPost(postParaEnviar).subscribe({
      next: (createdPost) => {
        this.posts.update((current) => [createdPost, ...current]);
      },
      error: (err) => console.error('Erro ao criar post:', err),
    });
  }

  handleDelete(id: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.postService.deletePost(id).subscribe({
        next: () => {
          // Remove da tela apenas se deletou no banco
          this.posts.update((current) => current.filter((p) => p.id !== id));
        },
        error: (err) => console.error('Erro ao deletar:', err),
      });
    }
  }

  // --- LÓGICA DE TEMPO ---

  getRelativeTime(postDate: any): string {
    // O Django envia string, precisamos converter para Date
    const date = new Date(postDate);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);

    if (diffInMinutes < 1) return 'just now';
    if (diffInMinutes === 1) return '1 minute ago';
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    return `${diffInHours} hours ago`;
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  handleEdit(id: number) {
    console.log('Aqui você abriria o modal de edição para o ID:', id);
    // Próximo passo: Criar a lógica do modal de edição
  }
}
