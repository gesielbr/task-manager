import { Component, inject, input, output, effect } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../input/input';
import { TextareaComponent } from '../textarea/textarea';
import { ButtonComponent } from '../button/button';

// Define os modos possíveis: Criar ou Editar
export type PostMode = 'create' | 'edit';

@Component({
  selector: 'app-post-create-card',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, TextareaComponent, ButtonComponent],
  templateUrl: './post-create-card.html',
  styleUrl: './post-create-card.scss',
})
export class PostCreateCardComponent {
  private fb = inject(NonNullableFormBuilder);

  // --- NOVOS INPUTS ---
  mode = input<PostMode>('create'); // Se não passar nada, assume 'create'
  initialTitle = input<string>(''); // Título original (para edição)
  initialContent = input<string>(''); // Conteúdo original (para edição)

  // --- OUTPUTS ---
  save = output<{ title: string; content: string }>(); // Serve para Create ou Edit
  cancel = output<void>(); // Só serve para o Edit (fechar modal)

  postForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    content: ['', [Validators.required, Validators.minLength(1)]],
  });

  constructor() {
    // EFEITO MÁGICO: Se mudar para modo 'edit', preenche o formulário
    effect(() => {
      if (this.mode() === 'edit') {
        this.postForm.patchValue({
          title: this.initialTitle(),
          content: this.initialContent(),
        });
      }
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      // Emite o evento (o pai decide se é createPost ou updatePost)
      this.save.emit(this.postForm.getRawValue());

      // Se for criação, limpa o formulário. Se for edição, mantém.
      if (this.mode() === 'create') {
        this.postForm.reset();
      }
    }
  }
}
