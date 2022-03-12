import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private authService: UserService,
    private router: Router

  ) {
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

  public registerUser() {
    console.log(this.registerForm)    
    this.authService.signUp(this.registerForm.value)
    .subscribe((res) => {
      if(res.result){

      this.registerForm.reset();
      this.router.navigate(['']);
      }
    })


  }

}
