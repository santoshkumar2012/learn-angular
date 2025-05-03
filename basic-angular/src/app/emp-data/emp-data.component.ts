import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-emp-data',
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './emp-data.component.html',
  styleUrl: './emp-data.component.css'
})
export class EmpDataComponent {

  employee_form!: FormGroup

  employee_details: any = []

  employee_fields = {
    emp_id: [''],
    emp_name: ['', Validators.required],
    emp_email: ['', Validators.required],
    emp_phone: ['', Validators.required]
  }

  constructor(private fb: FormBuilder){}

  ngOnInit(){ 
    this.initializeForm() 
    let emp_data = localStorage.getItem('employeeData')
    if(emp_data){
      this.employee_details = JSON.parse(emp_data)
    } 
  }

  initializeForm(){
    this.employee_form = this.fb.group(this.employee_fields)
  }

  saveForm(){ this.addEmployee() }

  addEmployee(){
   
    const emp_id = (this.employee_details.at(-1)?.id ?? 0) + 1;

    this.employee_details.push({
      "id": emp_id,
      "emp_name" : this.employee_form.value.emp_name,
      "emp_email" : this.employee_form.value.emp_email,
      "emp_phone" : this.employee_form.value.emp_phone
    })

    this.saveLocalStorage()

  }

  deleteEmployee(emp_id: any){
    this.employee_details = this.employee_details.filter((empData: any) => empData.id != emp_id)
    this.saveLocalStorage()
  }

  saveLocalStorage(){
    localStorage.setItem('employeeData', JSON.stringify(this.employee_details))
  }

}
