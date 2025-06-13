import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-static-practise',
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './static-practise.component.html',
  styleUrl: './static-practise.component.css'
})
export class StaticPractiseComponent {

  filterEmployee: any = []

  constructor() {}

  ngOnInit() {
    this.employeeData()
  }

  employees = [
    { name: 'Alice',   designation: 'Developer', salary: 70000 },
    { name: 'Bob',     designation: 'Manager', salary: 90000 },
    { name: 'Charlie', designation: 'Intern', salary: 30000 },
    { name: 'Diana',   designation: 'Developer', salary: 80000 }
  ]

  employeeData() {
    // this.filterEmployee = this.employees.filter(employee => employee.designation == 'Developer')
    from(this.employees).pipe(
      filter(emp => emp.salary > 70000),
      toArray()
    ).subscribe(res => this.filterEmployee = res);

  }
}
