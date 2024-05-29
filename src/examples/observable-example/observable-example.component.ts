import {Component} from '@angular/core';
import {catchError, map, of, tap, throwError} from 'rxjs';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-observable-example',
  standalone: true,
  imports: [],
  templateUrl: './observable-example.component.html',
  styleUrl: './observable-example.component.scss'
})
export class ObservableExampleComponent {

  result: any;

  constructor() {

    const numbers$ = of(1, 2, 3, 4, 5)
      .pipe(
        tap(value => console.log(value)),
        map(value => value * 1000),
        takeUntilDestroyed()
      );
    numbers$.subscribe({
      next: value => {
        this.result = value;
        console.log('NEXT', value);
      },
      error: error => console.error('ERROR', error),
      complete: () => console.log('COMPLETED')
    });

    const error$ =
      throwError(() => 'This is an error!');

    error$
      .pipe(
        catchError(error => {
          console.error('Crisis averted, error caught: ', error);
          return of('Data stream continues');
        })
      ).subscribe(console.log)
  }

}
