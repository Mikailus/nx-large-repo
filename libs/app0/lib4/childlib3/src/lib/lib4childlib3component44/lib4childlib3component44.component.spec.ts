import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3component44Component } from './lib4childlib3component44.component';

describe('Lib4childlib3component44Component', () => {
  let component: Lib4childlib3component44Component;
  let fixture: ComponentFixture<Lib4childlib3component44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
