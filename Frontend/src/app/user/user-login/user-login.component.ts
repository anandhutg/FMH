import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertifyService } from '../../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  imports:[FormsModule],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthService,
    private alertify : AlertifyService,
    private router : Router,
  ) { }

  ngOnInit() {
  }
  onLogin(loginForm:NgForm){
    console.log(loginForm.value);
    const token =this.authService.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token',token.userName);
      this.alertify.success('Login Succesfull!!');
      this.router.navigate(['/']);
    }
    else{
      this.alertify.error('User id or password is wrong!!')
    }
  }
}
