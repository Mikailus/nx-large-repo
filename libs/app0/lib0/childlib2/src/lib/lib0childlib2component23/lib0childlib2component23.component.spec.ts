import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib2component23Component } from './lib0childlib2component23.component';

describe('Lib0childlib2component23Component', () => {
  let component: Lib0childlib2component23Component;
  let fixture: ComponentFixture<Lib0childlib2component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib2component23Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib2component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});