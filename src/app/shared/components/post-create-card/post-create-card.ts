import { Component, inject, input, output, effect, untracked } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../input/input';
import { TextareaComponent } from '../textarea/textarea';
import { ButtonComponent } from '../button/button';

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

  mode = input<PostMode>('create');
  initialTitle = input<string>('');
  initialContent = input<string>('');

  save = output<{ title: string; content: string }>();
  cancel = output<void>();

  postForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    content: ['', [Validators.required, Validators.minLength(1)]],
  });

  constructor() {
    // Synchronize form values when in edit mode using Signals effect
    effect(() => {
      const mode = this.mode();
      const title = this.initialTitle();
      const content = this.initialContent();

      untracked(() => {
        if (mode === 'edit') {
          this.postForm.patchValue({ title, content });
        }
      });
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.save.emit(this.postForm.getRawValue());

      if (this.mode() === 'create') {
        this.postForm.reset();
      }
    }
  }
}
