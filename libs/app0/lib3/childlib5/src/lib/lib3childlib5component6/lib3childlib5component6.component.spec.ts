import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib5component6Component } from './lib3childlib5component6.component';

describe('Lib3childlib5component6Component', () => {
  let component: Lib3childlib5component6Component;
  let fixture: ComponentFixture<Lib3childlib5component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib5component6Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib5component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
