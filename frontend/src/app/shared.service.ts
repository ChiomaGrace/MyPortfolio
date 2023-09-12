import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  constructor(private _httpClient: HttpClient) { }

  emailService(submittedEmail: any) {
    // console.log("This console log is from the shared.service.ts. It is from the emailService function which is making the request to the server (expresss)");
    // console.log("This console log is from the shared.service.ts. It is from the emailService function which is returning a response from the form in the contact component:, submittedEmail");
    // console.log("This is all the data that was submitted from the form:", submittedEmail);
    return this._httpClient.post(environment.backendURL + '/sendEmail', submittedEmail) //works but need to get mongoose errors
  }

  // testService() {
  //   console.log("This is a console log from the test service function in the shared service file");
  //   return this._httpClient.get('/');
  // }

  // Step 3 of FormData configure the service.ts and its needed functions so any .ts file can call on the service to provide it data
}
