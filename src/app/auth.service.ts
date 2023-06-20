import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface credentials {
    email: string,
    password: string
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private email = environment.email;
    private password = environment.password;
    private emailToken = 'email';
    private passToken = 'pass';

    constructor() { }

    private authenticate(email: string, password: string): boolean {
        if (email === this.email && btoa(password) === this.password) {
            localStorage.setItem(this.emailToken, email);
            localStorage.setItem(this.passToken, this.password);
            return true;
        }
        return false;
    }

    private confirmToken(): boolean {
        if (!localStorage.getItem(this.emailToken)) return false;
        else if (!localStorage.getItem(this.passToken)) return false;
        else if (localStorage.getItem(this.emailToken) === this.email && localStorage.getItem(this.passToken) === this.password) return true;
        else return false;
    }

    confirmLogin(email: string, password: string): boolean {
        return this.authenticate(email, password);
    }

    confirmSession(): boolean {
        return this.confirmToken();
    }
}
