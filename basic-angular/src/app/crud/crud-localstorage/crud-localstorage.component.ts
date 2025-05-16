import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-localstorage',
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './crud-localstorage.component.html',
  styleUrl: './crud-localstorage.component.css'
})
export class CrudLocalstorageComponent {

  emp_form!: FormGroup
  emp_details: any = []
  emp_updatedRecordId: any
  operation: any = 'Add'

  constructor(
    private fb: FormBuilder,
    private toaster: ToastrService
  ){}
  
  emp_field ={
    emp_id    : [''],
    emp_name  : ['', Validators.required],
    emp_email : ['', Validators.required],
    emp_role  : ['', Validators.required]
  }

  ngOnInit(){ 
    this.initializeForm()
     let empData = localStorage.getItem('employeeData')
    if(empData){
      this.emp_details = JSON.parse(empData)
    }
   }

  initializeForm(){
    this.emp_form = this.fb.group(this.emp_field)
  }

  resetForm(){ this.initializeForm() }

  empDataSave(){
    if(this.emp_updatedRecordId){
      this.empUpdate()
    } else {
      this.getEmp()
    }
  }

  getEmp(){
    let emp_id = (this.emp_details.at(-1)?.id ?? 0) + 1
    this.emp_details.push({
      "id": emp_id,
      "emp_name"  : this.emp_form.value.emp_name,
      "emp_email" : this.emp_form.value.emp_email,
      "emp_role"  : this.emp_form.value.emp_role
    })
    this.resetForm()
    this.toLocalSaveData()
    this.toaster.success("Employee data added")
  }

  empUpdate(){
    let found = this.emp_details.filter((empData: any) => empData.id == this.emp_updatedRecordId)
    if(found){
      found[0].emp_name = this.emp_form.value.emp_name
      found[0].emp_email = this.emp_form.value.emp_email
      found[0].emp_role = this.emp_form.value.emp_role
    }
    this.resetForm()
    this.toLocalSaveData()
    this.toaster.success("Employee Data Updated")
  }

  empUpdateEdit(emp_id: any){
    this.emp_updatedRecordId = emp_id
    let data = this.emp_details.filter((empData: any) => empData.id == emp_id)
    this.emp_form.patchValue(data[0])
    this.operation = 'Update'
  }

  deleteEmp(emp_id: any){
    this.emp_details = this.emp_details.filter((empData: any) => empData.id != emp_id)
    this.toLocalSaveData()
    this.toaster.success("Employee delete Successfull")
  }

  toLocalSaveData(){
    localStorage.setItem('employeeData', JSON.stringify(this.emp_details))
  }

}
