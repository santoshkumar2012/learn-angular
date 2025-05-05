import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-observable',
  imports: [HeaderComponent, RouterOutlet, RouterModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {

}
