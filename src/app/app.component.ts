import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {PromiseExampleComponent} from "../examples/promise-example/promise-example.component";
import {ObservableExampleComponent} from "../examples/observable-example/observable-example.component";
import {InputBindingExampleComponent} from "../examples/input-binding-example/input-binding-example.component";
import {
  TemplateSyntaxLegacyExampleComponent
} from "../examples/template-syntax-legacy-example/template-syntax-legacy-example.component";
import {
  TemplateSyntaxNewExampleComponent
} from "../examples/template-syntax-new-example/template-syntax-new-example.component";
import {JavascriptRefresherComponent} from "../examples/javascript-refresher/javascript-refresher.component";
import {ChildComponent} from "./child/child.component";
import {CounterService} from "./counter.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {combineLatest, fromEvent, interval, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PromiseExampleComponent,
    ObservableExampleComponent,
    InputBindingExampleComponent,
    TemplateSyntaxLegacyExampleComponent,
    TemplateSyntaxNewExampleComponent,
    JavascriptRefresherComponent,
    ChildComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  valueCounter$: Observable<number> = this.counterService.getValueCounter$();

  timeCounter = 0;

  coordinates = {x: 0, y: 0};

  showTimeIndicator = false;

  numberOfResets = 3;

  constructor(private counterService: CounterService) {
    this.counterService.setResetLimit(3);
    combineLatest([
      fromEvent(document, 'mousemove'),
      interval(1000)
    ])
      .pipe(takeUntilDestroyed())
      .subscribe(([mouseEvent, time]: [any, number]) => {

        this.coordinates = {x: mouseEvent.pageX, y: mouseEvent.pageY};
        this.timeCounter = time || 0;
        this.showTimeIndicator = this.coordinates
          && (this.coordinates.x < this.timeCounter
            || this.coordinates.y < this.timeCounter);
      });
  }

  reset() {
    this.counterService.reset();
  }
}
