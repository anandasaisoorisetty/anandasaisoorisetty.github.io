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
    this.showPopup = false;  // Ensure it resets every time
    setTimeout(() => {
      this.showPopup = true; // ✅ Always show on refresh after 1 second
    }, 1000);
  }

  closePopup() {
    this.showPopup = false;  // ✅ Closes but will reappear on refresh
  }
}
