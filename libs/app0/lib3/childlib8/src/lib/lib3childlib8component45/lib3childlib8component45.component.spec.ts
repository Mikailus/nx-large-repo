import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib8component45Component } from './lib3childlib8component45.component';

describe('Lib3childlib8component45Component', () => {
  let component: Lib3childlib8component45Component;
  let fixture: ComponentFixture<Lib3childlib8component45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib8component45Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib8component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
