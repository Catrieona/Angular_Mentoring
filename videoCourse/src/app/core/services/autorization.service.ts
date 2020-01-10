import { Injectable } from '@angular/core';
import { UserData } from '../models/user-data';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutorizationService {

  constructor(private httpClient: HttpClient){ }
  public userLogin: boolean;


  public loginUser(login, password) {
    return this.httpClient.post<{token: string}>('http://localhost:3004/auth/login', {login, password} );
  }
}