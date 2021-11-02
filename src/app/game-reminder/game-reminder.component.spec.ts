import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameReminderComponent } from './game-reminder.component';

describe('GameReminderComponent', () => {
  let component: GameReminderComponent;
  let fixture: ComponentFixture<GameReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
