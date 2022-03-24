import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/core/models/models';

@Component({
  selector: 'app-createheader',
  templateUrl: './createheader.component.html',
  styleUrls: ['./createheader.component.scss']
})
export class CreateheaderComponent implements OnInit {

  public closeImg: Image;

  constructor() { 

    this.closeImg = {

      src:'https://i.ibb.co/thGv7Mc/close.png',
      alt:'close icon'
    }
  }

  ngOnInit(): void {
    
  }

}
