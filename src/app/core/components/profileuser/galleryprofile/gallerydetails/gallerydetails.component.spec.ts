import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerydetailsComponent } from './gallerydetails.component';

describe('GallerydetailsComponent', () => {
  let component: GallerydetailsComponent;
  let fixture: ComponentFixture<GallerydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
