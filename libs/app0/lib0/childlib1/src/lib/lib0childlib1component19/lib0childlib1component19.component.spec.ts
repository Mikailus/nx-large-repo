import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component19Component } from './lib0childlib1component19.component';

describe('Lib0childlib1component19Component', () => {
  let component: Lib0childlib1component19Component;
  let fixture: ComponentFixture<Lib0childlib1component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component19Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
