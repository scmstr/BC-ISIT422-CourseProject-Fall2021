import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGamesPageComponent } from './my-games-page.component';

describe('MyGamesPageComponent', () => {
  let component: MyGamesPageComponent;
  let fixture: ComponentFixture<MyGamesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGamesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
