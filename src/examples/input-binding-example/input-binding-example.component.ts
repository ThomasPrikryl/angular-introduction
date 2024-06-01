import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-input-binding-example',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-binding-example.component.html',
  styleUrl: './input-binding-example.component.scss'
})
export class InputBindingExampleComponent {
  myString = '';
  item = 0;

  log($event: any) {
    console.log($event.target.value);
  }

  handleEvent($event: number) {
    console.log($event)
  }

  updateItem($event: number) {
    this.item = $event;
    console.log($event);
  }
}
