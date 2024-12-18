import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
// Array of event objects
  events = [
    {
      title: '20k +',
      description: 'Active Users',
      image: '/assets/3.jpg'
    },
    {
      title: '200k +',
      description: 'Tickets sold',
      image: '/assets/2.jpg'
    },

    {
      title: '50k +',
      description: 'Successful Events',

    },
    {
      title: '100K +',
      description: 'Tickets Sold     ',
      image: '/assets/4.jpg'
    }
  ];

  abouts = [
    {
      title: 'Who are we?',
      description: 'RAL events is a game changer in how we engage with our audience, consume experiences, share content by connecting consumers, personalities and brands through LIVE experiences. We get to understand the brand goals, ideate, conceptualize and execute.',

    },
    {
      title: 'Our Offering',
      description: 'We redefine Events and Experiential marketing in Kenya by creating relevant and impactful brand experiences for brands and their target audience. Our Values: R.A.G.E - Reliability - Authenticity - Grit - Excellence',
      image: '/assets/2.jpg'
    },

    {
      title: 'Our Mission',
      description: 'From idea to conceptualization and implementation, we deliver solutions and brand experiences that give brands the freedom to speak louder, scale faster and grow stronger by integrating an omnichannel approach capacitated with Radio, TV, Social Media, Influencers, talent and technologies we amplify and extend reach and impact.',

    },

  ];
}
