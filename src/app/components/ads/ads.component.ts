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
    this.showPopup = true;
    console.log('AdsComponent ngOnInit triggered, showPopup:', this.showPopup);
  }

  closePopup() {
    this.showPopup = false;
    console.log('Popup closed');
  }
}