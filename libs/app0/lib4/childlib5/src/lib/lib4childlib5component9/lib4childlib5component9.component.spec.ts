import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5component9Component } from './lib4childlib5component9.component';

describe('Lib4childlib5component9Component', () => {
  let component: Lib4childlib5component9Component;
  let fixture: ComponentFixture<Lib4childlib5component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component9Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
