import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/core/models/models';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss']
})
export class SearchpageComponent implements OnInit {


  public searchResult!: User[];
  public searchForm!:any;
  public onInput:boolean = false;  

  constructor(public userService: UserService, private fb:FormBuilder) {
    this.searchForm = this.fb.group({
      username: ['']
    })
  }

  resetInput(){
    this.onInput = false;
    this.searchResult = [];
    this.searchForm.reset();
  }


  searchUser(e: any) {
    this.onInput = true;    
    console.log(e)
    if (e && e.length > 2){
      this.userService.getUser(e).subscribe({
        next: (res) => {
          const usersDb: any = res;
          this.searchResult = usersDb
          
          console.log(usersDb)
        },
        error: (err) => {
          console.log(err)
        }
      })
      
    } else {    
      this.searchResult = [];
      this.onInput = false;    

    }
  }

  ngOnInit(): void {
  }

}
