import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib2component47Component } from './lib0childlib2component47.component';

describe('Lib0childlib2component47Component', () => {
  let component: Lib0childlib2component47Component;
  let fixture: ComponentFixture<Lib0childlib2component47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib2component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib2component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
