import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib8component41Component } from './lib1childlib8component41.component';

describe('Lib1childlib8component41Component', () => {
  let component: Lib1childlib8component41Component;
  let fixture: ComponentFixture<Lib1childlib8component41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib8component41Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8component41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
