import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7component10Component } from './lib4childlib7component10.component';

describe('Lib4childlib7component10Component', () => {
  let component: Lib4childlib7component10Component;
  let fixture: ComponentFixture<Lib4childlib7component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component10Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
