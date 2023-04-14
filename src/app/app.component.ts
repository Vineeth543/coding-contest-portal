import { Component, OnInit } from '@angular/core';
import { Contests } from './contest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Online Coding Contests';
  contests: Contests[] = [];
  images = [
    '../assets/1.png',
    '../assets/2.jpg',
    '../assets/3.jpg',
    '../assets/4.jpg',
    '../assets/5.png',
    '../assets/6.jpg',
    '../assets/7.png',
    '../assets/8.jpeg',
    '../assets/9.jpeg',
    '../assets/10.png',
    '../assets/11.jpg',
    '../assets/12.png',
  ];

  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  getRandomImage() {
    return this.images[Math.floor(Math.random() * this.images.length)];
  }

  secondsToHours(seconds: string): number {
    return Math.round(Number(seconds) / 3600);
  }

  formatDateAndTime(date: string): string {
    const d = date.split('T')[1];
    return date.replace(d, '').slice(0, -1) + ' ' + date.substring(11, 19);
  }

  url = 'https://kontests.net/api/v1/all';
  getData() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => (this.contests = data));
  }
}
