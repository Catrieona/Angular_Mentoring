import { Injectable } from '@angular/core';
import { UserData } from '../models/user-data';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutorizationService {

  constructor(private httpClient: HttpClient){ }
  public userLogin: boolean;

<<<<<<< HEAD
  public LoginUser() {
    return this.httpClient.get('http://localhost:3004/auth');
=======

  public LoginUser(login, password) {
    return this.httpClient.post('http://localhost:3004/auth/login', {login, password} );

>>>>>>> c869154e504ac962201735389e6a7aa3a02a779f
  }
}