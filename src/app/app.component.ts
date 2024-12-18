import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

import {FooterComponent} from "./footer/footer.component";
import {CommonModule} from "@angular/common";
// @ts-ignore
import * as AOS  from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'events-app-new';

  links = [
    { label: 'Home', path: '/' },
    { label: 'Events', path: '/events' },
    { label: 'About', path: '/about' },
    { label: 'Login', path: '/login' },
    { label: 'Signup', path: '/signup' }
  ];

  isLoading: boolean=true;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    // @ts-ignore
    AOS.init(); // Initialize AOS
  }
}
