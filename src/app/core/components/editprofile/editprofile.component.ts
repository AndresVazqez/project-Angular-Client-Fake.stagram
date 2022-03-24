import { Component, OnInit } from '@angular/core';
import { Image, User } from '../../models/models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  
  public dataUser!: User;
  public userId!:string | null;


  constructor(private userService:UserService) { 
    
    this.userId = localStorage.getItem('id');
    console.log(this.userId)   
   
    
  }
  
  ngOnInit(): void {
    
    if (this.userId) {
      this.userService.getUser(this.userId).subscribe((res) => {
        const apiUser: User = res
        this.dataUser = apiUser
        console.log(apiUser)

      }, (err) => {
        console.log(err)
      })
    }
  }


}
