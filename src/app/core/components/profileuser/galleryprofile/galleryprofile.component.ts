import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserPost } from 'src/app/core/models/models';

@Component({
  selector: 'app-galleryprofile',
  templateUrl: './galleryprofile.component.html',
  styleUrls: ['./galleryprofile.component.scss']
})
export class GalleryprofileComponent implements OnChanges {

  @Input() dataUser!: User;
  public posts!: UserPost[];
  public userLogin!: string | null;


  constructor(private router: Router) {

    this.userLogin = localStorage.getItem('username')

    console.log("Constructor: ", this.userLogin)




  }

  goToDetails(idPost:any) {

    if (this.userLogin === this.dataUser.username){
      this.router.navigate([`/profile/${idPost}`])
    } else {      
      this.router.navigate([`/post/${idPost}`])      
    }


  }



  ngOnChanges(): void {

    
    if (this.dataUser && this.dataUser.posts) {
      console.log(this.dataUser.username)
      this.posts = this.dataUser.posts.reverse()
    }

  }
}
