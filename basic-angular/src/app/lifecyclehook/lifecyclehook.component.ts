import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-lifecyclehook',
  imports: [ChildComponent],
  templateUrl: './lifecyclehook.component.html',
  styleUrl: './lifecyclehook.component.css'
})
export class LifecyclehookComponent {
  name = 'coder';

  fun(){
    this.name = "Value has been changed"
  }
}
