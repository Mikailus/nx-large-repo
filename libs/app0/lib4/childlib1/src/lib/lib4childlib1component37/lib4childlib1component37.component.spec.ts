import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib1component37Component } from './lib4childlib1component37.component';

describe('Lib4childlib1component37Component', () => {
  let component: Lib4childlib1component37Component;
  let fixture: ComponentFixture<Lib4childlib1component37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib1component37Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
