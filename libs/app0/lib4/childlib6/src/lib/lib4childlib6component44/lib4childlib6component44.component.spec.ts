import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component44Component } from './lib4childlib6component44.component';

describe('Lib4childlib6component44Component', () => {
  let component: Lib4childlib6component44Component;
  let fixture: ComponentFixture<Lib4childlib6component44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
