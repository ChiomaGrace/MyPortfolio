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
  errors = {}
 

  constructor(  private router: Router, private _httpService: SharedService,  ) {
    console.log("This is the about me console log showing which route is currently being visited:", this.router.url);
  }
  
  ngOnInit() {
    console.log("The boolean value for the showNavItem:", this.clickedHomeNavItem);
    console.log("The function emitting from the parent:", this.clickedHomeNavItem);

    
  }

  // sendingEmailForm(){
  //   console.log("This is the send email form in the component", this.sentEmail)
  //     let sendingEmailObservable = this._httpClient.sendingEmailService(this.sentEmail)
  //     sendingEmailObservable.subscribe(sentEmailData => {
  //       console.log(sentEmailData)
  //       this.sentEmail = sentEmailData
  //   })
  // }

  // sendEmailButton(){
  //       console.log("This console log means the send email button was clicked in the contact component");
        

  // }
  // emailForm(contactForm){
    submit(contactForm : any){
    console.log("This is the email form component.");
    console.log("This is the value of the date submitted via the form:", contactForm.form.value);
    let sendingEmailObservable = this._httpService.sendingEmailService(this.submittedEmail)
    sendingEmailObservable.subscribe(emailData => {
      this.submittedEmail = emailData
      console.log("The data submitted on the email form:", this.submittedEmail)
      
      // if(emailData["errors"]){
      //   this.errors = emailData["errors"]
      // }
      // else{
      //   console.log("This means the email form submitted succesfully, and it is currently showing the component route:", this.router.url);
      // }
    })
  }
  




}
