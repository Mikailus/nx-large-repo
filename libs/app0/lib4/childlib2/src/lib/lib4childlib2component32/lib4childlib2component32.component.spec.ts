import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component32Component } from './lib4childlib2component32.component';

describe('Lib4childlib2component32Component', () => {
  let component: Lib4childlib2component32Component;
  let fixture: ComponentFixture<Lib4childlib2component32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component32Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
