import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User('', '');
  errMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log('hi form login')
    this.authService.login(this.user);
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/profilepage'])
    }
    else {
      this.errMessage = 'User name or password in inCorrect'
    }
  }

  logout() {
    this.authService.logout();
  }
  onSubmit() {
    this.login();
  }
}
