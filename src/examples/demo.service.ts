import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  someState = null;

  constructor() { }

  public doSomething() {
    // ...
  }
}
