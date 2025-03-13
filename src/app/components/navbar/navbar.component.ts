import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeSection: string = '';
  isNavOpen: boolean = false; // Toggle state

  ngOnInit() {
    this.observeSections();
  }

  observeSections() {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // When 60% of the section is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id; // Set the active section
        }
      });
    }, options);

    sections.forEach(section => observer.observe(section));
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen; // Toggle the nav menu
  }

  closeNav() {
    this.isNavOpen = false; // Close the nav menu
  }
}
