import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/core/models/models';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  
  
  public homeIcon:Image;
  public searchIcon:Image;
  public addIcon:Image;
  public heartIcon:Image;
  public profileImg:Image;

  constructor() {

    this.homeIcon = {

      src:"https://i.ibb.co/MSpcjW5/home-Black.png",
      alt:"Home icon",
    }
    this.searchIcon = {

      src:"https://i.ibb.co/NTyLbbY/search-interface-symbol.png",
      alt:"search icon",
    }
    this.addIcon = {

      src:"https://i.ibb.co/pn8Zbmq/addIcon.png",
      alt:"add icon",
    }
    this.heartIcon = {

      src:"https://i.ibb.co/xCSQrjd/like.png",
      alt:"like icon",
    }
    this.profileImg = {

      src:"https://i.ibb.co/ZMNnWtt/user.png",
      alt:"profile img",
    }   
    
   }

   
  ngOnInit(): void {
  }


}
