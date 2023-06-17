import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    fullNav: boolean = false;
    headerReading: string = '';

    constructor(
        private location: Location
    ) {}

    isNotLogin() :boolean {
        if (this.location.path() === '/auth/login') {
            return false;
        } else {
            return true;
        }
    }

    switchNav(): void {
        this.fullNav = !this.fullNav;
    }

    navTrue(): void {
        this.fullNav = true;
    }

    navFalse(): void {
        this.fullNav = false;
    }

    currentHeader(): void {
        if (this.location.path() === '/dashboard') {
            this.headerReading = 'Dashboard';
        } else if (this.location.path() === '/latest') {
            this.headerReading = 'Latest Movies';
        } else if (this.location.path() === '/search') {
            this.headerReading = 'Search Movie';
        } else if (this.location.path() === '/suggest') {
            this.headerReading = 'Suggest/Recommend';
        } else {
            this.headerReading = '';
        }
    }

    ngOnInit(): void {
        this.currentHeader();
    }
}
