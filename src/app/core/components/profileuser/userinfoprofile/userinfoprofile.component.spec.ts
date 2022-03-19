import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoprofileComponent } from './userinfoprofile.component';

describe('UserinfoprofileComponent', () => {
  let component: UserinfoprofileComponent;
  let fixture: ComponentFixture<UserinfoprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinfoprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
