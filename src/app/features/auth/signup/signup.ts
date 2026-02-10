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
  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  isLoading = false;

  handleEnter() {
    if (this.signupForm.valid) {
      this.isLoading = true;
      setTimeout(() => {
        console.log('Username saved:', this.signupForm.value.username);
        this.isLoading = false;
      }, 1500);
    }
  }
}
