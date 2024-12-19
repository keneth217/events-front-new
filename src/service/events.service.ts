import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenService} from "./token.service";
import {API_CONFIG} from "../../base-api-config";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private BASE_URL:string =API_CONFIG.BASE_URL



  constructor(private http: HttpClient, private tokenService: TokenService) { }

  // Method to add a product
  addEvent(productData: FormData): Observable<any> {
    return this.http.post<any>(
      `${this.BASE_URL}/admin/event`,
      productData,
      { headers: this.createAuthorizationHeaders() }
    );
  }

  // Fetch products from the API
  getEvents(): Observable<any[]> {


    return this.http.get<any[]>(
      `${this.BASE_URL}/admin/event`,
      { headers: this.createAuthorizationHeaders() }
    );
  }

  // Fetch events from the API
  getSingleEvent(eventId: string): Observable<any[]> {

    const url = `${this.BASE_URL}/admin/event/${eventId}`;
    console.log(url)
    return this.http.get<any[]>(url,
      { headers: this.createAuthorizationHeaders() }
    );
  }

  // Create authorization headers
  private createAuthorizationHeaders(): HttpHeaders {
    const token = this.tokenService.getToken;
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  searchItem(term: string): Observable<any[]> {
    let params: any = {};
    if (term) params.q = term;

    return this.http.get<any[]>(`${this.BASE_URL}/admin/products/search`, {
      headers: this.createAuthorizationHeaders(),
      params,
    });
  }

  // Method to book a ticket
  bookTicket(ticketDetails: any): Observable<any> {
    return this.http.post<any>(
      `${this.BASE_URL}/admin/register`,  // Replace with your actual API endpoint for ticket booking
      ticketDetails,
      { headers: this.createAuthorizationHeaders() }
    );
  }
}
