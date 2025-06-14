import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Housing } from './services/housing';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import {Routes, RouterModule} from '@angular/router';
import { appRoutes } from './app.routes';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserServiceService } from './services/user-service.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    HttpClientModule,
    RouterOutlet,
    PropertyDetailComponent,
    FormsModule,
    UserLoginComponent,
    UserRegisterComponent,
    ReactiveFormsModule,
  ],
  providers:[Housing,
    UserServiceService,
    AlertifyService,
    AuthService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-first-app';
}
