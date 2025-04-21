import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
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

  public staffs = [
    { staff_name: "Rakesh", age:35, salary:50000, },
    { staff_name: "Mohan", age:35, salary:100000, },
    { staff_name: "Sohan", age:35, salary:30000, },
    { staff_name: "Jhannu", age:35, salary:100000, },
    { staff_name: "Pradeep", age:35, salary:50000, },
    { staff_name: "Kailash", age:35, salary:100000, },
    { staff_name: "Jhunjhunwala", age:35, salary:100000, }
  ]

      
  }