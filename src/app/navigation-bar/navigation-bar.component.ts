import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { AlertyfyService } from '../services/alertify-service/alertyfy.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class NavigationBarComponent implements OnInit {
  loggedUserName!: string;
  constructor(private router: Router, private alertify: AlertyfyService) { }

  ngOnInit(): void {
  }

  loggedIn(){
   let loggedUserInfo = localStorage.getItem('token');
   if(loggedUserInfo)
   {
    this.loggedUserName = loggedUserInfo
    return true
   }
   return false;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['user-login']);
    this.alertify.success("You are logout!!");
  }

  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
}
