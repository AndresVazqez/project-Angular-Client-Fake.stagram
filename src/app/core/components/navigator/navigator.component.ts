import { Component, OnInit } from '@angular/core';
import { Navigator } from 'src/app/shared/models/models';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {


  title = 'client';
  public navigator: Navigator[] = [

    {
      name: 'Home',
      link: ''
    },
    {
      name: 'Register',
      link: '/register'
    },
    {
      name: 'About',
      link: '/about'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
