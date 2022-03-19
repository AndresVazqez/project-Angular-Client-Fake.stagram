import { Component, OnInit } from '@angular/core';
import { User } from '../../models/models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profileuser',
  templateUrl: './profileuser.component.html',
  styleUrls: ['./profileuser.component.scss']
})
export class ProfileuserComponent implements OnInit {

  public dataUser!: User;
  


  constructor(private userService: UserService) {

    const userId = localStorage.getItem('id');

    this.getUser(userId ? userId : '')
    console.log("constructor")

  }

  public verData () {

    console.log(this.dataUser)
    console.log(this.dataUser.posts)
  }

  getUser (id:string) {
    
    this.userService.getUser(id).subscribe((res) => {
      console.log(res)
      this.dataUser = res.userDb
    }, (err) => {
  
      console.log(err)
    })

  }
  

  ngOnInit(): void {



  }



  
}
