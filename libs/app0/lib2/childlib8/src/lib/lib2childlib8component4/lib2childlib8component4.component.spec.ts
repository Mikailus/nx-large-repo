import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib8component4Component } from './lib2childlib8component4.component';

describe('Lib2childlib8component4Component', () => {
  let component: Lib2childlib8component4Component;
  let fixture: ComponentFixture<Lib2childlib8component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib8component4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
