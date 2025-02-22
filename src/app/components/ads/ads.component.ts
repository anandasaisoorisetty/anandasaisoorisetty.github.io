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
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (window.innerWidth <= 768) { // Mobile screens
      this.showPopup = true;
    }
  }

  closePopup() {
    this.showPopup = false;
  }
}
