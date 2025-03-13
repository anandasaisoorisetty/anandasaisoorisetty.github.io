import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdsComponent } from './components/ads/ads.component';
import { HomeComponent } from './components/home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, AdsComponent, HomeComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'anandasaisoorisetty';
  showMoveToTop: boolean = false; // Move to top visibility

  ngOnInit() {
    this.onScroll(); // Initialize scroll state
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.showMoveToTop = window.scrollY > 200; // Show button after scrolling 200px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  }
}
