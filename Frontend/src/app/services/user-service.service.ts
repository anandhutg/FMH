import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
users:any[]=[];
constructor() { }
addUser(user:User){
    const userString = localStorage.getItem('Users')
    if(userString){ 
      try{
        this.users = JSON.parse(userString);
      }catch(e){
        console.log(e)
      }
    }
    this.users=[user, ...this.users];
    localStorage.setItem('Users',JSON.stringify(this.users));
  }
}
