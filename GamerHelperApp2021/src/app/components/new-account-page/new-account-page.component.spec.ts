import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccountPageComponent } from './new-account-page.component';

describe('NewAccountPageComponent', () => {
  let component: NewAccountPageComponent;
  let fixture: ComponentFixture<NewAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAccountPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
