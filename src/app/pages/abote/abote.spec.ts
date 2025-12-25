import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abote } from './abote';

describe('Abote', () => {
  let component: Abote;
  let fixture: ComponentFixture<Abote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
