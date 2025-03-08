import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker'; 

const routes: Routes = [
  { path: '', component: HomeComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })]
}).catch(err => console.error(err));
