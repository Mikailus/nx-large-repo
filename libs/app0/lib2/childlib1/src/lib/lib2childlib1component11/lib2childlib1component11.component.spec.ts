import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib1component11Component } from './lib2childlib1component11.component';

describe('Lib2childlib1component11Component', () => {
  let component: Lib2childlib1component11Component;
  let fixture: ComponentFixture<Lib2childlib1component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib1component11Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
