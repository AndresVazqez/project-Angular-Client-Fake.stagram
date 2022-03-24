import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateheaderComponent } from './createheader.component';

describe('CreateheaderComponent', () => {
  let component: CreateheaderComponent;
  let fixture: ComponentFixture<CreateheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
