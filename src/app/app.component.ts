import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdsComponent } from './components/ads/ads.component';
import { HomeComponent } from './components/home/home.component';
import { RouterOutlet } from '@angular/router';
import { ServiceWorkerModule, SwRegistrationOptions } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    AdsComponent,
    HomeComponent,
    RouterOutlet,
    ServiceWorkerModule // Add ServiceWorkerModule here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: SwRegistrationOptions,
      useFactory: () => ({ enabled: true }) // Enable service worker always (adjust for prod if needed)
    }
  ]
})
export class AppComponent implements OnInit {
  title = 'anandasaisoorisetty';
  showMoveToTop: boolean = false;

  ngOnInit() {
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.showMoveToTop = window.scrollY > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
