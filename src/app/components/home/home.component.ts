import { Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('homeContent') homeContent!: ElementRef;
  @ViewChild('buttons') buttons!: ElementRef;
  @ViewChild('profileImage') profileImage!: ElementRef;

  lastScrollY: number = 0;

  ngAfterViewInit() {
    this.checkScroll(); // Initial check on page load

    window.addEventListener('scroll', () => this.checkScroll());
  }

  checkScroll() {
    const currentScroll = window.scrollY;
    const isScrollingDown = currentScroll > this.lastScrollY;
    this.lastScrollY = currentScroll;

    this.toggleAnimation(this.homeContent.nativeElement, isScrollingDown);
    this.toggleAnimation(this.buttons.nativeElement, isScrollingDown);
    this.toggleAnimation(this.profileImage.nativeElement, isScrollingDown);

    // Other sections (Experience, Services, Contact, etc.)
    const elements = document.querySelectorAll('.service-card, .experience-card, .about-content, .contact-buttons, .social-links');

    elements.forEach((el) => {
      this.toggleAnimation(el as HTMLElement, isScrollingDown);
    });
  }

  toggleAnimation(element: HTMLElement, isScrollingDown: boolean) {
    if (isScrollingDown) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  }
}
