import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib5component49Component } from './lib0childlib5component49.component';

describe('Lib0childlib5component49Component', () => {
  let component: Lib0childlib5component49Component;
  let fixture: ComponentFixture<Lib0childlib5component49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component49Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
