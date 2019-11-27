import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorizationService {

  constructor() { }
 
  public LoginUser (email: string, pass: string) {
    console.log(email, pass);
  }

}
