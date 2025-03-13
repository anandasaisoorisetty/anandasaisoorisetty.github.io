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
  menuOpen: boolean = false;
  isHidden: boolean = false;
  lastScrollTop: number = 0;
  showScrollButton: boolean = false;
  isMobile: boolean = window.innerWidth <= 768;
  showToggleButton: boolean = this.isMobile; // Show toggle button only in mobile

  constructor() {
    this.checkScreenSize();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  restartPage() {
    window.location.reload();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.closeMenu();
    }
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    this.showToggleButton = this.isMobile;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const currentScroll = window.scrollY;

    // Hide navbar on scroll down, show on scroll up in mobile
    if (this.isMobile) {
      this.isHidden = currentScroll > this.lastScrollTop;
    }

    // Show move-to-top button when scrolled down
    this.showScrollButton = currentScroll > 500;

    this.lastScrollTop = currentScroll;
  }
}
