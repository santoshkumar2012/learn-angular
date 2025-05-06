import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-lg-practise',
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './crud-lg-practise.component.html',
  styleUrl: './crud-lg-practise.component.css'
})
export class CrudLgPractiseComponent {

  emp_form!: FormGroup
  emp_details: any = []

  empUpdateRecordid: any

  constructor( private fb: FormBuilder){}

  emp_field = {
    emp_id: [''],
    emp_name: ['', Validators.required],
    emp_email: ['', Validators.required],
    emp_role: ['', Validators.required]
  }

  ngOnInit(){ 
    this.initializeForm()
    let emp_data = localStorage.getItem('employeeData')
    if(emp_data){
      this.emp_details = JSON.parse(emp_data)
    }
   }

  initializeForm(){
    this.emp_form = this.fb.group(this.emp_field)
  }

  resetFrom(){
    this.initializeForm()
  }

  saveEmployee(){
    if(this.empUpdateRecordid){
      this.updateEmp()
    }
    else {
      this.addEmployee()
    }
  }

  addEmployee(){
    let emp_id = (this.emp_details.at(-1)?.id ?? 0) + 1;

    this.emp_details.push({
      "id": emp_id,
      "emp_name": this.emp_form.value.emp_name,
      "emp_email": this.emp_form.value.emp_email,
      "emp_role": this.emp_form.value.emp_role,
    })
    this.resetFrom()
    this.toSaveLocalStorage()
  }

  updateEmp(){
    let found = this.emp_details.filter((emp_data: any) => emp_data.id == this.empUpdateRecordid)
    if(found){
      found[0].emp_name = this.emp_form.value.emp_name;
      found[0].emp_email = this.emp_form.value.emp_email;
      found[0].emp_role = this.emp_form.value.emp_role
    }
    this.resetFrom()
    this.toSaveLocalStorage()
  }

  empUpdateEdit(emp_id: any){
    this.empUpdateRecordid = emp_id;
    let data = this.emp_details.filter((emp_data: any) => emp_data.id == emp_id)
    this.emp_form.patchValue(data[0])
  }

  deleteEmployee(emp_id: any){
    this.emp_details = this.emp_details.filter((emp_data: any) => emp_data.id != emp_id)
  }

  toSaveLocalStorage(){
    localStorage.setItem('employeeData', JSON.stringify(this.emp_details))
  }

}
