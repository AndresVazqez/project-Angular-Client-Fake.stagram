import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { User } from '../../models/models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit, OnChanges {

  @Input() dataUser!:User;
  public liked!:any;
  

  constructor() {  

    console.log(this.liked)    
   }

   ngOnChanges(): void {
    
    if (this.dataUser && this.dataUser.posts) {
      this.liked = this.dataUser.liked.reverse()
      console.log(this.liked)    
    }
  }
    
 
  ngOnInit(): void {

  }

}
