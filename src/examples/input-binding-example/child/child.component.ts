import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() item?: number;

  @Output() itemChange = new EventEmitter<number>();

  username= "";

  addCount() {
    this.itemChange.emit((this.item || 0)+1);
  }

  updateUsername($event: any) {
    this.username = $event;
  }
}
