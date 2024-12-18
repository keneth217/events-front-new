import { Component } from '@angular/core';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
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
}
