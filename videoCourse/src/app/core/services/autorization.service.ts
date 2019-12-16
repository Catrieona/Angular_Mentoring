import { Injectable } from '@angular/core';
import { UserData } from '../models/user-data';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutorizationService {

  constructor(private httpClient: HttpClient){ }
  public userLogin: boolean;


  public LoginUser(login, password) {
    return this.httpClient.post('http://localhost:3004/auth/login', {login, password} );
  }

  // public getUser (token) {
  //   return this.httpClient.post('http://localhost:3004/auth/userinfo', {token} );
  // }
}