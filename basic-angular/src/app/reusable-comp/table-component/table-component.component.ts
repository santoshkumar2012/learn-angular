import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-component',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})
export class TableComponentComponent {

   @Input() columns: string[] = [];
  @Input() data: any[] = [];

  @Input() text: string = '';
  @Input() limit: number = 100;

   isExpanded: boolean = false;

  toggleShow() {
    this.isExpanded = !this.isExpanded;
  }
  
}
