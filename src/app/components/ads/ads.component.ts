import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  showPopup = false;

  ngOnInit() {
    // Always show popup on mobile screens
    this.checkScreenSize();
    // Debug: Log to confirm this runs
    console.log('AdsComponent ngOnInit triggered, showPopup:', this.showPopup);
  }

  checkScreenSize() {
    // Show popup if screen width is 768px or less (mobile/small screens)
    this.showPopup = window.innerWidth <= 768;
  }

  closePopup() {
    this.showPopup = false;
    // Debug: Confirm close works
    console.log('Popup closed');
  }
}