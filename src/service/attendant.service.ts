import { Injectable } from '@angular/core';
import {API_CONFIG} from "../../base-api-config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenService} from "./token.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AttendantService {

  private BASE_URL:string =API_CONFIG.BASE_URL



  constructor(private http: HttpClient, private tokenService: TokenService) { }

  // Method to add a product
  addEvent(productData: FormData): Observable<any> {
    return this.http.post<any>(
      `${this.BASE_URL}/admin/products/add`,
      productData,
      { headers: this.createAuthorizationHeaders() }
    );
  }

  // Fetch products from the API
  getMyTickets(): Observable<any[]> {


    return this.http.get<any[]>(
      `${this.BASE_URL}/attendant/tickets`,
      { headers: this.createAuthorizationHeaders() }
    );
  }



  // Fetch products from the API

  // Create authorization headers
  private createAuthorizationHeaders(): HttpHeaders {
    const token = this.tokenService.getToken;
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
}
