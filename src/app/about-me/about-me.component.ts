import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import { Router, Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  constructor( private router:Router, private route:ActivatedRoute) {
    // console.log('configured routes: ', this.router.config);
    // console.log('specific route: ', this.router.config[1].path);

    // if(this.router.config[1].path = 'about-me') {
    //   console.log("This is the about me route")
    // }

    // console.log(this.printpath('', this.router.config));
    // console.log("Look here:", this.printpath('', this.router.config));

    // console.log("This console log is on the about me.ts", this.router.url);

    

  }

  ngOnInit() {

  }

  // printpath(parent: String, config: Route[]) {
  //   for (let i = 0; i < config.length; i++) {
  //     const route = config[i];
  //     console.log("These are the routes: " + route.path);
  //   }
  // }

  
  
}

