import { Routes } from '@angular/router';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

export const routes: Routes = [];
export const appRoutes: Routes = [
  {path: '', component: PropertyListComponent },
  {path: 'add-property', component:AddPropertyComponent },
  {path: 'rent-property', component:PropertyListComponent },
  {path: 'property-detail/:Id', component: PropertyDetailComponent },
  {path: 'user/login', component:UserLoginComponent},
  {path: 'user/register', component:UserRegisterComponent},
  {path: '**', component: PropertyListComponent },
];