import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib8component16Component } from './lib1childlib8component16.component';

describe('Lib1childlib8component16Component', () => {
  let component: Lib1childlib8component16Component;
  let fixture: ComponentFixture<Lib1childlib8component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib8component16Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
