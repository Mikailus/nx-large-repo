import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib6component25Component } from './lib1childlib6component25.component';

describe('Lib1childlib6component25Component', () => {
  let component: Lib1childlib6component25Component;
  let fixture: ComponentFixture<Lib1childlib6component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib6component25Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib6component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
