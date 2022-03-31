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
  public userName!: string | null;


  constructor(private userService: UserService) {

    this.userName = localStorage.getItem('username');
    
    console.log(this.userName)


  }

  ngOnInit(): void {

    if (this.userName) {
      this.userService.getUser(this.userName).subscribe({
        next: (res) => {
          const apiUser: User = res[0]
          this.dataUser = apiUser
          console.log(apiUser)

        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }
  

}
