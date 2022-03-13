import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Image } from '../../models/models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public signinForm: FormGroup;
  public btnName:string;
  public logoFb: Image;
  public logoInsta: Image;
  public loginOk: boolean;
  public logoMeta:Image;



  constructor(
    public fb: FormBuilder,
    public router: Router,
    public userService: UserService
  ) { 
    this.signinForm = this.fb.group({
      email:[''],
      password:['']
    }) ;
    
    this.btnName= "Continuar con Facebook"
    this.logoFb = {
      src:"https://i.ibb.co/KbdLfGk/Facebook.png",
      alt:"LogoFacebook"
    }
    this.logoInsta = {
      src:"https://i.ibb.co/t84wDXq/instagram-log.png",
      alt:"logo Insta"
    }
    this.logoMeta = {
      src:"https://i.ibb.co/YPQHs2F/meta-logo.png",
      alt:"logo meta"
    }

    this.loginOk = false;

  }

  ngOnInit(): void {
  }

  public loginUser(): void {
    this.userService.signIn(this.signinForm.value)
  }

}
