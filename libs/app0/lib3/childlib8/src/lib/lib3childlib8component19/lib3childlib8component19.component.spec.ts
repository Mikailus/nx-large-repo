import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib8component19Component } from './lib3childlib8component19.component';

describe('Lib3childlib8component19Component', () => {
  let component: Lib3childlib8component19Component;
  let fixture: ComponentFixture<Lib3childlib8component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib8component19Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib8component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
