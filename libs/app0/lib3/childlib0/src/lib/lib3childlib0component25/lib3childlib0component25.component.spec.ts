import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib0component25Component } from './lib3childlib0component25.component';

describe('Lib3childlib0component25Component', () => {
  let component: Lib3childlib0component25Component;
  let fixture: ComponentFixture<Lib3childlib0component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib0component25Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib0component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
