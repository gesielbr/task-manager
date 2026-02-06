import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button';
import { InputComponent } from '../../../shared/components/input/input';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ButtonComponent, InputComponent, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class SignupComponent {
  // O formulário que controla a validade do botão ENTER
  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.minLength(3)])
  });

  isLoading = false;

  handleEnter() {
    if (this.signupForm.valid) {
      this.isLoading = true;
      // Simulando a interação com API solicitada no teste
      setTimeout(() => {
        console.log('Username saved:', this.signupForm.value.username);
        this.isLoading = false;
        // Navegação para o Feed ocorreria aqui
      }, 1500);
    }
  }
}