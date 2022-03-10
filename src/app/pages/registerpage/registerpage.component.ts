import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss']
})
export class RegisterpageComponent implements OnInit {

  registrado:boolean = true;

  constructor() { }

  ngOnInit(): void {

  }

}
