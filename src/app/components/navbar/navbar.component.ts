import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
restartPage() {
throw new Error('Method not implemented.');
}
  menuOpen: boolean = false; // Mobile menu toggle state
  showScrollButton: boolean = false; // Show move-to-top button when at bottom
  lastScrollY: number = 0; // Store last scroll position
  showToggleButton: boolean = false; // Show toggle button only in mobile screens
  isMobile: boolean = window.innerWidth <= 768; // Detect mobile screen
isHidden: any;

  constructor() {
    this.checkScreenSize();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.closeMenu(); // Close menu after clicking
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  reloadPage() {
    window.location.reload(); // Reload the page when clicking "Home"
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // Show move-to-top button when reaching the bottom
    this.showScrollButton = scrollY + clientHeight >= scrollHeight - 50;

    // Toggle menu button visibility based on scroll direction
    if (this.isMobile) {
      this.showToggleButton = scrollY < this.lastScrollY; // Show when scrolling up
    }

    this.lastScrollY = scrollY;
  }
}
