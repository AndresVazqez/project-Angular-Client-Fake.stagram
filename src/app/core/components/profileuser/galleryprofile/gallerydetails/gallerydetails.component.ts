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
  public prevPage:string; 

  constructor(private router: Router,
     private userService: UserService, 
     private activateRoute: ActivatedRoute,
     private route: ActivatedRoute) {

    this.prevPage = this.route.snapshot.queryParams['accion'];
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
     if(this.prevPage){
       this.router.navigate(['/activity'])
     } else {
       this.router.navigate([`/user/${username}`])  
     } 
  }


  ngOnInit(): void {

    this.activateRoute.paramMap.subscribe((id) => {
      const idPost = id.get('idPost');  
      this.userService.getpost(idPost ? idPost : '').subscribe((res: any) => {

        const apiPost: UserPost = res;
        this.post = apiPost;
        this.date = this.userService.getDate(apiPost)      
      })
    })
  
  }

}
