import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib8component44Component } from './lib3childlib8component44.component';

describe('Lib3childlib8component44Component', () => {
  let component: Lib3childlib8component44Component;
  let fixture: ComponentFixture<Lib3childlib8component44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib8component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib8component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
