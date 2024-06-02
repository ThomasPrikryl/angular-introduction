import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  valueCounter$ = new BehaviorSubject<number>(0);

  changeCounter = 0;

  resetLimit = 0;

  resetCounter = 0;

  constructor() {

  }

  setValueCounter(value: number) {
    this.valueCounter$.next(value);
    this.changeCounter++;
    console.log('Change counter:', this.changeCounter);

    if (this.changeCounter % 100 === 0) {
      console.log('Maybe you should take a break?');
    }
  }

  getValueCounter$(): Observable<number> {
    return this.valueCounter$;

    // ----------------------------------------------------------
    // Enable to track the calls to this observable
    // return this.valueCounter$.pipe(tap((value: number) => {
    //   console.log('Value counter:', value);
    // }));
  }

  reset() {
    if (this.resetCounter < this.resetLimit) {
      this.resetCounter++;
      this.setValueCounter(0);
    }
  }

  setResetLimit(limit: number) {
    this.resetLimit = limit;
  }
}
