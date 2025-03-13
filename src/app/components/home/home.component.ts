import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
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

  ngAfterViewInit() {
    setTimeout(() => {
      this.homeContent.nativeElement.classList.add('animate-content');
    }, 200); // Text appears first

    setTimeout(() => {
      this.buttons.nativeElement.classList.add('animate-buttons');
    }, 600); // Buttons slide from the left

    setTimeout(() => {
      this.profileImage.nativeElement.classList.add('animate-image');
    }, 1000); // Profile image appears last

    // Animate other sections when in viewport
    const elements = document.querySelectorAll('.service-card, .experience-card, .about-content, .contact-buttons, .social-links');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show'); // Add animation class
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }
}
