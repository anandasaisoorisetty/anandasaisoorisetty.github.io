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

  @HostListener('window:scroll', [])
  onScroll() {
    const currentScroll = window.scrollY;

    // Hide navbar on scroll down, show on scroll up
    if (currentScroll > this.lastScrollTop) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
    this.lastScrollTop = currentScroll;

    // Show "Move to Top" button when scrolled down
    this.showScrollButton = currentScroll > 500;
  }
}
