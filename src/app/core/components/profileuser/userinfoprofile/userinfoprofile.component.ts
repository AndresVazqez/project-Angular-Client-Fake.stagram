import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Image, User } from 'src/app/core/models/models';

@Component({
  selector: 'app-userinfoprofile',
  templateUrl: './userinfoprofile.component.html',
  styleUrls: ['./userinfoprofile.component.scss']
})
export class UserinfoprofileComponent implements OnChanges {
  
  @Input() dataUser! : User;

  constructor() {
 

   }


   public mostrar() {

    console.log(this.dataUser)
   }
   ngOnChanges():void {

    

   }

}
