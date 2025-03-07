import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  parentMessage: string = 'Hello from Parent!';

  receivedMessage: string = '';

  receiveMessage(message: string) {
    this.receivedMessage = message; // Receive data from child
  }

}
