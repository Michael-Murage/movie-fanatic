import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    private emailInput: string = '';
    private passwordInput: string = '';
    emailError: boolean | 'blank' = false;
    passwordError: boolean | 'blank' = false;

    constructor(
        private authService: AuthService,
        private _router: Router
    ) { }

    handleInput(inputObject: HTMLInputElement): void {
        if (inputObject.name === 'email') {
            if (this.emailError || this.passwordError) {
                this.emailError = false;
                this.passwordError = false;    
            }
            this.emailInput = inputObject.value;
        }
        if (inputObject.name === 'password') {
            if (this.emailError || this.passwordError) {
                this.emailError = false;
                this.passwordError = false;    
            }
            this.passwordInput = inputObject.value;
        }
    }

    private authenticate(): boolean {
        return this.authService.confirmLogin(this.emailInput, this.passwordInput);
    }

    login(): void {
        if (this.authenticate()) {
            this._router.navigate(['latest']);
            return;
        } else {
            if (!this.emailInput) {
                this.emailError = 'blank';
            }
            if (!this.passwordInput) {
                this.passwordError = 'blank';
            } else {
                this.emailError = true;
                this.passwordError = true;
            }
        }
    }
}
