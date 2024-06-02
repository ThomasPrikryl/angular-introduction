import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  @Input() valueCounter: number = 0;

  @Output() valueCounterChange = new EventEmitter<number>();

  constructor() {
    console.log('constructor');
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
      this.valueCounterChange.emit(this.valueCounter);
    }
  }

  increment() {
    if (this.valueCounter < 20) {
      this.valueCounter++;
      this.valueCounterChange.emit(this.valueCounter);
    }
  }

  get counterArray() {
    return new Array(this.valueCounter);
  }
}
