import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib8component36Component } from './lib4childlib8component36.component';

describe('Lib4childlib8component36Component', () => {
  let component: Lib4childlib8component36Component;
  let fixture: ComponentFixture<Lib4childlib8component36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib8component36Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
