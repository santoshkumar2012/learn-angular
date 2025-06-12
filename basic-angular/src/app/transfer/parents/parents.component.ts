import { Component } from '@angular/core';
import { ChildsComponent } from "../childs/childs.component";

@Component({
  selector: 'app-parents',
  imports: [ChildsComponent],
  templateUrl: './parents.component.html',
  styleUrl: './parents.component.css'
})
export class ParentsComponent {
parentMessage: string = 'Hello from Parent Component!';
}
