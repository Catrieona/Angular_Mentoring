import { Injectable } from '@angular/core';
import { UserData } from "../models/user-data"

@Injectable({
  providedIn: 'root'
})
export class AutorizationService {

  constructor() { }

  public userLogin: boolean;

  public dataCourse: UserData [] = [
    {
      userEmail: "admin@mail.ru",
      password: "123"
    },
    {
      userEmail: "user1@mail.ru",
      password: "123"
    },
    {
      userEmail: "user2@mail.ru",
      password: "123"
    },
  ]
 
  public LoginUser (email: string, password: string) {
    if (this.dataCourse.find( elem => elem.userEmail == email && elem.password == password )) {
      this.userLogin = true;
    } else 
      this.userLogin = false;
  }
}
    