import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib8component20Component } from './lib1childlib8component20.component';

describe('Lib1childlib8component20Component', () => {
  let component: Lib1childlib8component20Component;
  let fixture: ComponentFixture<Lib1childlib8component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib8component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
