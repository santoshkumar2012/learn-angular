import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-parent',
  imports: [HeaderComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  parentMessage: string = 'Hello from Parent!';

  receivedMessage: string = '';

  receiveMessage(message: string) {
    this.receivedMessage = message; // Receive data from child
  }

  constructor(){
    console.log('Check--->', "Parent");
  }

}
