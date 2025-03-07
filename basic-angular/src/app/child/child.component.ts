import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() receivedData!: string;

  @Output() messageEvent = new EventEmitter<string>(); // Define EventEmitter
  sendMessage() {
    this.messageEvent.emit("Hello Parent! This is from Child."); // Emit data to parent
  }
  
}
