import { Component } from '@angular/core';
import { SharedService } from './shared.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPortfolio';
  showHideIntroSiteMap : boolean = true; // This property toggles the intro sitemap. The default is set to true meaning it is visible.
  showHideAboutMe = false; // This property toggles the intro sitemap. The default is set to false meaning it is not visible.
  
  clickEventsubscription:Subscription;
  constructor(private sharedService:SharedService, private router:Router, private activeRoute: ActivatedRoute) {
    this.clickEventsubscription = this.sharedService.getAboutMeClickEvent().subscribe(()=>{ //This listens to the button click that occured on the into-sitemap
      this.showHideIntroSiteMap = !this.showHideIntroSiteMap;
      this.showHideAboutMe = true;
    })    

    // if(this.router.config[1].path = 'about-me') {
    //   console.log(this.router.config[1].path)
    //   console.log("This is the about me route")
    
    // }

  }

  

  ngOnInit() {
    // The below conditional means the about me route is displaying.
    // if(this.showHideAboutMe = true) {
    //   this.showHideIntroSiteMap = true
    //   console.log("This means the About Me component is displaying");
    //   this.showHideAboutMe
    // }
    // The above conditional means the about me route is displaying.
 
    // console.log("This console log is on the app component.ts", this.router.url);
    console.log("This console log is on the app component: please say about me", this.activeRoute.url);


  }
  
  checkComponent() {
    console.log("This function checks which component is showing");
  }

}




