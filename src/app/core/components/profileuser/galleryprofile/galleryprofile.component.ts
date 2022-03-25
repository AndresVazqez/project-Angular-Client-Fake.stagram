import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { User, UserPost } from 'src/app/core/models/models';

@Component({
  selector: 'app-galleryprofile',
  templateUrl: './galleryprofile.component.html',
  styleUrls: ['./galleryprofile.component.scss']
})
export class GalleryprofileComponent implements OnChanges {

  @Input() dataUser!: User;
  public posts!: UserPost[];  



  constructor() {


  }



  ngOnChanges(): void {

    if (this.dataUser && this.dataUser.posts) {

      this.posts = this.dataUser.posts.reverse();
    }

    console.log(this.posts)
    console.log(this.dataUser)

  }
}
