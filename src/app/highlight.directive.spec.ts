import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { HighlightComponent } from './highlight/highlight.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Highlight1Component } from './highlight1/highlight1.component';
import { By } from '@angular/platform-browser';

describe('HighlightDirective', () => {
  let fixture :ComponentFixture<HighlightComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ HighlightComponent, HighlightDirective ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .createComponent(HighlightComponent);
    fixture.detectChanges();
  });
  
  
  it('should have skyblue', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    const bgColor = h2.style.backgroundColor;
    expect(bgColor).toBe('skyblue');
  });
});

describe('dynamic highlight testings',()=>{
  let fixture :ComponentFixture<Highlight1Component>;
  let des: DebugElement[];  // the three elements w/ the directive
  let bareH2: DebugElement; // the <h2> w/o the directive
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ HighlightDirective, Highlight1Component ]
    })
    .createComponent(Highlight1Component);
  
    fixture.detectChanges(); // initial binding
  
    // all elements with an attached HighlightDirective
    des = fixture.debugElement.queryAll(By.directive(HighlightDirective));
  
    // the h2 without the HighlightDirective
    bareH2 = fixture.debugElement.query(By.css('h2:not([highlight])'));
  });
  
  // color tests
  it('should have two highlighted elements', () => {
    expect(des.length).toBe(2);
  });
  
  it('should color 1st <h2> background "yellow"', () => {
    const bgColor = des[0].nativeElement.style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });
  
  it('should color 2nd <h2> background w/ default color', () => {
    const dir = des[1].injector.get(HighlightDirective) as HighlightDirective;
    const bgColor = des[1].nativeElement.style.backgroundColor;
    expect(bgColor).toBe(dir.defaultColor);
  });
  
})
