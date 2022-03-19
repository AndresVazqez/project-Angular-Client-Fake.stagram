import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryprofileComponent } from './galleryprofile.component';

describe('GalleryprofileComponent', () => {
  let component: GalleryprofileComponent;
  let fixture: ComponentFixture<GalleryprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
