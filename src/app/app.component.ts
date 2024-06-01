import {CommonModule} from '@angular/common';
import {AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
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

  valueCounter = 5;

  timeCounter = 0;

  constructor() {
    setInterval(() => {
      this.timeCounter++;
    }, 1000);
  }
}
