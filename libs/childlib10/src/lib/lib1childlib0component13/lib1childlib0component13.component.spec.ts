import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib0component13Component } from './lib1childlib0component13.component';

describe('Lib1childlib0component13Component', () => {
  let component: Lib1childlib0component13Component;
  let fixture: ComponentFixture<Lib1childlib0component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib0component13Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
