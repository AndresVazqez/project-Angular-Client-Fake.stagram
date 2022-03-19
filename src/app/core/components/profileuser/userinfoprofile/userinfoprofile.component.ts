import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/models';

@Component({
  selector: 'app-userinfoprofile',
  templateUrl: './userinfoprofile.component.html',
  styleUrls: ['./userinfoprofile.component.scss']
})
export class UserinfoprofileComponent implements OnInit {
  
  @Input() dataUser! : User;

  constructor() { }

  ngOnInit(): void {
  }

}
