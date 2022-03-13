import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup; 
  public errorServer: string | null;



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
      image: ['']

    })    

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

  public loginUser(user:User): void {
    console.log(user);
    this.authService.signIn(user);
  }

  public registerUser() {
    let dataUser = this.registerForm.value
    console.log(dataUser)
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
