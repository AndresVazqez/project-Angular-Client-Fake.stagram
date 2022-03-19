import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/models';

@Component({
  selector: 'app-galleryprofile',
  templateUrl: './galleryprofile.component.html',
  styleUrls: ['./galleryprofile.component.scss']
})
export class GalleryprofileComponent implements OnInit {
  @Input() dataUser! : User;

  constructor() { }

  ngOnInit(): void {
  }

}
