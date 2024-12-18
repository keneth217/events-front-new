import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Array of event objects
  events = [
    {
      title: 'Event Title 1',
      description: 'Brief details about the event go here.',
      image: '/assets/3.jpg'
    },
    {
      title: 'Event Title 2',
      description: 'Brief details about the event go here.',
      image: '/assets/2.jpg'
    },
    {
      title: 'Event Title 3',
      description: 'Brief details about the event go here.',
      image: '/assets/events.jpg'
    },
    {
      title: 'Event Title 4',
      description: 'Brief details about the event go here.',
      image: '/assets/events.avif'
    },
    {
      title: 'Event Title 5',
      description: 'Brief details about the event go here.',
      image: '/assets/4.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
