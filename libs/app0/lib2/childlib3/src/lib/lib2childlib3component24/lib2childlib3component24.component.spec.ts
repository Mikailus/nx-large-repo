import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib3component24Component } from './lib2childlib3component24.component';

describe('Lib2childlib3component24Component', () => {
  let component: Lib2childlib3component24Component;
  let fixture: ComponentFixture<Lib2childlib3component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib3component24Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib3component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
