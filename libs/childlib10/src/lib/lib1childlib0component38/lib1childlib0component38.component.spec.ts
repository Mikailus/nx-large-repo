import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib0component38Component } from './lib1childlib0component38.component';

describe('Lib1childlib0component38Component', () => {
  let component: Lib1childlib0component38Component;
  let fixture: ComponentFixture<Lib1childlib0component38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib0component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
