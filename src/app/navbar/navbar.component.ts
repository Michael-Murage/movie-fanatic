import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    fullNav: boolean = false;
    showDropdown: boolean = false;

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

    currentHeader(): string {
        if (this.location.path() === '/latest') {
            return 'Latest Movies';
        } else if (this.location.path() === '/search') {
            return 'Search Movie';
        } else if (this.location.path() === '/suggest') {
            return 'Suggest/Recommend';
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

    ngOnInit(): void {
        this.currentHeader();
    }
}
