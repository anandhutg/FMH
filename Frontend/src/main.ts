import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import {Routes, RouterModule} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddPropertyComponent } from './app/property/add-property/add-property.component';
import { importProvidersFrom } from '@angular/core';
import { PropertyListComponent } from './app/property/property-list/property-list.component';
import { appRoutes } from './app/app.routes';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



bootstrapApplication(App, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(HttpClientModule)
  ]
}).catch(err => console.error(err));