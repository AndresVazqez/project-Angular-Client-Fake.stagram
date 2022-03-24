import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofileheaderComponent } from './editprofileheader.component';

describe('EditprofileheaderComponent', () => {
  let component: EditprofileheaderComponent;
  let fixture: ComponentFixture<EditprofileheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofileheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofileheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
