import { Component } from '@angular/core';
import {TokenService} from "../../service/token.service";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgIconsModule} from "@ng-icons/core";
// Interface for defining links
interface Link {
  label: string;
  icon: string;
  route?: string;
  children?: Link[];
  isOpen?: boolean;  // Dropdown open/close state
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,NgIconsModule,RouterLink,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isSidebarCollapsed = false;
  isUserDropdownOpen = false;
  shopDetailsData: any;
  userDetailsData: any;
  userRole: string = ''; // Initialize with an empty string to avoid issues
  links: Link[] = []; // Holds the active links based on role

  constructor(private tokenService: TokenService,private router:Router) { }

  // Fetch the user role after initialization
  ngOnInit(): void {
    this.userRole = this.tokenService.getUserRole;
    this.links = this.getUserLinks(); // Set links based on the role
    this.shopDetails();
    this.userDetails();
  }

  logout(): void {
    this.tokenService.removeToken();
    this.router.navigateByUrl('/super');

  }
  shopDetails(): void{
    this.shopDetailsData= this.tokenService.getShopDetails
  }

  userDetails(): void{
    this.userDetailsData=this.tokenService.getUser
  }

  // Define the links for different roles
  private getUserLinks(): Link[] {
    switch (this.userRole) {
      case 'ATTENDEE':
        return this.UserLinks;
      case 'ADMIN':
        return this.adminLinks;
      default:
        return [];
    }
  }

  //  User
  UserLinks: Link[] = [
    { label: 'Analytics', icon: 'heroSquares2x2', route: '/admin' },
    { label: 'events', icon: 'heroPlusCircle', route: '/dash/events' },
    { label: 'my-tickets', icon: 'heroPlusCircle', route: '/dash/my-tickets' },
    {
      label: 'Reports',
      icon: 'heroDocument',
      children: [
        { label: 'Shops Report', icon: 'heroSquares2x2', route: '/shops' },
        { label: 'Payments Report', icon: 'heroSquares2x2', route: '/reports/payments' },
        { label: 'Status Report', icon: 'heroSquares2x2', route: '/reports/status' },
      ],
    },
    { label: 'Settings', icon: 'heroCog6Tooth', route: '/settings' },

  ];


  adminLinks: Link[] = [
    { label: 'Analytics', icon: 'heroPlusCircle', route: '/dash' },
    { label: 'events', icon: 'heroPlusCircle', route: '/dash/events' },
    { label: 'Add event', icon: 'heroPercentBadge', route: '/dash/add' },
    { label: 'category', icon: 'heroPercentBadge', route: '/dash/category' },
    { label: 'attendess', icon: 'heroPercentBadge', route: '/dash/sale' },
    { label: 'Expense', icon: 'heroPercentBadge', route: '/dash/expense' },
    {
      label: 'Reports',
      icon: 'heroDocument',
      children: [
        { label: 'Sales', icon: 'heroSquares2x2', route: '/reports/daily' },
        { label: 'Monthly Report', icon: 'heroSquares2x2', route: '/reports/monthly' },
      ],
    },
    { label: 'Settings', icon: 'heroCog6Tooth', route: '/settings' },
  ];



  // Sidebar toggle functionality
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  // User dropdown toggle functionality
  toggleUserDropdown() {
    this.isUserDropdownOpen = !this.isUserDropdownOpen;
  }

  // Handle link clicks to toggle dropdowns with children
  handleLinkClick(link: Link) {
    if (link.children) {
      link.isOpen = !link.isOpen;
    }
  }
}
