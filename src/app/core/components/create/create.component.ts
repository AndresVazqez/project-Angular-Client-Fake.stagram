import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  
  @Input() dataUser!:User;  
  public uploadPost: FormGroup;
  public imagePreview: string;
  public file!: File;
  public submitted: boolean = false;
  public errorPosting: boolean = false;
  public isLoading: boolean = false;


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

  showMessageDataSaved() {

    setTimeout(()=>{
      this.isLoading=false;
      this.submitted = true   
      document.body.classList.add('blockscroll')      
      setTimeout(() => {
        this.router.navigate(['/profile']);
        document.body.classList.remove('blockscroll');
        this.submitted = false;  
      }, 5000)
    },4000)


  }

  public uploadFile() {

    if (this.uploadPost.valid) {
      this.isLoading = true;
      const dataPost = new FormData();
      dataPost.append('image', this.file),
        dataPost.append('caption', this.uploadPost.get('caption')?.value),
        this.dataUser._id && dataPost.append('userId', this.dataUser._id)
      console.log(dataPost)

      this.userService.postImages(dataPost).subscribe({
        next: (res: any) => {
          this.uploadPost.reset();
          this.showMessageDataSaved()

        },
        error: (error) => {
          console.log(error);
          this.errorPosting = true;
        }
      })
    }

  }


  ngOnInit(): void {

  }

}
