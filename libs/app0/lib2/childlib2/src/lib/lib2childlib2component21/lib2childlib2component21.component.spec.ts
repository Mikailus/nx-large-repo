import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component21Component } from './lib2childlib2component21.component';

describe('Lib2childlib2component21Component', () => {
  let component: Lib2childlib2component21Component;
  let fixture: ComponentFixture<Lib2childlib2component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
