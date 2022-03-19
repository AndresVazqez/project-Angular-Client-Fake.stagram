import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/core/models/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public camIcon:Image;
  public logoFake: Image;
  public sharedIcon: Image;

  constructor() {  

    this.camIcon ={
      src:"https://i.ibb.co/q70hs5q/camara.png",
      alt:"carama icon"
    }
    this.logoFake ={
      src:"https://i.ibb.co/hmtzv9w/fakestagram.png",
      alt:"logo fakestagram"
    }
    this.sharedIcon = {
      src:"https://i.ibb.co/5sycjBG/send.png",
      alt:"shared icon"
    }

   }

  ngOnInit(): void {
  }

}
