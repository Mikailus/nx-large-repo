import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib5component27Component } from './lib0childlib5component27.component';

describe('Lib0childlib5component27Component', () => {
  let component: Lib0childlib5component27Component;
  let fixture: ComponentFixture<Lib0childlib5component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component27Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
