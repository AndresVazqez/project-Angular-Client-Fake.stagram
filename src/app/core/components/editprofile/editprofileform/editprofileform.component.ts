import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/models';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-editprofileform',
  templateUrl: './editprofileform.component.html',
  styleUrls: ['./editprofileform.component.scss']
})
export class EditprofileformComponent implements OnChanges {

  @Input() dataUser!: User;
  public formEditProfile!: FormGroup;
  public file!: File;
  public imagePreview: string = ''
  public formValid: boolean = false;
  public userNameError: boolean = false;
  public dataSubmitted: boolean = false;


  constructor(public formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {


  }

  public imgSelect(e: any): void {

    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target?.result;
        this.formValid = true;
      }
      reader.readAsDataURL(e.target.files[0])
      this.file = e.target.files[0];
    }
  }

  detectsChangeOnInput(e: any): void {

    this.formValid = true;
  }
  noScroll() {
    window.scrollTo(0, 0);
  }






  showMessageDataSaved() {

    this.dataSubmitted = true;
    this.dataSubmitted && document.body.classList.add('blockscroll')

    setTimeout(() => {
      this.router.navigate(['/profile']);
      document.body.classList.remove('blockscroll');

    }, 4000)

  }

  public sendDataEdited() {

    if (this.formEditProfile.valid) {

      const user = new FormData();

      this.file ? user.append('image', this.file) : null,
        user.append('name', this.formEditProfile.get('name')?.value),
        user.append('username', this.formEditProfile.get('username')?.value),
        user.append('website', this.formEditProfile.get('website')?.value),
        user.append('biography', this.formEditProfile.get('biography')?.value),
        user.append('emailcontact', this.formEditProfile.get('emailcontact')?.value),
        user.append('telephone', this.formEditProfile.get('telephone')?.value),
        user.append('gender', this.formEditProfile.get('gender')?.value),
        console.log(user);


        console.log(this.dataUser._id)
      this.userService.patchUser(this.dataUser._id, user).subscribe({
        next: (res) => {
          this.showMessageDataSaved()
          console.log(res);
        }, error: (error) => {
          this.userNameError = true;
          console.log(error)
        }        
      })
    }



  }




  ngOnChanges() {
    if (this.dataUser) {

      this.formEditProfile = this.formBuilder.group({
        image: [''],
        name: [this.dataUser.name, [Validators.maxLength(60)]],
        username: [this.dataUser.username, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
        website: [this.dataUser.website ? this.dataUser.website : '', [Validators.maxLength(100)]],
        biography: [this.dataUser.biography ? this.dataUser.biography : '', [Validators.maxLength(150)]],
        emailcontact: [this.dataUser.emailcontact ? this.dataUser.emailcontact : '', [Validators.maxLength(100)]],
        telephone: [this.dataUser.telephone ? this.dataUser.telephone : '', [Validators.maxLength(25)]],
        gender: [this.dataUser.gender ? this.dataUser.gender : '']
      })
    }


  }
}
