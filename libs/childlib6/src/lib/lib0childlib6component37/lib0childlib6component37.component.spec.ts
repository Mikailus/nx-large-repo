import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib6component37Component } from './lib0childlib6component37.component';

describe('Lib0childlib6component37Component', () => {
  let component: Lib0childlib6component37Component;
  let fixture: ComponentFixture<Lib0childlib6component37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib6component37Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib6component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
