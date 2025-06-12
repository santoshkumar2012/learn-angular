import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childs',
  imports: [],
  templateUrl: './childs.component.html',
  styleUrl: './childs.component.css'
})
export class ChildsComponent {

  @Input() message: string = ''; // receives data from parent

}
