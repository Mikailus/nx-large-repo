import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib5component27Component } from './lib1childlib5component27.component';

describe('Lib1childlib5component27Component', () => {
  let component: Lib1childlib5component27Component;
  let fixture: ComponentFixture<Lib1childlib5component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib5component27Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
