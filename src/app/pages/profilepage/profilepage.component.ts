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
  public userId!: string | null;

  constructor(private userService: UserService) {

    this.userId = localStorage.getItem('id')


  }

  public verData() {

  }

  getUser(id: string) {

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
