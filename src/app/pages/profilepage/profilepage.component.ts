import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/models';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss']
})
export class ProfilepageComponent implements OnInit {

  public dataUser!: User;
  public userName!: string | null;


  constructor(private userService: UserService) {
    
    this.userName = localStorage.getItem('username')


  }  

  ngOnInit(): void {

    if (this.userName) {
      this.userService.getUser(this.userName).subscribe({
        next: (res) => {          
          const apiUser: User = res[0]
          this.dataUser = apiUser
          console.log(apiUser)

        }, error: (err) => {
          console.log(err)
        }
      })
    }
  }

}
