import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib1component1Component } from './lib1childlib1component1.component';

describe('Lib1childlib1component1Component', () => {
  let component: Lib1childlib1component1Component;
  let fixture: ComponentFixture<Lib1childlib1component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib1component1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib1component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
