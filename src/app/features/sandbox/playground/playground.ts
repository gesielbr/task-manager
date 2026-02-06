import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input';
import { ButtonComponent } from '../../../shared/components/button/button';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [ButtonComponent, InputComponent, ReactiveFormsModule], 
  templateUrl: './playground.html',
  styleUrl: './playground.scss',
})
export class PlaygroundComponent {
  // 1. Seu teste de estados anterior
  testForm = new FormGroup({
    textControl: new FormControl(''),
    emailControl: new FormControl(''),
    errorControl: new FormControl('', [
      Validators.required, 
      Validators.minLength(5)
    ]) 
  });

  // 2. Novo teste: Botão dependente do Input
  sendForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  constructor() {
    // Mantém o estado de erro visível no primeiro teste
    this.testForm.controls.errorControl.markAsTouched();
  }

  handleSubmission() {
    if (this.sendForm.valid) {
      alert(`Enviado com sucesso: ${this.sendForm.value.userName}`);
    }
  }
}