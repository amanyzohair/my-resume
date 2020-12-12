import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contacts = [
    {icon: 'fa-github', href: 'https://github.com/amanyzohair' },
    {icon: 'fa-stack-overflow', href: 'https://stackoverflow.com/users/8199413/amany-zohair' },
    {icon: 'fa-linkedin', href: 'https://www.linkedin.com/in/amany-zohair-161362158/' },
    {icon: 'fa-facebook', href: 'https://www.facebook.com/amany.zohair.79/' },
    {icon: 'fa-twitter', href: 'https://twitter.com/ZohairAmany' },
  ]
}
