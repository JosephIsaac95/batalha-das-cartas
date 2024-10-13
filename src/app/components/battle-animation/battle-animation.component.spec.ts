import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleAnimationComponent } from './battle-animation.component';

describe('BattleAnimationComponent', () => {
  let component: BattleAnimationComponent;
  let fixture: ComponentFixture<BattleAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
