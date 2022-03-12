import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public userService: UserService
  ) { 
    this.signinForm = this.fb.group({
      email:[''],
      password:['']
    })  
  }

  ngOnInit(): void {
  }

  public loginUser(): void {
    this.userService.signIn(this.signinForm.value)
  }

}
