import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib9component12Component } from './lib3childlib9component12.component';

describe('Lib3childlib9component12Component', () => {
  let component: Lib3childlib9component12Component;
  let fixture: ComponentFixture<Lib3childlib9component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib9component12Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib9component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
