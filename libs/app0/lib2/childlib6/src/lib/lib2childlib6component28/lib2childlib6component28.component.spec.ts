import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib6component28Component } from './lib2childlib6component28.component';

describe('Lib2childlib6component28Component', () => {
  let component: Lib2childlib6component28Component;
  let fixture: ComponentFixture<Lib2childlib6component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib6component28Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib6component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
