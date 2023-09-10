import { Component, isDevMode } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPortfolio';
  showIntroSiteMapComponent: boolean = true;
  showWelcomeNavItem: boolean = true;
  welcomeNavStyling = 'active-nav-styling';
  showAboutMeComponent: boolean = false;
  aboutMeNavStyling = 'default-nav-styling';
  showExperienceComponent: boolean = false;
  experienceNavStyling = 'default-nav-styling';
  showWorkComponent: boolean = false;
  workNavStyling = 'default-nav-styling';
  showContactComponent: boolean = false;
  contactNavStyling = 'default-nav-styling';
  showNavItems: boolean = false;
  
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

  homeNavItem() {
    // console.log("The value of all the children components after the click on the home nav item:", "aboutMeComponent:", this.showAboutMeComponent, "showExperienceComponent:", this.showExperienceComponent, "showWorkComponent:", this.showWorkComponent, "showContactComponent:", this.showContactComponent);
    // console.log("As stated above, these console logs mean the home nav button was clicked. The value of all the children components should now be false.");
    this.showIntroSiteMapComponent = true;
    this.showWelcomeNavItem = true;
    this.showNavItems = false;
    this.showAboutMeComponent = false;
    this.showExperienceComponent = false;
    this.showWorkComponent = false;
    this.showContactComponent = false;
    // console.log("Checking the boolean is now false", "aboutMeComponent:", this.showAboutMeComponent, "showExperienceComponent:", this.showExperienceComponent, "showWorkComponent:", this.showWorkComponent, "showContactComponent:", this.showContactComponent);
  }

  showHideAboutMeComponent(valueEmitted: any) {
    this.showAboutMeComponent = valueEmitted;
    this.showNavItems = true;
    this.showWelcomeNavItem = false;
    this.showIntroSiteMapComponent = false;
    this.showExperienceComponent = false;
    this.experienceNavStyling = 'default-nav-styling';
    this.showWorkComponent = false;
    this.workNavStyling = 'default-nav-styling';
    this.showContactComponent = false;
    this.contactNavStyling = 'default-nav-styling'
    // console.log("This is the showHideAboutMeComponent function in the app component AFTER the child data comes through(about me button was clicked), so the value should be true:", this.showAboutMeComponent )
    this.aboutMeNavStyling = 'active-nav-styling';
  }

  aboutMeNavLink() {
    this.showAboutMeComponent = true;
    this.showIntroSiteMapComponent = false;
    this.showExperienceComponent = false;
    this.experienceNavStyling = 'default-nav-styling';
    this.showWorkComponent = false;
    this.workNavStyling = 'default-nav-styling';
    this.showContactComponent = false;
    this.contactNavStyling = 'default-nav-styling';
    // console.log("This means the About Me nav link was clicked on in the App  Component. The value is now:", this.showAboutMeComponent);
    this.aboutMeNavStyling = 'active-nav-styling';
  }

  showHideExperienceComponent(valueEmitted: any) {
    this.showExperienceComponent = valueEmitted;
    this.showNavItems = true;
    // console.log("This is the showHideExperienceComponent function in the app component AFTER the child data comes through(experience button was clicked), so the value should be true:", this.showExperienceComponent )
    this.showIntroSiteMapComponent = false;
    this.showWelcomeNavItem = false;
    this.showAboutMeComponent = false;
    this.aboutMeNavStyling = 'default-nav-styling';
    this.showWorkComponent = false;
    this.workNavStyling = 'default-nav-styling';
    this.showContactComponent = false;
    this.contactNavStyling = 'default-nav-styling'
    // console.log("This console log makes sure the other components are set to be hidden.", "introSiteMapComponent:", this.showIntroSiteMapComponent, "aboutMeComponent:", this.showAboutMeComponent,"showWorkComponent:", this.showWorkComponent, "showContactComponent:", this.showContactComponent);
    this.experienceNavStyling = 'active-nav-styling';
  }

  experienceNavLink() {
    this.showExperienceComponent = true;
    this.showIntroSiteMapComponent = false;
    this.showAboutMeComponent = false;
    this.aboutMeNavStyling = 'default-nav-styling';
    this.showWorkComponent = false;
    this.workNavStyling = 'default-nav-styling';
    this.showContactComponent = false;
    this.contactNavStyling = 'default-nav-styling';
    // console.log("This means the Experience nav link was clicked on in the App  Component. The value is now:", this.showExperienceComponent);
    this.experienceNavStyling = 'active-nav-styling';
  }

  showHideWorkComponent(valueEmitted: any) {
    this.showWorkComponent = valueEmitted;
    this.showNavItems = true;
    // console.log("This is the showHideWorkComponent function in the app component AFTER the child data comes through(work button was clicked), so the value should be true:", this.showWorkComponent )
    this.showIntroSiteMapComponent = false;
    this.showWelcomeNavItem = false;
    this.showAboutMeComponent = false;
    this.aboutMeNavStyling = 'default-nav-styling'
    this.showExperienceComponent = false;
    this.experienceNavStyling = 'default-nav-styling';
    this.showContactComponent = false;
    this.contactNavStyling = 'default-nav-styling'
    // console.log("This console log makes sure the other components are set to be hidden.", "aboutMeComponent:", this.showAboutMeComponent, "showExperienceComponent:", this.showExperienceComponent, "showContactComponent:", this.showContactComponent);
    this.workNavStyling = 'active-nav-styling';
  }

  workNavLink() {
    this.showWorkComponent = true;
    this.showIntroSiteMapComponent = false;
    this.showAboutMeComponent = false;
    this.aboutMeNavStyling = 'default-nav-styling';
    this.showExperienceComponent = false;
    this.experienceNavStyling = 'default-nav-styling';
    this.showContactComponent = false;
    this.contactNavStyling = 'default-nav-styling';
    // console.log("This means the Work nav link was clicked on in the App Component. The value is now:", this.showWorkComponent);
    if(this.workNavStyling = 'default-nav-styling') {
      this.workNavStyling = 'active-nav-styling';
    } else {
      this.workNavStyling = 'default-nav-styling';
    }
  }

  showHideContactComponent(valueEmitted: any) {
    this.showContactComponent = valueEmitted;
    this.showNavItems = true;
    // console.log("This is the showHideContactComponent function in the app component AFTER the child data comes through(work button was clicked), so the value should be true:", this.showWorkComponent )
    this.showWelcomeNavItem = false;
    this.showIntroSiteMapComponent = false;
    this.showAboutMeComponent = false;
    this.aboutMeNavStyling = 'default-nav-styling'
    this.showExperienceComponent = false;
    this.experienceNavStyling = 'default-nav-styling';
    this.showWorkComponent = false;
    this.workNavStyling = 'default-nav-styling';
    // console.log("This console log makes sure the other components are set to be hidden.", "aboutMeComponent:", this.showAboutMeComponent, "showExperienceComponent:", this.showExperienceComponent, "showWorkComponent:", this.showWorkComponent);
    this.contactNavStyling = 'active-nav-styling';
  }

  contactNavLink() {
    this.showContactComponent = true;
    this.showIntroSiteMapComponent = false;
    this.showAboutMeComponent = false;
    this.aboutMeNavStyling = 'default-nav-styling';
    this.showExperienceComponent = false;
    this.experienceNavStyling = 'default-nav-styling';
    this.showWorkComponent = false;
    this.workNavStyling = 'default-nav-styling';
    // console.log("This means the Contact nav link was clicked on in the App Component. The value is now:", this.showContactComponent);
    if(this.contactNavStyling = 'default-nav-styling') {
      this.contactNavStyling = 'active-nav-styling';
    } else {
      this.contactNavStyling = 'default-nav-styling';
    }
  }

  

}



