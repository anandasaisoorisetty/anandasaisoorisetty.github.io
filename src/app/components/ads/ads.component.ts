import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ads',
  standalone: true,
  imports: [CommonModule], // ✅ Import CommonModule to use *ngIf
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent {
  showPopup = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (window.innerWidth <= 768) {  // ✅ Mobile screens (adjust width if needed)
      const isClosed = localStorage.getItem('popupClosed');
      if (!isClosed) {
        this.showPopup = true;
      }
    }
  }

  closePopup() {
    this.showPopup = false;
    localStorage.setItem('popupClosed', 'true'); // ✅ Remember user action
  }
}
