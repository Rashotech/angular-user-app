import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardplaceholderComponent } from './cardplaceholder.component';

describe('CardplaceholderComponent', () => {
  let component: CardplaceholderComponent;
  let fixture: ComponentFixture<CardplaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardplaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardplaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
