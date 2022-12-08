import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavButtonStateService } from '../nav-button-state.service';

@Component({
  selector: 'app-sticky-bar',
  templateUrl: './sticky-bar.component.html',
  styleUrls: ['./sticky-bar.component.css']
})
export class StickyBarComponent implements OnInit {
  constructor(private router: Router, private navBtnService: NavButtonStateService) { }

  ngOnInit() {
    this.router.events.subscribe(navEvent =>{
      if(navEvent instanceof NavigationEnd){
        this.navBtnService.updateNavButtonState();
      }
    })
  }

  advance(){
    this.router.navigate(['page-2']);
  }
}