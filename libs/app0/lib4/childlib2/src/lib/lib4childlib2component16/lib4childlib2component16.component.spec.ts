import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component16Component } from './lib4childlib2component16.component';

describe('Lib4childlib2component16Component', () => {
  let component: Lib4childlib2component16Component;
  let fixture: ComponentFixture<Lib4childlib2component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component16Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
