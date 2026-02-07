import { Component, inject, output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../input/input';
import { TextareaComponent } from '../textarea/textarea';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-post-create-card',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, TextareaComponent, ButtonComponent],
  templateUrl: './post-create-card.html',
  styleUrl: './post-create-card.scss',
})
export class PostCreateCardComponent {
  private fb = inject(NonNullableFormBuilder);

  // Output usando a nova API de Signals do Angular 19
  onCreate = output<{ title: string; content: string }>();

  // Formulário tipado e reativo
  postForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    content: ['', [Validators.required, Validators.minLength(1)]],
  });

  onSubmit() {
    if (this.postForm.valid) {
      const formValue = this.postForm.getRawValue();

      // Emite o evento para o componente pai
      this.onCreate.emit(formValue);

      console.log('Post emitido:', formValue);

      // Reseta o formulário após a criação
      this.postForm.reset();
    }
  }
}
