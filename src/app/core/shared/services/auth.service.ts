import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient, private _Router: Router) { }


  logOut(): void {
    localStorage.removeItem(`Token`);
    this._Router.navigate(['/login'])
  }




  UserData: any;
  decodeToken() {
    if (localStorage.getItem('Token') != null) {
      let enCodedToken: any = localStorage.getItem('Token');
      let deCodedToken = jwtDecode(enCodedToken);
      this.UserData = deCodedToken;
    }
  }

  setRegister(userData: Object): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, userData);
  }
  setLogin(userData: Object): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', userData)
  }
}
