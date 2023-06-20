import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    fullNav: boolean = false;
    showDropdown: boolean = false;
    private emailToken = 'email';
    private passwordToken = 'pass';
    private env = environment;

    constructor(
        private location: Location,
        private _router: Router
    ) {}

    isNotLogin() :boolean {
        if (this.location.path().includes('/auth/login')) {
            return false;
        } else {
            return true;
        }
    }

    switchNav(): void {
        this.fullNav = !this.fullNav;
    }

    navTrue(): void {
        if (!this.fullNav) this.fullNav = true;
    }

    navFalse(): void {
        if (this.fullNav) this.fullNav = false;
    }

    currentHeader(): string {
        if (this.location.path() === '/latest') {
            return 'Latest Movies';
        } else if (this.location.path() === '/search') {
            return 'Search Movie';
        } else if (this.location.path() === '/suggest') {
            return 'Suggest';
        } else {
            return '';
        }
    }

    currentLocation(): string {
        return this.location.path();
    }

    dropDown(): void {
        this.showDropdown = !this.showDropdown;
    }

    logout(): void {
        localStorage.removeItem(this.emailToken);
        localStorage.removeItem(this.passwordToken);
        this._router.navigateByUrl('/auth/login');
    }

    ngOnInit(): void {
        if (localStorage.getItem(this.emailToken) !== this.env.email && localStorage.getItem(this.passwordToken) !== this.env.password) {
            this._router.navigateByUrl('/auth/login');
        }else {
            this.currentHeader();
        }
    }
}
