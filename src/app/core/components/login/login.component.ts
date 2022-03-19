import { Component, OnInit } from '@angular/core';
//Necesarias para construir el formulario. 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Image, UserLogin } from '../../models/models';
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
  public logoMeta:Image;
  public errorServer:string = '';
  public passwordPattern:string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$";


  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public userService: UserService
  ) { 
    this.signinForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email, Validators.minLength(1)]],
      password:['',[Validators.required, Validators.pattern(this.passwordPattern)]]
    }) ;
    
    this.btnName= "Continuar con Facebook"
    this.logoFb = {
      src:"https://i.ibb.co/KbdLfGk/Facebook.png",
      alt:"LogoFacebook"
    }
    this.logoInsta = {
      src:"https://i.ibb.co/hmtzv9w/fakestagram.png",
      alt:"logo Insta"
    }
    this.logoMeta = {
      src:"https://i.ibb.co/YPQHs2F/meta-logo.png",
      alt:"logo meta"
    }  

    this.userService.isLoggedIn ? this.router.navigate(['']) : null


  }

  ngOnInit(): void {

  }
  public setError (error:string) {

    if(error === 'User not found'){
      
     this.errorServer = "Usuario no encontrado.";

    } if ( error === 'invalid password') {

      this.errorServer = "Tu contraseña no es correcta. vuelve a comprobarla.";
    }    

  }

  public loginUser(): void {    
    
    if(this.signinForm.valid){
      
      const dataUser: UserLogin = {
        email: this.signinForm.get('email')?.value.toLowerCase(),
        password: this.signinForm.get('password')?.value        
      }     
      console.log(dataUser)
      this.userService.signIn(dataUser).subscribe((res: any) => {    
        console.log(res)         
        localStorage.setItem('token', res.token);
        localStorage.setItem('id', res.id);

        this.signinForm.reset();
        this.router.navigate([''])  
    }, (err)=>{ this.setError(err) })          
    }
  }
}
