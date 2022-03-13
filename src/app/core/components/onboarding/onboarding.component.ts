import { Component, OnInit } from '@angular/core';
import { Button, Image } from '../../models/models';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  public logoInsta:Image;
  public logoMeta: Image;
  public btn: Button;
  public divice:any;
  public linkToStore:string;

  constructor(  ) { 

    this.logoInsta = {
      src:'https://i.ibb.co/t84wDXq/instagram-log.png',
      alt:'logo instagram'
    }
    
    this.logoMeta = {
      src:"https://i.ibb.co/YPQHs2F/meta-logo.png",
      alt: "Meta logo"
    }
    
    this.btn ={
      name: "Descarga la aplicación de Instagram"
    }
    
    this.linkToStore=''
    this.divice = navigator.appVersion   

    if(this.divice.includes("Android")){
      this.linkToStore="https://play.google.com/store/apps/details?id=com.instagram.android"
      console.log("Estas en un adroid")
    } if (this.divice.includes("Mac OS")){
      this.linkToStore="https://apps.apple.com/es/app/instagram/id389801252"
      console.log("Estas en iOS")
    }
    
  }
  
  
  ngOnInit(): void {
    
    console.log(this.divice)

  }

}
