import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib6component36Component } from './lib1childlib6component36.component';

describe('Lib1childlib6component36Component', () => {
  let component: Lib1childlib6component36Component;
  let fixture: ComponentFixture<Lib1childlib6component36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib6component36Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib6component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
