import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7component13Component } from './lib4childlib7component13.component';

describe('Lib4childlib7component13Component', () => {
  let component: Lib4childlib7component13Component;
  let fixture: ComponentFixture<Lib4childlib7component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component13Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
