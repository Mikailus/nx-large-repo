import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib7component37Component } from './lib1childlib7component37.component';

describe('Lib1childlib7component37Component', () => {
  let component: Lib1childlib7component37Component;
  let fixture: ComponentFixture<Lib1childlib7component37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib7component37Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib7component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
