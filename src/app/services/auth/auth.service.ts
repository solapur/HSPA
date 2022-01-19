import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

 userAuthentication(user: any)
 {
   let users: any;
    if(localStorage.getItem('Users'))
    {
      users = JSON.parse(localStorage.getItem('Users')!);
    }
    return true;
 }
}
