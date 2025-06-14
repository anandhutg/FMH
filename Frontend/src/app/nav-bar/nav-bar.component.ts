import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  imports:[NgIf,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loggedinUser : string | null = null;
  constructor(private alertify:AlertifyService) { }

  ngOnInit() {
  }

  loggedIn(){
    this.loggedinUser= localStorage.getItem('token');
    return this.loggedinUser;
  }
  
  onLogout(){
    localStorage.removeItem('token');
    this.alertify.success('Logout Successfull!!')
  }
}
