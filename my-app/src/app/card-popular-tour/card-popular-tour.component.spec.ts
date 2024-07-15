import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPopularTourComponent } from './card-popular-tour.component';

describe('CardPopularTourComponent', () => {
  let component: CardPopularTourComponent;
  let fixture: ComponentFixture<CardPopularTourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPopularTourComponent]
    });
    fixture = TestBed.createComponent(CardPopularTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
