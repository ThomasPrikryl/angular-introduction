import {Component} from '@angular/core';

@Component({
  selector: 'app-javascript-refresher',
  standalone: true,
  imports: [],
  templateUrl: './javascript-refresher.component.html',
  styleUrl: './javascript-refresher.component.scss'
})
export class JavascriptRefresherComponent {

  constructor() {

    this.optionalChainingExamples();

    this.logicalOperatorExamples();

    this.nullishCoalescingExamples();

    this.spreadSyntaxExamples();

    this.destructuringExamples();

  }

  private optionalChainingExamples() {
    const person: any = {
      name: 'Steve',
      address: {
        street: 'ExampleStreet',
      },
    };

    console.log(person.name);
    // Output: 'Steve'

    console.log(person.address?.street);
    // Output: 'ExampleStreet'

    console.log(person.job?.title);
    // Output: undefined

    console.log(person.someNonExistentMethod?.());
    // Output: undefined

    // console.log(person.someNonExistentMethod());
    // Error: person.someNonExistentMethod is not a function
  }

  private logicalOperatorExamples() {
    // Logical AND

    console.log(3 > 0 && -2 > 0);
    // Output: false
    console.log(true && 'Thomas');
    // Output: 'Thomas'
    console.log(false && 'Thomas');
    // Output: false

    // Logical OR

    console.log(3 > 0 || -2 > 0);
    // Output: true
    console.log(0 || 5);
    // Output: 5
    console.log(5 || 0);
    // Output: 5
    console.log(true || 0);
    // Output: true
    console.log(false || 0);
    // Output: 0
  }

  private nullishCoalescingExamples() {
    // Nullish coalescing operator

    console.log(null ?? 'some other string');
    // Output: "some other string"
    console.log(undefined ?? 'some other string');
    // Output: "some other string"
    console.log(0 ?? 42);
    // Output: 0


    // Nullish coalescing assignment

    const x: any = {a: 50};
    x.a ??= 10;
    console.log(x.a);
    // Output: 50
    x.b ??= 25;
    console.log(x.b);
    // Output: 25
  }

  private spreadSyntaxExamples() {
    let arr1 = [0, 1, 2];
    const arr2 = [3, 4, 5];

    arr1 = [...arr2, ...arr1];
    console.log(arr1); // [3, 4, 5, 0, 1, 2]

    const obj1 = {foo: "bar", x: 42};
    const obj2 = {bar: "baz", y: 13};
    const obj3 = {y: 31};

    const mergedObj = {...obj1, ...obj2};
    console.log(mergedObj);
    // Output: { foo: "bar", x: 42, bar: "baz", y: 13 }
    const mergedObj2 = {...obj1, ...obj2, ...obj3};
    console.log(mergedObj2);
    // Output: { foo: "bar", x: 42, bar: "baz", y: 31 }
    const clonedObj = {...obj1};
    console.log(clonedObj, clonedObj === obj1);
    // Output: { foo: "bar", x: 42 }, false
  }

  private destructuringExamples() {
    let a, b, rest;
    [a, b] = [10, 20];

    console.log(a, b);
    // Output: 10, 20

    [a, b, ...rest] = [10, 20, 30, 40, 50];

    console.log(rest);
    // Output: Array [30, 40, 50]

    const obj = {x: 5, y: 13};
    const {x, y} = obj;
    console.log(x, y);
    // Output: 5, 13
  }

}
