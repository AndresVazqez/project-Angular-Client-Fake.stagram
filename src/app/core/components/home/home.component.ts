import { AfterViewChecked, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { User, UserPost } from '../../models/models';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() dataUser!: User;
  public posts$: UserPost[] = []

  constructor(private userService: UserService) {/*Empty*/ }

  dobleClick(){
    console.log("Doble Click")
  }

  public like(postId: string, likeByUser:boolean ) {  
    const idUser = {
      likes: this.dataUser._id
    }
    if (likeByUser){    
      console.log("Unlike")  
      this.userService.unLikePost(postId, idUser).subscribe({
        next: (res) => {
          this.getAllPostComponent();
          console.log(res)
        }, error: (err) => {
          console.log(err)
        }
      })   
    } else {
      console.log("Like")
      this.userService.likePost(postId, idUser).subscribe({
        next: (res) => {
          this.getAllPostComponent();
          console.log(res)
        }, error: (err) => {
          console.log(err)
        }
      })        
    }
  }

  getAllPostComponent():void {
    this.userService.getAllpost().subscribe({
      next: (res: any) => {
        const apiUserPosts: any = res;
        const postFormatted = apiUserPosts.map((post: UserPost) => {
          post.createdAt = this.userService.getDate(post);
          const usersLikes = post.likes.map((userId: any) =>
            userId._id
          )
          if (usersLikes.includes(this.dataUser._id)) {
            post.likeByUser = true
          } else {
            post.likeByUser = false
          }
        })
        this.posts$ = apiUserPosts
        console.log("Peticion:", this.posts$)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


  ngOnInit() {
    this.getAllPostComponent();
  }
}

