import { Injectable } from '@angular/core';
import { UserData } from '../models/user-data';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutorizationService {

  constructor(private http: HttpClient){ }
  public userLogin: boolean;


  public LoginUser() {
    return this.http.get('assets/user.json');
  }
}