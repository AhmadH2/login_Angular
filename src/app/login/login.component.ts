import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User('', '');
  errMessage = '';
 
  // loginForm = this.fb.group({
  //   username: ['', Validators.required],
  //   password: ['', Validators.required]
  // });
  
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  loginForm:any;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

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
