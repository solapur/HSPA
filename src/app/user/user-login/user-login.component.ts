import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertyfyService } from 'src/app/services/alertify-service/alertyfy.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

  constructor(private authenticationService: AuthService,
              private msg:AlertyfyService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(loginForm :NgForm)
  {
   console.log(loginForm.value);
   if(this.authenticationService.userAuthentication(loginForm))
   {
    localStorage.setItem('token', loginForm.value.userName);
    this.router.navigate(['/']);
    this.msg.success("User logged in successfully ");
   }
   else{
    this.msg.error("User not Authenticate");
   }
 }
}
