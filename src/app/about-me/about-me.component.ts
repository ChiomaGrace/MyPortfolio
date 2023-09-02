import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  host: {'class': 'about-me-container'}

})
export class AboutMeComponent implements OnInit {
  @Input() clickedHomeNavItem : any; //This is how the parent notifies the child of the data it is passing

  constructor(  private router: Router ) {
    console.log("This is the about me console log showing which route is currently being visited:", this.router.url);
  }
  
  ngOnInit() {
    console.log("The boolean value for the showNavItem:", this.clickedHomeNavItem);
    console.log("The function emitting from the parent:", this.clickedHomeNavItem);

  }

  slideContent: any[] = [
    {
      "content": "Hello! My name is Chioma, and I enjoy flipping ideas to a visual on the world wide web. Technically my interest in web development started back in 2004 when I edited my Myspace Top 8 to a Top 16. The process of me not wanting to exclude any of my friends ended up teaching me a lot about HTML and CSS!"
    },
    {
      "content": "After the mySpace/AOL Instant Messenger days, I attended Stanford University to explore a variety of interests. I graduated with a Film & Media degree while also fulfilling my pre-med requirements. Shout out to Grey's Anatomy for the inspo! Outside the classroom I was a part of the women's soccer team that won the first National Championship in school history. Go Card!"
    },
    {
      "content": "Post graduation I got to live my dream playing professional football(soccer) in four different countries for about a decade. Hover over my profile photo to see which clubs! I also had the opportunity to represent two of my three nationalites (English and American) at the international level. Ultimately I chose to represent England where I scored my first goal in my first cap!"
    },
    {
      "content": "I am also someone who constantly loves to learn. During the pandemic I circled back to my tech curiosity, enrolled in a coding bootcamp, and became a certified full stack software developer. It has truly been one of my favorite decisions I've ever made! Currently, I am growing everyday as a developer at Simpleview."
    }
  ]

  selectedIndex: number = 0;

  showCurrentSlide(index: number): void {
    this.selectedIndex = index;
    console.log("This is the slide number:", this.selectedIndex);
  }
  
  goToNext(): void {
    console.log("This is the goToNext function")
    if(this.selectedIndex === this.slideContent.length - 1) {
      console.log("This console log means we have reached the last slide.");
      console.log("This is the last slide index:", this.selectedIndex);
    } else {
      this.selectedIndex++;
      console.log("Slide index number:", this.selectedIndex)
    }
  }

  goToPrev(): void {
    console.log("This is the goToPrev function");
    console.log("This is the current position:", this.slideContent.length);
    if(this.selectedIndex === 0) {
      console.log("This is at the first content slide.")
      this.selectedIndex === this.slideContent.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

}

