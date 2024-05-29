import { Component } from '@angular/core';
import {CommonModule, DatePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-template-syntax-legacy-example',
  standalone: true,
  imports: [
    CommonModule, FormsModule, DatePipe
  ],
  templateUrl: './template-syntax-legacy-example.component.html',
  styleUrl: './template-syntax-legacy-example.component.scss'
})
export class TemplateSyntaxLegacyExampleComponent {

  simpleString: string = 'Some Simple String';
  dateThatNeedsFormatting = new Date(2024, 4, 20);
  condition = true;
  color = 'green';

}
