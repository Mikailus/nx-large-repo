import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3component38Component } from './lib4childlib3component38.component';

describe('Lib4childlib3component38Component', () => {
  let component: Lib4childlib3component38Component;
  let fixture: ComponentFixture<Lib4childlib3component38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
