import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3component40Component } from './lib4childlib3component40.component';

describe('Lib4childlib3component40Component', () => {
  let component: Lib4childlib3component40Component;
  let fixture: ComponentFixture<Lib4childlib3component40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component40Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
