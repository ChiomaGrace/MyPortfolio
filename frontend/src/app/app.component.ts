import { Component, isDevMode, HostListener } from '@angular/core';
import {Router} from '@angular/router';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(  private router: Router ) {
    // console.log("This is the app component route:", this.router.url);
  }  

  ngOnInit() {
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }
  }

  goToPart(location: string) {
    // console.log("Go to part function was triggered.");
    window.location.hash = location;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}



