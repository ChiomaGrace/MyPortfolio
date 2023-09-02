import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  host: {'class': 'experience-container'}
})
export class ExperienceComponent implements OnInit {
  @Input() clickedHomeNavItem : any;
  
  constructor(  private router: Router ) {
    console.log("This is the about me console log showing which route is currently being visited:", this.router.url);
  }

  ngOnInit() {
    

  }

}


