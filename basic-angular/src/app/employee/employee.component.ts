import { Component } from '@angular/core';
import { NgModel, Validators } from '@angular/forms';
import { HttpSharedService } from '../http-shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  constructor( private _http: HttpSharedService){}

  employees = [
    { employee_id: 1, employee_name:"Santosh Kumar", employee_role: "Web Developer", employee_address: "Delhi" },
    { employee_id: 2, employee_name:"Sohan Kumar", employee_role: "php Developer", employee_address: "Kolkata" },
    { employee_id: 3, employee_name:"Mohan Kumar", employee_role: "Web Designer", employee_address: "Jaipur" },
]

addEmployee(){
  this.employees.push({
    employee_id: 2,
    employee_name: "Pankaj Kumar",
    employee_role: "Dot Net Developer",
    employee_address: "Pune"
  })
}

deleteEmployee(index: number){
  this.employees.splice(index, 1)
}

}
