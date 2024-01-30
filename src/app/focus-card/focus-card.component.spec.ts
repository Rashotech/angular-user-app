import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusCardComponent } from './focus-card.component';

describe('FocusCardComponent', () => {
  let component: FocusCardComponent;
  let fixture: ComponentFixture<FocusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocusCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FocusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
