import { Component, Input, OnInit } from '@angular/core';
import { Image, User } from 'src/app/core/models/models';

@Component({
  selector: 'app-headerprofile',
  templateUrl: './headerprofile.component.html',
  styleUrls: ['./headerprofile.component.scss']
})
export class HeaderprofileComponent implements OnInit {
  @Input() dataUser! : User;


  public configIcon: Image;
  public exploreIcon:Image;
  public logoFake: Image;

  constructor() { 
    
    this.configIcon = {
      src: "https://i.ibb.co/FwLRjPv/config-Icon.png",
      alt: "Config icon"
    }
    this.exploreIcon = {
      src: "https://i.ibb.co/4W6tZTh/explorepeople.png",
      alt: "explere people icon"
    }
    this.logoFake = {
      src: "https://i.ibb.co/hmtzv9w/fakestagram.png",
      alt: "logo fakestagram"
    }
    
  }

  ngOnInit(): void {
  }

}
