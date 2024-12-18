import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {EventsListComponent} from "./events-list/events-list.component";

export const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'events', component: EventsListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];
