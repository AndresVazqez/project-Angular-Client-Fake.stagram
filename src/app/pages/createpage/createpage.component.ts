import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/models';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-createpage',
  templateUrl: './createpage.component.html',
  styleUrls: ['./createpage.component.scss']
})
export class CreatepageComponent implements OnInit {
  public userLogin:string | null;
  public dataUser!:User;

  constructor(private userService: UserService) {

    this.userLogin = localStorage.getItem('username')
    if (this.userLogin){
      this.userService.getUser(this.userLogin).subscribe({
        next: (res) => {
          this.dataUser = res[0]
          console.log(this.dataUser)               
        }
      })
    }
   }

  ngOnInit(): void {

    
  }

}
