import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {API_CONFIG} from "../../base-api-config";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private BASE_URL:string =API_CONFIG.BASE_URL

  constructor(private http: HttpClient) {}

  login(credentials: { shopCode:string,userName: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/v1/auth/login`, credentials).pipe(
      tap((response) => {
        // Store token and user info in localStorage
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      })
    );
  }

  superLogin(credentials: {userName: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/v1/auth/super/login`, credentials).pipe(
      tap((response) => {
        // Store token and user info in localStorage
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      })
    );
  }
}
