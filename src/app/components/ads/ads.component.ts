import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent {
  isVisible = true; // Always visible on refresh

  closeAds() {
    this.isVisible = false; // Hide ads until next refresh
  }
}
