import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../service/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = 'Invalid credentials';
  userName = 'in28minutes';
  password = '';
  invalidLogin = false;

  constructor(private router: Router, public authService: AuthenticationService) { }

  ngOnInit(): void {}

  public handleLogin() {
	if (this.authService.authenticate(this.userName, this.password)) {
	  this.router.navigate(["welcome", this.userName]);
	  this.invalidLogin = false;
	}else {
	  this.invalidLogin = true;
	}
  }
}
