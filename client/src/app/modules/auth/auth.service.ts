import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials) {
    return this.http.post('http://localhost:3500/auth/login', credentials)
  }
  

  signup(credentials) {
    return this.http.post('http://localhost:3500/auth/signup', credentials)
  }
}
