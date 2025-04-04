import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isVisiable = true
  toggleButton(){
    this.isVisiable = !this.isVisiable
      }  
      
  display = false

  public persons = [
    {first_name: "Santosh", last_name: "Kumar", age:35, },
    {first_name: "Pragyansh", last_name: "Kumar", age:6, },
    {first_name: "Nityansh", last_name: "Kumar", age:7, }
  ]

      
  }