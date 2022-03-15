import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Image, User, UserLogin } from '../../models/models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup; 
  public errorServer: string | null;
  public logoInsta: Image; 
  public logoFb: Image;
  public btnName:string;
  public registerOk: boolean = false; 
  public appleStore: Image;
  public playStore: Image;
  public appleStoreLink: string;
  public playStoreLink: string;
  public linksFooter:string [] =[];


  constructor(
    public fb: FormBuilder,
    private authService: UserService,
    private router: Router

  ) {
    
    this.errorServer = "";

    this.registerForm = this.fb.group({
      name: [''],
      lastname: [''],
      username: [''],
      email: [''],
      password: [''],
      repeatPassword : [''], 
      

    })

  
    this.btnName= "Iniciar sesión con Facebook"    
    this.logoInsta = {
      src:"https://i.ibb.co/t84wDXq/instagram-log.png",
      alt:"logo Insta"
    }
    this.logoFb = {
      src:"https://i.ibb.co/KbdLfGk/Facebook.png",
      alt:"LogoFacebook"
    }
    this.appleStore ={
      src: "https://i.ibb.co/c8YxV9N/applestore.png",
      alt: "apple Store logo"
    }
    this.playStore = {     
      src: "https://i.ibb.co/dmJ3L4t/playstore.png",
      alt: "play store logo"
    }

    this.appleStoreLink = "https://apps.apple.com/app/instagram/id389801252?vt=lo"
    this.playStoreLink = "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=2D09709E-4497-4E73-B599-94E1F1EE430D&utm_content=lo&utm_medium=badge"
    this.linksFooter = [ "Meta", 
    "Información", 
    "Blog", 
    "Empleo", 
    "Ayuda", 
    "API", 
    "Privacidad", 
    "Condiciones",
    "Cuentas destacadas",
    "Hashtags",
    "Ubicaciones",
    "Instagram Lite"      
  ]

  }

  ngOnInit(): void {
  }

  public setError(err: string) {

    console.log(err)
    if (err === 'email already exists') {

      this.errorServer = "Este e.mail ya está en uso"

    } if (err === 'Username already exists') {

      this.errorServer = 'Username ya está en uso'

    } if (err === 'email and username are already in use') {

      this.errorServer = 'El email y el Username ya están en uso';
    }

  }

  public loginUser(user:UserLogin): void {
    console.log(user);
    this.authService.signIn(user);
  }

  public registerUser() {

    let dataUser = this.registerForm.value    
    this.authService.signUp(dataUser)
      .subscribe((res) => {
        console.log(res)
        if (res) {
          this.errorServer = '';
          this.loginUser(dataUser);           
          this.registerForm.reset();          
          this.router.navigate(['']);
        }
      }, (err) => { this.setError(err) })
  }
}
