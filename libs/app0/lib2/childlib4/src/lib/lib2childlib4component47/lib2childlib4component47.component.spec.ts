import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4component47Component } from './lib2childlib4component47.component';

describe('Lib2childlib4component47Component', () => {
  let component: Lib2childlib4component47Component;
  let fixture: ComponentFixture<Lib2childlib4component47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
