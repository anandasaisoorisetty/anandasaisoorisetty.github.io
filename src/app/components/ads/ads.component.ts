import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ads',
  standalone: true,
  imports: [CommonModule], // ✅ Import CommonModule to use *ngIf
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  showPopup = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (window.innerWidth <= 768) {  // ✅ Mobile screens (adjust width if needed)
      this.showPopup = true; // ✅ Always show the popup on refresh
    }
  }

  closePopup() {
    this.showPopup = false; // ✅ Close the popup but it will appear again on refresh
  }
}
