import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import { EventsService } from "../../service/events.service";
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-event-details-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './event-details-component.component.html',
  styleUrls: ['./event-details-component.component.css']
})
export class EventDetailsComponentComponent implements OnInit {
  eventDetails: any;
  eventId: string | null = null;
  isLoading: boolean = false;
  isTicketFormVisible = false;

  ticketForm: FormGroup;

  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder  // Inject FormBuilder to create the form
  ) {
    // Initialize ticket form with default values and validators
    this.ticketForm = this.fb.group({
      ticketQuantity: [1, [Validators.required, Validators.min(1)]],  // Validate ticket quantity
      eventId: ['', Validators.required]  // Event ID should be required
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.eventId = params.get('eventId');
      console.log('Route Parameter eventId:', this.eventId); // Debugging log
      if (this.eventId) {
        this.fetchEvent();
      }
    });
  }

  fetchEvent(): void {
    this.isLoading = true;
    if (this.eventId) {
      this.eventsService.getSingleEvent(this.eventId).subscribe({
        next: (data) => {
          console.log('Fetched Event:', data); // Debugging log
          this.eventDetails = data;
          this.isLoading = false;
          // Set the eventId in the form once the event data is fetched
          this.ticketForm.patchValue({
            eventId: this.eventId
          });
        },
        error: (error) => {
          console.error('Error fetching event:', error);
          this.isLoading = false;
        }
      });
    }
  }

  toggleTicketForm(): void {
    this.isTicketFormVisible = !this.isTicketFormVisible;
  }

  // Book ticket using the form data
  bookTicket(): void {
    if (this.ticketForm.invalid) {
      return; // Prevent submission if form is invalid
    }

    const ticketDetails = this.ticketForm.value;

    this.eventsService.bookTicket(ticketDetails).subscribe({
      next: (response) => {
        console.log('Ticket booked successfully:', response);
        alert('Ticket booked successfully!');

        this.isTicketFormVisible = false; // Hide the form after successful booking

        this.router.navigate(['my-tickets'])
      },
      error: (error) => {
        console.error('Error booking ticket:', error);
      },
    });
  }

  get totalTicketAmount(): number {
    return this.eventDetails ? this.eventDetails.eventCost * this.ticketForm.value.ticketQuantity : 0;
  }
}
