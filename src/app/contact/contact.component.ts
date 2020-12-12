import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
  form = new FormGroup({
    emailFormControl : new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    messageFormControl : new FormControl('',[
      Validators.required,
    ])
  })
  
    hide = true;
    lat = 30.0444;
    lng = 31.2357;
    defaultValue='messageForm';
    sendMsessage(selectedView){
      this.defaultValue=selectedView;
    }

}
