import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() name: string = ''; // Receiving "name" from parent
  changeMsg: string = '';
  

  // @Input() receivedData!: string;
  // @Output() messageEvent = new EventEmitter<string>(); // Define EventEmitter
  // sendMessage() {
  //   this.messageEvent.emit("Hello Parent! This is from Child."); // Emit data to parent
  // }

  // @Input() item: any;
  // @Input() items: any

  // constructor(){
  //   console.log("child components")
  // }

  // ngOnChanges(){
  //   alert("Data has been updated by parent component...")
  //   // console.log('Changes detected' );
  // }
  
}
