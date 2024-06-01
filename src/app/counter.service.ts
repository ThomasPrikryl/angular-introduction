import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public valueCounter = 0;

  changeCounter = 0;

  constructor() { }

  setValueCounter(value: number) {
    this.valueCounter = value;
    this.changeCounter++;
    console.log('Change counter:', this.changeCounter);

    if (this.changeCounter %100 ===0) {
      console.log('Maybe you should take a break?');
    }
  }
}
