import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib3component9Component } from './lib0childlib3component9.component';

describe('Lib0childlib3component9Component', () => {
  let component: Lib0childlib3component9Component;
  let fixture: ComponentFixture<Lib0childlib3component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib3component9Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
