import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib8component43Component } from './lib0childlib8component43.component';

describe('Lib0childlib8component43Component', () => {
  let component: Lib0childlib8component43Component;
  let fixture: ComponentFixture<Lib0childlib8component43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib8component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib8component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
