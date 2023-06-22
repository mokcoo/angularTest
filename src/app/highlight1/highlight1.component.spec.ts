import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Highlight1Component } from './highlight1.component';

describe('Highlight1Component', () => {
  let component: Highlight1Component;
  let fixture: ComponentFixture<Highlight1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Highlight1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Highlight1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
