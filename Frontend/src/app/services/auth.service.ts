import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user:any){
  let userArray =[];
  const userString= localStorage.getItem('Users');
  if (userString){
    userArray=JSON.parse(userString);
  }
  return userArray.find((p:User) =>p.userName===user.userName && p.password===user.password);
}
}
