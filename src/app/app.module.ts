import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroSitemapComponent } from './intro-sitemap/intro-sitemap.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';


// import {HttpService} from './http.service'; //added this manually because only components get added automatically. This is part of Angular that serves as the model. It will then pass the data to the controller in the component.ts
import{FormsModule, ReactiveFormsModule} from '@angular/forms'; //added this manually in order to use forms
import {HttpClientModule} from '@angular/common/http' //added this manually because it provides functionality to perform HTTP requests and manipulate said requests and their responses
import { HttpClient } from '@angular/common/http';
// import {HttpService} from './http.service' //added this
import {SharedService} from 'src/app/shared.service' //added this



@NgModule({
  declarations: [
    AppComponent,
    IntroSitemapComponent,
    AboutMeComponent,
    ExperienceComponent,
    WorkComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //added this here to initialize the import but also will need to do a dependency injection in the http service for full functionality
    FormsModule, //added this here to initialize the import and have access to it(ngModel) in the app
    ReactiveFormsModule
 
  ],
  providers: [SharedService], //added this in order to have relationship with components
  bootstrap: [AppComponent]
})
export class AppModule { }

// Step 1 of FormData - import HTTPClientModule and FormsModule
