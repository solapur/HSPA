import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

saveUser(user: any)
{
  let currentUsers;
  if(localStorage.getItem('Users'))
  {
   let existingUsers = JSON.parse(localStorage.getItem('Users')!);
    currentUsers = [user,  ...existingUsers];
  }
  else
  {
    currentUsers = [user];
  }
  localStorage.setItem('Users', JSON.stringify(currentUsers));

}

}
