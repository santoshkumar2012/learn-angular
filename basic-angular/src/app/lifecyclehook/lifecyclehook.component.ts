import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-lifecyclehook',
  imports: [ChildComponent, HeaderComponent],
  templateUrl: './lifecyclehook.component.html',
  styleUrl: './lifecyclehook.component.css'
})
export class LifecyclehookComponent {

  name = 'coder';

  fun(){
    this.name = "Value has been changed"
  }

  // color = 'red';
  // onclick(){
  //   this.color = "Color is"
  // }


}
