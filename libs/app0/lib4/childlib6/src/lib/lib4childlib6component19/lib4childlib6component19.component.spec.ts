import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component19Component } from './lib4childlib6component19.component';

describe('Lib4childlib6component19Component', () => {
  let component: Lib4childlib6component19Component;
  let fixture: ComponentFixture<Lib4childlib6component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component19Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
