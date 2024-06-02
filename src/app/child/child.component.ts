import {AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {CounterService} from "../counter.service";
import {first} from "rxjs";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  valueCounter = 0;

  constructor(private counterService: CounterService) {
    console.log('constructor');
    this.counterService
      .getValueCounter$()
      .pipe(first())
      .subscribe((value: number) => {
      this.valueCounter = value;
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  decrement() {
    if (this.valueCounter > 0) {
      this.valueCounter--;
      this.counterService.setValueCounter(this.valueCounter);
    }
  }

  increment() {
    if (this.valueCounter < 20) {
      this.valueCounter++;
      this.counterService.setValueCounter(this.valueCounter);
    }
  }

  get counterArray() {
    return new Array(this.valueCounter);
  }
}
