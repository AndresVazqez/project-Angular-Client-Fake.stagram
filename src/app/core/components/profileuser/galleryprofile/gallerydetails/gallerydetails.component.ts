import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image, User, UserPost } from 'src/app/core/models/models';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-gallerydetails',
  templateUrl: './gallerydetails.component.html',
  styleUrls: ['./gallerydetails.component.scss']
})
export class GallerydetailsComponent implements OnInit {

  public post!: UserPost;
  public userId!:string | null;
  public dataUser!: User;
  public arrowBack:Image;
  public optionsIcon: Image;
  public date:string = '';


  constructor(private userService: UserService, private activateRoute: ActivatedRoute) { 
    
    localStorage.getItem('id') ? this.userId = localStorage.getItem('id'): '';

    this.arrowBack = {

      src :'https://i.ibb.co/yScb1Zw/backarrow.png',
      alt: 'arrowBack'
    }
    this.optionsIcon = {

      src :'https://i.ibb.co/NN25XRz/more.png',
      alt: 'options icon'
    }  
        
  }

  public mostrarData() { 

    console.log(this.date)    

  }

  getDate(post:UserPost){
    
    let months = ['diciembre', 'enero', 'febrero', 'marzo', 
    'abril', 'mayo', 'junio', 'julio',
    'agosto', 'septiembre', 'octubre', 'noviembre']
    let postSplited = post.createdAt.split('-') 
    let day = postSplited[2].substring(0,2)
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

    this.userService.getUser(this.userId ? this.userId : '' ).subscribe((res) => {
   
      const apiUser:User = res
      this.dataUser = apiUser
     
    }, (err) => {
    
      console.log(err)
    })

   
  }

}