import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib8component32Component } from './lib4childlib8component32.component';

describe('Lib4childlib8component32Component', () => {
  let component: Lib4childlib8component32Component;
  let fixture: ComponentFixture<Lib4childlib8component32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib8component32Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
