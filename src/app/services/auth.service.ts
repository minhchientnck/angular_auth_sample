import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private commonService: CommonService
  ) { }

  login(username: string, password: string) {
    return this.http.post<any>(`http://localhost:5000/sign-in`, {
      username,
      password
    });
  }

  logout() {
    this.commonService.removeCookie('access_token')
  }

  isAuthenticated() {
    const accessToken = this.commonService.getCookie('access_token');
    if (accessToken) return true;
    return false;
  }
}
