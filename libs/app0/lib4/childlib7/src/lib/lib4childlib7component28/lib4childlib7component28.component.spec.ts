import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7component28Component } from './lib4childlib7component28.component';

describe('Lib4childlib7component28Component', () => {
  let component: Lib4childlib7component28Component;
  let fixture: ComponentFixture<Lib4childlib7component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component28Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
