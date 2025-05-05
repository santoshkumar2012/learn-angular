import { Component } from '@angular/core';
import { HeaderComponent } from "../../../header/header.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {

}
