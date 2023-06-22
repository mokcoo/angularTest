import { Component, Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

}

@Injectable()
export class ValueService {
  value = 'real value';

  getValue() { return this.value; }
  setValue(value: string) { this.value = value; }

  getObservableValue() { return of('observable value'); }

  getPromiseValue() { return Promise.resolve('promise value'); }

  getObservableDelayValue() {
    return of('observable delay value').pipe(delay(10));
  }
}

@Injectable()
export class MasterService {
  constructor(private valueService: ValueService) { }
  getValue() { return this.valueService.getValue(); }
}
