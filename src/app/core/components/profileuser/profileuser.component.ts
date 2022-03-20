import { Component, OnInit, Input } from '@angular/core';
import { User, UserPost } from '../../models/models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profileuser',
  templateUrl: './profileuser.component.html',
  styleUrls: ['./profileuser.component.scss']
})
export class ProfileuserComponent implements OnInit {


  @Input() dataUser! : User;  


  constructor(private userService: UserService) {
   
    
  }
  
  public verData () {
    
    
  }
  
  getUser (id:string) {    
    
  }
  
  
  ngOnInit(): void {
    
  
    
  }

  
}
