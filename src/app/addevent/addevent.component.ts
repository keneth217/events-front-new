import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

import {EventsService} from "../../service/events.service";
import {CategoryService} from "../../service/category.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-addevent',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './addevent.component.html',
  styleUrl: './addevent.component.css'
})
export class AddeventComponent {
  eventForm!: FormGroup;
  categories: any=[];
  selectedImage!: File;

  constructor(private fb: FormBuilder, private eventService: EventsService,private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadCategories(); // Load categories dynamically if needed
  }

  initializeForm(): void {
    this.eventForm = this.fb.group({
      eventName: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      eventCost: ['', [Validators.required, Validators.min(0)]],
      creatorName: ['', Validators.required],
      soldOut: ['', [Validators.required, Validators.min(0)]],
      eventImage: [null, Validators.required],
    });
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      {next:(response) => {
        console.log(response)
      alert('categories fetch success!');
      this.eventForm.reset();
    },
    error: (error) => {
      console.error('Error fetching  categories:', error);
      alert('Failed to upload event.');
    },
  });
  }



  onImageSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedImage = input.files[0];
      this.eventForm.patchValue({ eventImage: this.selectedImage });
    }
  }

  submitEvent(): void {
    if (this.eventForm.invalid) {
      return;
    }

    const formData = new FormData();
    Object.keys(this.eventForm.controls).forEach((key) => {
      if (key === 'eventImage') {
        formData.append(key, this.selectedImage);
      } else {
        formData.append(key, this.eventForm.get(key)?.value);
      }
    });

    this.eventService.addEvent(formData).subscribe({
      next: (response) => {
        alert('Event successfully uploaded!');
        this.eventForm.reset();
      },
      error: (error) => {
        console.error('Error uploading event:', error);
        alert('Failed to upload event.');
      },
    });
  }

  closeEventForm(): void {
    this.eventForm.reset();
  }
}
