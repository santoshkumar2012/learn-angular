import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { pipe, filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-staticdata',
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './staticdata.component.html',
  styleUrl: './staticdata.component.css'
})
export class StaticdataComponent {

  filterEmployee: any = []
  searchText: any;

  constructor(){}

  ngOnInit(){
    this.employeeDetails()
  }

  employees = [
  { name: 'Alice', designation: 'Developer', salary: 70000 },
  { name: 'Bob', designation: 'Manager', salary: 90000 },
  { name: 'Charlie', designation: 'Intern', salary: 30000 },
  { name: 'Diana', designation: 'Developer', salary: 80000 }
];

employeeDetails(){
  this.filterEmployee = this.employees.filter(employee => employee.salary < 90000 )
  //this.filterEmployee = this.employees.filter(employee => employee.name.length > 3 )
}

  // RXJS FILTER OPERATOR 
  // employeeDetails() {
  //   from(this.employees).pipe(
  //     filter(emp => emp.name.length > 3),
  //     toArray() // Collect filtered results into an array
  //   ).subscribe(filtered => {
  //     this.filterEmployee = filtered;
  //     console.log('Filtered Employees:', this.filterEmployee);
  //   });
  // }
 
  // RxJS Filter Employees with Salary Greater Than X
  // employeeDetails(){
  //   from(this.employees).pipe(
  //     filter(emp => emp.salary > 75000),
  //     toArray()
  //   ).subscribe(res => this.filterEmployee = res);
  // }

  // // RxJS Filter by Designation (e.g., Only Developers)
  // employeeDetails(){
  //   this.filterEmployee = this.employees.filter(emp => emp.designation === 'Developer');
  // }

  // RxJS Filter by Name Starting with a Specific Letter
  // employeeDetails(){
  //   this.filterEmployee = this.employees.filter(emp => emp.name.startsWith('A'));
  // }

   // RxJS Filter by Multiple Conditions (e.g., Developer with High Salary)
  // employeeDetails(){
  //   this.filterEmployee = this.employees.filter(emp =>
  //     emp.designation === 'Developer' && emp.salary > 75000
  //   );
  // }

    // RxJS Search Employees by Name (Dynamic)
  // employeeDetails(){
  //   this.filterEmployee = this.employees.filter(emp =>
  //     emp.name.toLowerCase().includes(this.searchText.toLowerCase())
  // );
  // }

  //RxJs Highest Score
  // employeeDetails(){
  // this.filterEmployee = [...this.employees]
  // .sort((a, b) => b.salary - a.salary)
  // .slice(0, 3);  // top 3
  // }

}
