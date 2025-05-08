import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-lg-practise',
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './crud-lg-practise.component.html',
  styleUrl: './crud-lg-practise.component.css'
})
export class CrudLgPractiseComponent {

  emp_form!: FormGroup
  emp_details: any = []
  updateRecordid: any
  
  constructor(private fb: FormBuilder){}

  emp_fields = {
    emp_id    : [''],
    emp_name  : ['', Validators.required],
    emp_email : ['', Validators.required],
    emp_role  : ['', Validators.required]
  }

  ngOnInit(){ 
    this.initializeForm()
    let emp_data = localStorage.getItem('employeeData')
    if(emp_data){
      this.emp_details = JSON.parse(emp_data)
    }
  }

  initializeForm(){
    this.emp_form = this.fb.group(this.emp_fields)
  }

  resetForm(){ this.initializeForm()}

  saveEmployeeData(){
    if(this.updateRecordid){
      this.updateEmp()
    }else{
      this.createEmp()
    }
  }

  createEmp(){
    let emp_id = (this.emp_details.at(-1)?.id ?? 0) + 1;

    this.emp_details.push({
      "id": emp_id,
      "emp_name"  : this.emp_form.value.emp_name,
      "emp_email" : this.emp_form.value.emp_email,
      "emp_role"  : this.emp_form.value.emp_role
    })

    this.tosaveLocalHost()
    this.resetForm()
  }

  updateEmp(){
    let found = this.emp_details.filter((emp_data: any) => emp_data.id == this.updateRecordid)
    if(found){
      found[0].emp_name = this.emp_form.value.emp_name,
      found[0].emp_email = this.emp_form.value.emp_email,
      found[0].emp_role = this.emp_form.value.emp_role
    }
    this.tosaveLocalHost()
    this.resetForm()
  }

  updateRecordEdit(emp_id: any){
    this.updateRecordid = emp_id
    let data = this.emp_details.filter((emp_data: any) => emp_data.id == emp_id)
    if(data){
      this.emp_form.patchValue(data[0])
    }
  }


  deleteEmp(emp_id: any){
    this.emp_details = this.emp_details.filter((emp_data:any) => emp_data.id != emp_id)
    this.tosaveLocalHost()
  }

  tosaveLocalHost(){
    localStorage.setItem('employeeData', JSON.stringify(this.emp_details))
  }

}
