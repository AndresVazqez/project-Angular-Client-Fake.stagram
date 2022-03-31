import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/core/models/models';

@Component({
  selector: 'app-userinfoprofile',
  templateUrl: './userinfoprofile.component.html',
  styleUrls: ['./userinfoprofile.component.scss']
})
export class UserinfoprofileComponent implements OnChanges {

  @Input() dataUser!: User;
  public resolution: any; 
  public showEdit:boolean; 

  constructor (private router:Router) {       
    
    this.resolution = window.innerWidth;
    let username = localStorage.getItem('username');
    let usernameUrl = this.router.url.split('/')[2]; 
    username === usernameUrl || !usernameUrl ? this.showEdit = true : this.showEdit = false;



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
