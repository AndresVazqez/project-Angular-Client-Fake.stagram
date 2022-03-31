import { Component, OnInit } from '@angular/core';
import { UserPost } from '../../models/models';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getAllpost().subscribe({
      next: (res: any) => {
        const apiUserPosts: any = res;
        const postFormatted = apiUserPosts.map((post: UserPost) => {

           post.createdAt = this.userService.getDate(post);
        })
        this.posts = apiUserPosts.reverse();
        console.log(this.posts)

      },
      error: (err) => {
        console.log(err)
      }
    })
  }


}

