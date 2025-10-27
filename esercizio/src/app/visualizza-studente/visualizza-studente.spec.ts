import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaStudente } from './visualizza-studente';

describe('VisualizzaStudente', () => {
  let component: VisualizzaStudente;
  let fixture: ComponentFixture<VisualizzaStudente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizzaStudente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzaStudente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
