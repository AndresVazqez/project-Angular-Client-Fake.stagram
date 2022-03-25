import { Component, OnInit } from '@angular/core';
import { UserPost } from '../../models/models';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts:UserPost[]=[]; 

  constructor(private userService: UserService ) {}

  ngOnInit(): void {

    this.userService.getAllpost().subscribe((res:any)=> {
      
      this.posts = res     
      console.log(res);

    }, (err) => {
      console.log(err)
    })
  }
}
