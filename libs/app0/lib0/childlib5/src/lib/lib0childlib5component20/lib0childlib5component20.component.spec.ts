import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib5component20Component } from './lib0childlib5component20.component';

describe('Lib0childlib5component20Component', () => {
  let component: Lib0childlib5component20Component;
  let fixture: ComponentFixture<Lib0childlib5component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
