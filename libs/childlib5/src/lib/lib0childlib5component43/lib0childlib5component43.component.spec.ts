import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib5component43Component } from './lib0childlib5component43.component';

describe('Lib0childlib5component43Component', () => {
  let component: Lib0childlib5component43Component;
  let fixture: ComponentFixture<Lib0childlib5component43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
