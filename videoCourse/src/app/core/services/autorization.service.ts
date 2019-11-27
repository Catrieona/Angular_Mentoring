import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorizationService {

  constructor() { }
 
  public LoginUser (email: string, pass: string) {
    let currentUser = {"userEmail": email, "userPass": pass};
    if (!localStorage.getItem('userLoginInfo')){
      localStorage.setItem('userLoginInfo', JSON.stringify([
        {"userEmail": "admin", "userPass": "123"}
      ]))
    }
    let usersList = JSON.parse(localStorage.getItem('userLoginInfo'));
    
    if (usersList.find( elem => elem.userEmail == currentUser.userEmail )) {
      console.log('Login OK')
    } else (
      console.log('Login Forbidden')
    )
  }


}
