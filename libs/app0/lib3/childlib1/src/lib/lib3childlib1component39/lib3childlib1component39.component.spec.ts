import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib1component39Component } from './lib3childlib1component39.component';

describe('Lib3childlib1component39Component', () => {
  let component: Lib3childlib1component39Component;
  let fixture: ComponentFixture<Lib3childlib1component39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib1component39Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib1component39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
