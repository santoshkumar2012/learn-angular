import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud-localstorage',
  imports: [HeaderComponent, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './crud-localstorage.component.html',
  styleUrl: './crud-localstorage.component.css'
})
export class CrudLocalstorageComponent {

  emp_form!: FormGroup
  emp_details: any = []
  empUpdateRecored: any

  constructor(
    private fb: FormBuilder,
    private toaster: ToastrService
  ){}

  emp_fields = {
    emp_id    : [''],
    emp_name  : ['', Validators.required],
    emp_email : ['', Validators.required],
    emp_role  : ['', Validators.required]
  }

  ngOnInit(){
    this.initializeForm()
    let empdata = localStorage.getItem('employee_data')
    if(empdata){
      this.emp_details = JSON.parse(empdata)
    }
  }

  initializeForm(){
    this.emp_form = this.fb.group(this.emp_fields)
  }

  resetForm(){
    this.initializeForm()
    this.empUpdateRecored = null;
  }

  empSaveData(){
    if(this.empUpdateRecored){
      this.updateEmp()
    } else {
      this.getEmp()
    }
  }

  getEmp(){
    let emp_id = (this.emp_details.at(-1)?.id ?? 0) + 1

    if (this.emp_form.valid) {
    this.emp_details.push({
      "id"        : emp_id,
      "emp_name"  : this.emp_form.value.emp_name,
      "emp_email" : this.emp_form.value.emp_email,
      "emp_role"  : this.emp_form.value.emp_role
    })
    this.resetForm();
    this.toLocalSaveData();
    this.toaster.success("Employee data has been added successfully!")
  } else {
    this.toaster.error("Form is invalid. Please correct the errors.")
  }
  }

  updateEmp(){
    let found = this.emp_details.filter((emp_data: any) => emp_data.id == this.empUpdateRecored)

    if(found){
      found[0].emp_name = this.emp_form.value.emp_name
      found[0].emp_email = this.emp_form.value.emp_email
      found[0].emp_role = this.emp_form.value.emp_role
    }
    this.resetForm()
    this.toLocalSaveData()
    this.toaster.success("Employee data has been updated")
  }

  empEditUpdate(emp_id: any){
    this.empUpdateRecored = emp_id
    let data = this.emp_details.filter((emp_data:any) => emp_data.id == emp_id)
    this.emp_form.patchValue(data[0])
  }

  deleteEmp(emp_id: any){
    this.emp_details = this.emp_details.filter((emp_data: any) => emp_data.id != emp_id)
    this.toLocalSaveData()
    this.toaster.success("Employee data has been deleted")
  }

  toLocalSaveData(){
    localStorage.setItem('employee_data', JSON.stringify(this.emp_details))
  }


public staffs = [
{ staff_name: "Rakesh", age:35, salary:50000, },
{ staff_name: "Mohan", age:35, salary:100000, },
{ staff_name: "Sohan", age:35, salary:30000, },
{ staff_name: "Jhannu", age:35, salary:100000, },
{ staff_name: "Pradeep", age:35, salary:50000, },
{ staff_name: "Kailash", age:35, salary:100000, },
{ staff_name: "Jhunjhunwala", age:35, salary:100000, }
]


isVisiable = true
toggleButton(){
  this.isVisiable = !this.isVisiable
 }



}