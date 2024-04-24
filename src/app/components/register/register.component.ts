import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  messageError: string = '';
  isLoading: boolean = false;

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
    rePassword: new FormControl(''),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),

  }, { validators: [this.confirmPassword] } as FormControlOptions);


  confirmPassword(group: FormGroup): void {

    let password = group.get('password');
    let rePassword = group.get('rePassword');


    if (rePassword?.value == '') {
      rePassword.setErrors({ required: true })
    }

    else if (password?.value != rePassword?.value) { // ? thats named (null safety)
      rePassword?.setErrors({ misMatch: true });
    }
  }

  handelForm(): void {
    console.log(this.registerForm.value)
    if (this.registerForm.valid) {

      this.isLoading = true;

      this._AuthService.setRegister(this.registerForm.value).subscribe({
        next: (response) => {
          if (response.message == 'success') {
            this.isLoading = false
            this._Router.navigate(['/login'])
          }
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading = false
          this.messageError = error.error.message;
        }
      })
    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }
}
