import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input';

@Component({
  selector: 'app-signup',
  imports: [
    ReactiveFormsModule, 
    InputComponent
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  
  private fb = inject(NonNullableFormBuilder);

  // 1. Defining the form structure with built-in Bootstrap-compatible validations
  signupForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  });

  // 2. Method triggered by (ngSubmit) in the HTML template
  onSubmit() {
    if (this.signupForm.valid) {
      // Aqui você pegaria os dados para enviar para o seu serviço fake
      const formValues = this.signupForm.getRawValue();
      console.log('Form submitted successfully!', formValues);
      
      // Success simulation:
      alert('Registration completed (Mock Success)!');
    } else {
      // If invalid, we mark all fields as 'touched' 
      // This triggers Bootstrap's 'is-invalid' classes in the InputComponent
      this.signupForm.markAllAsTouched();
    }
  }
}
