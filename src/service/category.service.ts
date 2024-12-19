import { Injectable } from '@angular/core';
import {API_CONFIG} from "../../base-api-config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TokenService} from "./token.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private BASE_URL:string =API_CONFIG.BASE_URL



  constructor(private http: HttpClient, private tokenService: TokenService) { }

  // Method to add a product
  addCategory(productData: FormData): Observable<any> {
    return this.http.post<any>(
      `${this.BASE_URL}/admin/products/add`,
      productData,
      { headers: this.createAuthorizationHeaders() }
    );
  }

  // Fetch products from the API
  getCategories(): Observable<any[]> {


    return this.http.get<any[]>(
      `${this.BASE_URL}/admin/category`,
      { headers: this.createAuthorizationHeaders() }
    );
  }

  // Create authorization headers
  private createAuthorizationHeaders(): HttpHeaders {
    const token = this.tokenService.getToken;
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
}
