import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor(private _httpClient: HttpClient) { 
  }

    emailService(submittedEmail : any){
      console.log("This is the email service function, and the data that was just received from the contact component:", submittedEmail)
      console.log("This is the name that was submitted:", submittedEmail.name)
      return this._httpClient.post('/routes/sendEmail', submittedEmail).subscribe();
  }

  testService() {
    console.log("This is a console log from the test service function in the shared service file");
    return this._httpClient.get('/routes/test');

  }
  


  // Step 3 of FormData configure the service.ts and its needed functions so any .ts file can call on the service to provide it data

}
