import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { User } from 'src/app/core/models/models';

@Component({
  selector: 'app-userinfoprofile',
  templateUrl: './userinfoprofile.component.html',
  styleUrls: ['./userinfoprofile.component.scss']
})
export class UserinfoprofileComponent implements OnChanges {

  @Input() dataUser!: User;
  public resolution: any; 

  constructor() {       
    
    this.resolution = window.innerWidth;
  }
  
  onResize (e:any){
    this.resolution = e.currentTarget.innerWidth;
    console.log(e)
    console.log(this.resolution)
    
  }





  public mostrar() {

    console.log(this.dataUser)
  }
  ngOnChanges(): void {



  }

}
