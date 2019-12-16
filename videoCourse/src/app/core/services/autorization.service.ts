import { Injectable } from '@angular/core';
import { UserData } from '../models/user-data';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutorizationService {

  constructor(private httpClient: HttpClient){ }
  public userLogin: boolean;

  public LoginUser() {
    return this.httpClient.get('http://localhost:3004/auth');
  }
}