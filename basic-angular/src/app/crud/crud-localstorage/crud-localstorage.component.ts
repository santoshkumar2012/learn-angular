import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  updatedId: any

  constructor( private fb: FormBuilder){}

  emp_fields = {
    emp_id    : [''],
    emp_name  : ['', Validators.required],
    emp_email : ['', Validators.required, Validators.email],
    emp_role  : ['', Validators.required]
  }

  ngOnInit(){ 
    this.initializeForm() 
    let empdata = localStorage.getItem('empData')
    if(empdata){
      this.emp_details = JSON.parse(empdata)
    }
  }

   initializeForm(){
    this.emp_form = this.fb.group(this.emp_fields)
  }

  resetForm(){ this.initializeForm() }

  saveEmpData(){ this.addEmp() }

  addEmp(){
    let emp_id = (this.emp_details.at(-1)?.id ?? 0) + 1

    this.emp_details.push({
      "id": emp_id,
      "emp_name": this.emp_form.value.emp_name,
      "emp_email": this.emp_form.value.emp_email,
      "emp_role": this.emp_form.value.emp_role
    })

    this.toSaveLocalStorage()
    this.resetForm()
  }

  updateEmp(){
    let found = this.emp_details.filter((empData: any) => empData.id == this.updatedId)
    if(found){
      found[0].emp_name = this.emp_form.value.emp_name
      found[0].emp_email = this.emp_form.value.emp_email
      found[0].emp_role = this.emp_form.value.emp_role
    }
    this.resetForm()
  }

  updateEdit(emp_id: any){
    this.updatedId = emp_id
    let data = this.emp_details.filter((empData: any) => empData.id == emp_id )
    if(data){
      this.emp_form.patchValue(data[0])
    }
  }


 deleteEmp(emp_id: any){
  this.emp_details = this.emp_details.filter((empData: any) => empData.id != emp_id)
  this.toSaveLocalStorage()
 }

 toSaveLocalStorage(){
  localStorage.setItem('empData', JSON.stringify(this.emp_details))
 }


}
