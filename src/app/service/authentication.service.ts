import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(userName:string, password:string) {
    if (userName === "in28minutes" && password === "dummy") {
	  sessionStorage.setItem('authenticatedUser', userName);
     return true;
    }
    return false;
  }

  isUserLoggedIn():boolean {
	let user = sessionStorage.getItem('authenticatedUser');
	return !(user === null);
  }

  logout() {
	sessionStorage.clear();
  }
}
