import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/core/models/models';

@Component({
  selector: 'app-editprofileheader',
  templateUrl: './editprofileheader.component.html',
  styleUrls: ['./editprofileheader.component.scss']
})
export class EditprofileheaderComponent implements OnInit {
  public arrowBack:Image;
  constructor() { 

    this.arrowBack = {
      src: 'https://i.ibb.co/yScb1Zw/backarrow.png',
      alt: 'arrow bac icon'
    }
  }

  ngOnInit(): void {
  }

}
