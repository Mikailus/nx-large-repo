import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib1component19Component } from './lib1childlib1component19.component';

describe('Lib1childlib1component19Component', () => {
  let component: Lib1childlib1component19Component;
  let fixture: ComponentFixture<Lib1childlib1component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib1component19Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib1component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
