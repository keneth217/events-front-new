import { Component, OnInit } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details-component',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './event-details-component.component.html',
  styleUrls: ['./event-details-component.component.css'] // Fixed typo in styleUrl
})
export class EventDetailsComponentComponent implements OnInit {
  title: string | null = '';
  eventDetails: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the title parameter from the route
    this.route.paramMap.subscribe((params) => {
      this.title = params.get('title');
      this.loadEventDetails();
    });
  }

  selectedEvent = [
    {
      title: 'Event Title 1',
      description: 'Brief details about the event go here.',
      price: '1000',
      image: '/assets/3.jpg',
    },
    {
      title: 'Event Title 2',
      description: 'Brief details about the event go here.',
      price: '1000',
      image: '/assets/2.jpg',
    },
    {
      title: 'Event Title 3',
      description: 'Brief details about the event go here.',
      price: '1000',
      image: '/assets/events.jpg',
    },
    {
      title: 'Event Title 4',
      description: 'Brief details about the event go here.',
      price: '1000',
      image: '/assets/events.avif',
    },
    {
      title: 'Event Title 5',
      description: 'Brief details about the event go here.',
      price: '1000',
      image: '/assets/4.jpg',
    },
  ];

  loadEventDetails(): void {
    // Find the event by title
    this.eventDetails = this.selectedEvent.find(
      (event) => event.title === this.title
    );
  }
}
