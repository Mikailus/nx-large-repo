import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component42Component } from './lib2childlib2component42.component';

describe('Lib2childlib2component42Component', () => {
  let component: Lib2childlib2component42Component;
  let fixture: ComponentFixture<Lib2childlib2component42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
