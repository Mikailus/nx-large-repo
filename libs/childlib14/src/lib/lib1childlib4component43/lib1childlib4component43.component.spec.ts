import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib4component43Component } from './lib1childlib4component43.component';

describe('Lib1childlib4component43Component', () => {
  let component: Lib1childlib4component43Component;
  let fixture: ComponentFixture<Lib1childlib4component43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib4component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib4component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
