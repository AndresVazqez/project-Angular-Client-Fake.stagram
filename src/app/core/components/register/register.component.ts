import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Image, User, UserLogin, UserRegister } from '../../models/models';
import { UserService } from '../../services/user.service';
import { comparePassword, cannotContainSpace } from '../../services/validators/customValidators';

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
  public btnName: string;
  public registerOk: boolean = false;
  public appleStore: Image;
  public playStore: Image;
  public appleStoreLink: string;
  public playStoreLink: string;
  public linksFooter: string[] = [];
  public submitted: boolean = false;
  public passwordPattern: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$"
  public showPattern: boolean = false;
  public closeImg: Image;
  public showListPattern: string[] = [];


  constructor(
    public fb: FormBuilder,
    private authService: UserService,
    private router: Router

  ) {

    this.authService.isLoggedIn ? this.router.navigate(['']) : null

    this.errorServer = "";

    this.registerForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(1)]],
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), cannotContainSpace]],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
      repeatPassword: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]],

    },
      {
        validator: comparePassword("password", "repeatPassword")
      }
    )


    this.btnName = "Iniciar sesión con Facebook"
    this.logoInsta = {
      src: "https://i.ibb.co/hmtzv9w/fakestagram.png",
      alt: "logo Insta"
    }
    this.logoFb = {
      src: "https://i.ibb.co/KbdLfGk/Facebook.png",
      alt: "LogoFacebook"
    }
    this.appleStore = {
      src: "https://i.ibb.co/c8YxV9N/applestore.png",
      alt: "apple Store logo"
    }
    this.playStore = {
      src: "https://i.ibb.co/dmJ3L4t/playstore.png",
      alt: "play store logo"
    }
    this.closeImg = {
      src: "https://i.ibb.co/thGv7Mc/close.png",
      alt: "close icon"
    }

    this.appleStoreLink = "https://apps.apple.com/app/instagram/id389801252?vt=lo"
    this.playStoreLink = "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=2D09709E-4497-4E73-B599-94E1F1EE430D&utm_content=lo&utm_medium=badge"
    this.linksFooter = ["Meta",
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
    this.showListPattern = [
      'Tener al menos 8 caracteres.',
      'Tener al menos 1 letra (a, b, c...)',
      'Tener al menos 1 número (1, 2, 3...)',
      'Tener al menos 1 caracter especial ($, *, #..)',
      'Inlcuir caracteres en minúsculas y mayúsculas.'
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

  public loginUser(user: UserLogin): void {
    console.log(user);
    this.authService.signIn(user).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('id', res.id);
        this.router.navigate([''])
      }, error: (err) => { this.setError(err) }
    });
  }

  public showPatternPassword(param: boolean) {
    this.showPattern = param;
    if (param == true)
      setTimeout(() => {
        this.showPattern = false;
      }, 10000)

  }

  public registerUser() {

    this.submitted = true;
    if (this.registerForm.valid) {

      console.log("es valido")
      const dataUser: UserRegister = {
        email: this.registerForm.get('email')?.value.toLowerCase(),
        name: this.registerForm.get('name')?.value,
        username: this.registerForm.get('username')?.value,
        password: this.registerForm.get('password')?.value,
      }
      this.authService.signUp(dataUser)
        .subscribe({
          next: (res) => {
            console.log(res);
            if (res) {
              this.errorServer = '';
              this.registerForm.reset();
              this.loginUser(dataUser);
            }
          }, error: (err) => { this.setError(err); }
        })
    }
  }
}
