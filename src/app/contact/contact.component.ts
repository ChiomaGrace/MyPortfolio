import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
// import { HttpClient } from '@angular/common/http';
import {SharedService} from 'src/app/shared.service' //added this
import {formatDate } from '@angular/common';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  @Input() clickedHomeNavItem : any; //This is how the parent notifies the child of the data it is passing

  submittedEmail = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    subject: "",
    email: ""
  }

  sendingEmailObservable = {};
  
  hasEmailFormErrors = false; //Default state of the form errors

  emailFormErrors : any; //Where the errors willl be stored

  today= new Date();

  currentTime = "";
 

  constructor(  private router: Router, private _httpService: SharedService,  ) {
    // console.log("This is the about me console log showing which route is currently being visited:", this.router.url);
  }
  
  ngOnInit() {
    // console.log("The boolean value for the showNavItem:", this.clickedHomeNavItem);
    // console.log("The function emitting from the parent:", this.clickedHomeNavItem);
    this.currentTime = formatDate(this.today, 'hh:mm a', 'en-US', 'GMT-07');
  }

  submittedEmailForm(){
    // console.log("This console log is from the submittedEmailForm function in the contact component.");
    // console.log("This is the value of the date submitted via the form before the service:", this.submittedEmail)
    // this.sendingEmailObservable = this._httpService.emailService(this.submittedEmail);//this works but doesn't get validation errors from mongoose
    this.sendingEmailObservable = this._httpService.emailService(this.submittedEmail).subscribe(emailData => {
      // console.log("This is the from data submitted via the form after being subscribed to:", emailData)
      //@ts-ignore .ts is not happy with 'emailData.errors', so I used an ignore here
      if(emailData.errors) { //The name 'errors' is the label of the mongoose object containing all the model validation errors
        // console.log("This console log means there are errors when the email form atempted to submit, so it was unsucessful.")
        this.hasEmailFormErrors = true;
        this.emailFormErrors = emailData;
        // console.log("Here are the form errors:", this.emailFormErrors.errors);
        // console.log("Here is a specific error:", this.emailFormErrors.errors.firstName.message) 
      }
      else {
        // console.log("This console log means the email form submitted succesfully.");
        this.hasEmailFormErrors=false;
      }
    })
  }
  
}
