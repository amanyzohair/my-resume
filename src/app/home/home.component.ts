import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  viewSection(){
    // document.getElementById("about").scrollIntoView({behavior: "smooth"})
    AOS.init();
  }
}
