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
  links = [
    { label: 'Home', path: '/' },
    { label: 'Events', path: '/events' },
    { label: 'Login', path: '/login' },
    { label: 'Signup', path: '/signup' }
  ];
}
