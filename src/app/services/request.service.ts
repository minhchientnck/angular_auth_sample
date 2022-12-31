import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private commonService: CommonService,
  ) {
    this.headers = new HttpHeaders({
      'Authorization': this.commonService.getCookie('access_token'),
      'Content-Type': 'application/json'
    })
  }

  postData(url: string, payload: any) {
    return this.http.post<any>(url, payload, { headers: this.headers })
  }

  getData(url: string) {
    return this.http.get<any>(url, { headers: this.headers })
  }
}
