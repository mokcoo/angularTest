import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeComponent } from './pipe.component';
import { FormsModule } from '@angular/forms';
describe('PipeComponent', () => {
  let component: PipeComponent;
  let fixture: ComponentFixture<PipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ PipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should convert hero name to Title Case', () => {
    // get the name's input and display elements from the DOM
    const hostElement: HTMLElement = fixture.nativeElement!;
    const nameInput: HTMLInputElement = hostElement.querySelector('input')!;
    const nameDisplay: HTMLElement = hostElement.querySelector('p')!;
  
    // simulate user entering a new name into the input box
    nameInput.value = 'quick BROWN  fOx';
  
    // Dispatch a DOM event so that Angular learns of input value change.
    nameInput.dispatchEvent(new Event('input'));
  
    // Tell Angular to update the display binding through the title pipe
    fixture.detectChanges();
  
    expect(nameDisplay.textContent).toBe('Quick Brown  Fox');
  });
});
