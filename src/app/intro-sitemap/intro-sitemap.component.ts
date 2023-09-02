import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import * as $ from 'jquery'


declare var jQuery: any;


@Component({
  selector: 'app-intro-sitemap',
  templateUrl: './intro-sitemap.component.html',
  styleUrls: ['./intro-sitemap.component.css'],
  host: {'class': 'intro-sitemap-container'}

})
export class IntroSitemapComponent implements OnInit {
  clickedAboutMeButton: boolean = false;
  @Output() aboutMeEvent: EventEmitter<boolean> = new EventEmitter<boolean>(); //This output notifies the parent of the data
  
  clickedExperienceButton: boolean = false;
  @Output() experienceEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  clickedWorkButton: boolean = false;
  @Output() workEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
 
  clickedContactButton: boolean = false;
  @Output() contactEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {

  }

  ngOnInit(): void {

    $(".purple-electronics-img").hover(
      function() {
        // img gets bigger
        $(this).css({
          "transform": "scale(1.2)"
        });
      },
      function() {
        // img returns to original size
        $(this).css({
          "transform": "scale(1)"
        });
      });
  }

  showAboutMe() {
    this.clickedAboutMeButton = true;
    console.log("This means the About Me Widget was clicked on in the Into Sitemap Component. The value is now:", this.clickedAboutMeButton);
    this.aboutMeEvent.emit(this.clickedAboutMeButton); //This then binds with the related function in the app component html so the app component has the data needed
  }

  showExperience() {
    this.clickedExperienceButton = true;
    console.log("This means the Experience Widget was clicked on in the Into Sitemap Component. The value is now:", this.clickedExperienceButton);
    this.experienceEvent.emit(this.clickedExperienceButton);
  }

  showWork() {
    this.clickedWorkButton = true;
    console.log("This means the Work Widget was clicked on in the Into Sitemap Component. The value is now:", this.clickedWorkButton);
    this.workEvent.emit(this.clickedWorkButton); 
  }

  showContact() {
    this.clickedContactButton = true;
    console.log("This means the Contact Widget was clicked on in the Into Sitemap Component. The value is now:", this.clickedContactButton);
    this.contactEvent.emit(this.clickedContactButton);
  }



}
