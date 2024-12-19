import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { debounceTime, switchMap } from "rxjs";
import { EventsService } from "../../service/events.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent {
  dropdowns = [
    { title: 'Price', isOpen: false, options: ['Option 1', 'Option 2', 'Option 3'] },
    { title: 'Activity', isOpen: false, options: ['Option 1', 'Option 2', 'Option 3'] },
    { title: 'Purpose', isOpen: false, options: ['Option 1', 'Option 2', 'Option 3'] },
    { title: 'Genre', isOpen: false, options: ['Option 1', 'Option 2', 'Option 3'] },
    { title: 'Artist', isOpen: false, options: ['Option 1', 'Option 2', 'Option 3'] },
    { title: 'Upcoming Events', isOpen: false, options: ['Option 1', 'Option 2', 'Option 3'] }
  ];

  isLoading: boolean = false;
  isRefreshing: boolean = false;
  isSearching: boolean = false;

  searchTerm = new FormControl();
  results: any[] = [];
  events: any[] = [];

  constructor(
    private productService: EventsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchEvents();

// Listen for search term changes with debounce
    this.searchTerm.valueChanges
      .pipe(
        debounceTime(300), // Wait 300ms after typing stops
        switchMap((term: string) => {
          if (term) {
            this.isLoading = true;
            return this.productService.searchItem(term); // Fetch filtered products if search term is provided
          } else {
            this.isLoading = true;
            return this.productService.getEvents(); // Fetch all products if no search term
          }
        })
      )
      .subscribe((data) => {
        if (this.searchTerm.value) {
          this.results = data; // Display search results
          this.events = [];  // Clear full product list when displaying search results
        } else {
          this.events = data; // Display full product list when no search term
          this.results = [];    // Clear search results
        }
        this.isLoading = false;
      });
  }


  fetchEvents(): void {
    this.isLoading = true;

    this.productService.getEvents().subscribe({
      next: (data) => {
        this.events = data;
        console.log(data)
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        this.isLoading = false;
      }
    });
  }

  goToEventDetails(id: string): void {
    this.router.navigate(['/event-details', id]);
  }

  toggleDropdown(index: number): void {
    this.dropdowns[index].isOpen = !this.dropdowns[index].isOpen;
  }
}
