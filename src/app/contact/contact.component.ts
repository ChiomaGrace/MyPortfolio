import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
// import { HttpClient } from '@angular/common/http';
import {SharedService} from 'src/app/shared.service' //added this

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() clickedHomeNavItem : any; //This is how the parent notifies the child of the data it is passing

  submittedEmail = {}
  sendingEmailObservable = {}
  errors = {}
 

  constructor(  private router: Router, private _httpService: SharedService,  ) {
    console.log("This is the about me console log showing which route is currently being visited:", this.router.url);
  }
  
  ngOnInit() {
    console.log("The boolean value for the showNavItem:", this.clickedHomeNavItem);
    console.log("The function emitting from the parent:", this.clickedHomeNavItem);
  }

  submittedEmailForm(){
    console.log("This console log is from the submittedEmailForm function in the contact component.");
    console.log("This is the value of the date submitted via the form:", this.submittedEmail);
    this.sendingEmailObservable = this._httpService.emailService(this.submittedEmail) 
  }

  // submittedEmailForm(){
  //   console.log("This console log is from the submittedEmailForm function in the contact component.");
  //   this._httpService.emailService(this.submittedEmail).subscribe((response) => {
  //     console.log("This is the data:", response);;
  //   }, (error) => {
  //     console.log("Error occured:", error);
  //   })
  
  }
  





