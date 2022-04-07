import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/models';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-activitypage',
  templateUrl: './activitypage.component.html',
  styleUrls: ['./activitypage.component.scss']
})
export class ActivitypageComponent implements OnInit {
  public dataUser!:User;

  constructor(public userService:UserService) {

    let username = localStorage.getItem('username');

    username && this.getUser(username);

   }

   getUser(username:string){
    
    this.userService.getUser(username).subscribe({
      next: (res) => {          
        const apiUser: User = res[0]
        this.dataUser = apiUser
        console.log(apiUser)

      }, error: (err) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
  }

}
