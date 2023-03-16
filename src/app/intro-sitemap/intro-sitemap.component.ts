import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-intro-sitemap',
  templateUrl: './intro-sitemap.component.html',
  styleUrls: ['./intro-sitemap.component.css'],
  host: {'class': 'intro-sitemap-container'}

})
export class IntroSitemapComponent implements OnInit {
  constructor(private sharedService: SharedService) {

  }

  ngOnInit() {

  }

  showHideAboutMe() {
    this.sharedService.sendAboutMeClickEvent(); // This click function triggers the shared event that then hides the component on the app.component.html
  }
  
}
