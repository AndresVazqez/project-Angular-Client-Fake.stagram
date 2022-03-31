import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserspageComponent } from './userspage.component';

describe('UserspageComponent', () => {
  let component: UserspageComponent;
  let fixture: ComponentFixture<UserspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
