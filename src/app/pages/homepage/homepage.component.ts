import { Component, OnInit } from '@angular/core';
import { RegisterStatus } from 'src/app/core/models/models';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public statusRegistered = ''

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

  public SetStatusRegistered(event: RegisterStatus){

    this.statusRegistered = event.status;
    console.log("hola")
  }

}
