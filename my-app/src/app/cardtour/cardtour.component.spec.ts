import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtourComponent } from './cardtour.component';

describe('CardtourComponent', () => {
  let component: CardtourComponent;
  let fixture: ComponentFixture<CardtourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardtourComponent]
    });
    fixture = TestBed.createComponent(CardtourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
