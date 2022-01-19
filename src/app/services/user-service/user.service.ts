import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

saveUser(user: any)
{
  let currentUsers = [];
  let  existingUsers = [];
  if(localStorage.getItem('Users'))
  {
    existingUsers = JSON.parse(localStorage.getItem('Users')!);
    currentUsers.push(user);
    currentUsers.push(existingUsers);
  }
  else
  {
    currentUsers = [user];
  }
  localStorage.setItem('Users', JSON.stringify(currentUsers));
}

}
