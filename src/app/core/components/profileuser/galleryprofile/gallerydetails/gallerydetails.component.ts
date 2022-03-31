import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image, User, UserPost } from 'src/app/core/models/models';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-gallerydetails',
  templateUrl: './gallerydetails.component.html',
  styleUrls: ['./gallerydetails.component.scss']
})
export class GallerydetailsComponent implements OnInit {

  public post!: UserPost;
  public arrowBack: Image;
  public optionsIcon: Image;
  public date: string = '';



  constructor(private router: Router, private userService: UserService, private activateRoute: ActivatedRoute) {

    
    this.arrowBack = {

      src: 'https://i.ibb.co/yScb1Zw/backarrow.png',
      alt: 'arrowBack'
    }
    this.optionsIcon = {

      src: 'https://i.ibb.co/NN25XRz/more.png',
      alt: 'options icon'
    }    

    

  }  

   goTo (username:any) {

   
      this.router.navigate([`/user/${username}`])     
    

  }

  getDate(post: UserPost) {

    let months = ['diciembre', 'enero', 'febrero', 'marzo',
      'abril', 'mayo', 'junio', 'julio',
      'agosto', 'septiembre', 'octubre', 'noviembre']
    let postSplited = post.createdAt.split('-')
    let day = postSplited[2].substring(0, 2)
    let year = postSplited[0]
    let month = months[parseInt(postSplited[1])]

    this.date = `${day} de ${month} de ${year}`
  }



  ngOnInit(): void {

    this.activateRoute.paramMap.subscribe((id) => {
      const idPost = id.get('idPost');  
      this.userService.getpost(idPost ? idPost : '').subscribe((res: any) => {

        const apiPost: UserPost = res;
        this.post = apiPost;
        this.getDate(apiPost)
      })
    })
  
  }

}
