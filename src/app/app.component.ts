import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdsComponent } from './components/ads/ads.component';
import { HomeComponent } from './components/home/home.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, AdsComponent, HomeComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anandasaisoorisetty';
}
