import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardplanetsComponent } from './cardplanets.component';

describe('CardplanetsComponent', () => {
  let component: CardplanetsComponent;
  let fixture: ComponentFixture<CardplanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardplanetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardplanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
