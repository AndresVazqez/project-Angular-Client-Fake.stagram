import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profileuser',
  templateUrl: './profileuser.component.html',
  styleUrls: ['./profileuser.component.scss']
})
export class ProfileuserComponent implements OnInit {


  @Input() dataUser! : User;
  public username: string;   
  public originPath: string; 
  public user!: User;  
  

  constructor(private userService: UserService, private router:Router) {
    
    this.originPath = this.router.url.split('/')[1];
    this.username = this.router.url.split('/')[2]; 
    console.log(this.username)
    
    if(this.username){

      this.getUser(this.username);      
    }
    
  }  
 
   
  
  getUser (username:string) {
    
    this.userService.getUser(this.username).subscribe({
      next: (res) => {          
        const apiUser: User = res[0]
        this.user = apiUser
        console.log(apiUser)

      }, error: (err) => {
        console.log(err)
      }
    })
    
  }
  
  
  ngOnInit(): void {    
    
  }

  
}
