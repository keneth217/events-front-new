import { Component } from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {Router} from "@angular/router";


@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule
  ],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent {
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
  // Define dropdowns with titles and options
  dropdowns = [
    {
      title: 'Price',
      isOpen: false,
      options: ['Option 1', 'Option 2', 'Option 3']
    },
    {
      title: 'Activity',
      isOpen: false,
      options: ['Option 1', 'Option 2', 'Option 3']
    },
    {
      title: 'Purpose',
      isOpen: false,
      options: ['Option 1', 'Option 2', 'Option 3']
    },
    {
      title: 'Genre',
      isOpen: false,
      options: ['Option 1', 'Option 2', 'Option 3']
    },
    {
      title: 'Artist',
      isOpen: false,
      options: ['Option 1', 'Option 2', 'Option 3']
    },
    {
      title: 'Upcoming Events',
      isOpen: false,
      options: ['Option 1', 'Option 2', 'Option 3']
    }
  ];

  constructor(private router: Router) {}

  goToEventDetails(title: string): void {
    this.router.navigate(['/event-details', title]);
  }

  // Toggle the dropdown
  toggleDropdown(index: number): void {
    this.dropdowns[index].isOpen = !this.dropdowns[index].isOpen;
  }
}
