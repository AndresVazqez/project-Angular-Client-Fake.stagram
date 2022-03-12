import { Component, OnInit } from '@angular/core';
import { RegisterStatus } from 'src/app/core/models/user';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public statusRegistered = ''

  constructor() { }

  ngOnInit(): void {
  }

  public SetStatusRegistered(event: RegisterStatus){

    this.statusRegistered = event.status;
    console.log("hola")
  }

}
