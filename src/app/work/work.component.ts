import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {

  @Input() clickedHomeNavItem : any; //This is how the parent notifies the child of the data it is passing

  constructor(  private router: Router ) {
    console.log("This is the about me console log showing which route is currently being visited:", this.router.url);
  }

  ngOnInit() {
  }
}
