import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component32Component } from './lib0childlib1component32.component';

describe('Lib0childlib1component32Component', () => {
  let component: Lib0childlib1component32Component;
  let fixture: ComponentFixture<Lib0childlib1component32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component32Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
