import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7component20Component } from './lib4childlib7component20.component';

describe('Lib4childlib7component20Component', () => {
  let component: Lib4childlib7component20Component;
  let fixture: ComponentFixture<Lib4childlib7component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
