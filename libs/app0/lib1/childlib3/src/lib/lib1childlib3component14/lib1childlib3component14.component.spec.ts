import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib3component14Component } from './lib1childlib3component14.component';

describe('Lib1childlib3component14Component', () => {
  let component: Lib1childlib3component14Component;
  let fixture: ComponentFixture<Lib1childlib3component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib3component14Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib3component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
