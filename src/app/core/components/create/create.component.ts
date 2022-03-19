import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserPost } from '../../models/models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public uploadPost: FormGroup;
  public imagePreview: string;
  public file!: File;
  public userId: string | null;


  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public userService: UserService
  ) {

    this.uploadPost = this.formBuilder.group({
      image: ['', [Validators.required, Validators.minLength(1)]],
      caption: [''],
      userId: ['']

    })
    this.imagePreview = '';
    this.userId = localStorage.getItem("id");
  }

  //mirar luego como se pasa el evento sin ser de tipo any
  public imgSelect(e: any): void {

    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target?.result;
      }
      reader.readAsDataURL(e.target.files[0])
      this.file = e.target.files[0];
    }

  }

  public uploadFile() {

    if (this.uploadPost.valid) {

      const dataPost = new FormData();
      dataPost.append('image', this.file),
        dataPost.append('caption', this.uploadPost.get('caption')?.value),
        this.userId && dataPost.append('userId', this.userId)

      this.userService.postImages(dataPost).subscribe((res: any) => {
        this.uploadPost.reset();
      }, (error) => {
        console.log(error);
      })
    }
  }

  ngOnInit(): void {

  }

}
