import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component27Component } from './lib4childlib4component27.component';

describe('Lib4childlib4component27Component', () => {
  let component: Lib4childlib4component27Component;
  let fixture: ComponentFixture<Lib4childlib4component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component27Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
