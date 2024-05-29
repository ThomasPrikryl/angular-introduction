import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-promise-example',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './promise-example.component.html',
  styleUrl: './promise-example.component.scss'
})
export class PromiseExampleComponent {

  result = 'WAITING';

  constructor() {

    function fetchData() {
      return new Promise((resolve, reject) => {
        // Run async task
        setTimeout(() => {
          // Randomize the outcome
          if (Math.random() > .5) {
            // Resolve the promise
            resolve({ result: "Data fetched successfully" });
          } else {
            // Reject the promise
            reject('An error occurred');
          }
        }, 2000);
      });
    }

    fetchData()
      .then((data: any) => {
        this.result = 'SUCCESS';
        console.log(data?.result);
      })
      .catch((error) => {
        this.result = 'ERROR';
        console.error("Error:", error);
      });
  }

}
