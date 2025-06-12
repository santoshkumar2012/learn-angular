import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud-form-dynamic-localhost',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, HeaderComponent],
  templateUrl: './crud-form-dynamic-localhost.component.html',
  styleUrl: './crud-form-dynamic-localhost.component.css'
})
export class CrudFormDynamicLocalhostComponent {

  
  emp_form!: FormGroup
  emp_details: any = []
  empUpdateRecored: any

  constructor(
    private fb: FormBuilder,
    private toaster: ToastrService
  ){}

    // Dynamic form fields
  dynamic_fields = [
  { label: 'Employee Name', key: 'emp_name', type: 'text', required: true },
  { label: 'Email', key: 'emp_email', type: 'email', required: true },
  { label: 'Role', key: 'emp_role', type: 'text', required: true },
  { label: 'Phone No', key: 'emp_phone', type: 'text', required: true }
];

  ngOnInit(){
    this.initializeForm()
    let empdata = localStorage.getItem('employee_data')
    if(empdata){
      this.emp_details = JSON.parse(empdata)
    }
  }

  initializeForm() {
   const formControls: any = {};
  this.dynamic_fields.forEach(field => {
    formControls[field.key] = field.required ? ['', Validators.required] : [''];
  });
  this.emp_form = this.fb.group(formControls);
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
    const emp_id = (this.emp_details.at(-1)?.id ?? 0) + 1
    const formValue = this.emp_form.value;

    this.emp_details.push({
      id: emp_id,
      ...formValue
    });

    this.resetForm();
    this.toLocalSaveData();
    this.toaster.success("Employee data has been added");

  }

  updateEmp(){
    const formValue = this.emp_form.value;
    const found = this.emp_details.find((emp: any) => emp.id == this.empUpdateRecored);

    if (found) {
      Object.assign(found, formValue);
    }

    this.resetForm()
    this.toLocalSaveData()
    this.toaster.success("Employee data has been updated")
  }

empEditUpdate(emp_id: any) {
  this.empUpdateRecored = emp_id;
  const data = this.emp_details.find((emp: any) => emp.id === emp_id);
  if (data) {
    // Only pick the fields that exist in the form
    const patchValues: any = {};
    this.dynamic_fields.forEach(field => {
      patchValues[field.key] = data[field.key];
    });

    this.emp_form.patchValue(patchValues);
  }
}

  deleteEmp(emp_id: any){
    this.emp_details = this.emp_details.filter((emp_data: any) => emp_data.id != emp_id)
    this.toLocalSaveData()
    this.toaster.success("Employee data has been deleted")
  }

  toLocalSaveData(){
    localStorage.setItem('employee_data', JSON.stringify(this.emp_details))
  }

}
