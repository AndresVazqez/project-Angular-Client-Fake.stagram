import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderprofileComponent } from './headerprofile.component';

describe('HeaderprofileComponent', () => {
  let component: HeaderprofileComponent;
  let fixture: ComponentFixture<HeaderprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
