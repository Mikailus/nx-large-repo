import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib4component38Component } from './lib0childlib4component38.component';

describe('Lib0childlib4component38Component', () => {
  let component: Lib0childlib4component38Component;
  let fixture: ComponentFixture<Lib0childlib4component38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib4component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib4component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
