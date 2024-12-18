import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./footer/footer.component";
import {CommonModule} from "@angular/common";

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
    { label: 'Login', path: '/login' },
    { label: 'Signup', path: '/signup' }
  ];
}
