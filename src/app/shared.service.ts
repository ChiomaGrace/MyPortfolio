import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor(private _httpClient: HttpClient) { }

    sendingEmailService(submittedEmail : any){
    console.log("This is the send email service function", submittedEmail)
    return this._httpClient.post('/sendEmail', submittedEmail)
  }


  // Step 3 of FormData configure the service.ts and its needed functions so any .ts file can call on the service to provide it data

}
