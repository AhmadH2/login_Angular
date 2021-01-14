import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // users: User[] = [new User('Ahmad', '123')];

  user: User = new User('Ahmad', '123');

  constructor() { }

  login(user: User) {

    if (JSON.stringify(this.user) == JSON.stringify(user)) {
      localStorage.setItem('loggedin', 'true');
      console.log('its equals');
    }
    else {
      localStorage.setItem('loggedin', 'false');
      console.log('its NOT equals');
    }
  }

  logout() {
    localStorage.setItem('loggedin', 'false');
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('loggedin') == 'true') {
      return true;
    }
    return false;
  }
}
