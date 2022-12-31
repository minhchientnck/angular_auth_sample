import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  private escape(str: string) {
    return str.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1');
  }

  getCookie(name: string) {
    const match: any = document.cookie.match(RegExp('(?:^|;\\s*)' + this.escape(name) + '=([^;]*)'));
    return match ? match[1] : null
  }

  removeCookie(name: string){
    const now = new Date().toUTCString();
    document.cookie = `${name}=;expires=${now};`;
  }

}
