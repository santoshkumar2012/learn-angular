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
  empupdateRecordId: any
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private toaster: ToastrService
  ) { }

  emp_field = {
    emp_id: [''],
    emp_name: ['', Validators.required],
    emp_email: ['', Validators.required],
    emp_role: ['', Validators.required]
  }

  ngOnInit() {
    this.intializeForm()
    let empdata = localStorage.getItem('employeeData')
    if (empdata) {
      this.emp_details = JSON.parse(empdata)
    }
  }

  intializeForm() {
    this.emp_form = this.fb.group(this.emp_field)
  }

  resetForm() {
    this.intializeForm()
  }

  saveForm() {

    this.formSubmitted = true;
    if (this.emp_form.invalid) {
      this.emp_form.markAllAsTouched();
      const firstInvalidControl = document.querySelector('.ng-invalid');
      if (firstInvalidControl) {
        (firstInvalidControl as HTMLElement).focus();
      }
      return;
    }

    this.formSubmitted = false;

    if (this.empupdateRecordId) {
      this.upateEmployee()
    } else {
      this.getEmp()
    }
  }

  getEmp() {
    let emp_id = (this.emp_details.at(-1)?.id ?? 0) + 1
    this.emp_details.push({
      "id": emp_id,
      "emp_name": this.emp_form.value.emp_name,
      "emp_email": this.emp_form.value.emp_email,
      "emp_role": this.emp_form.value.emp_role
    })
    this.resetForm()
    this.toLocalSaveData()
    this.toaster.success("Employee Data is created")
  }

  upateEmployee() {
    let found = this.emp_details.filter((emp_Data: any) => emp_Data.id == this.empupdateRecordId)
    if (found) {
      found[0].emp_name = this.emp_form.value.emp_name
      found[0].emp_email = this.emp_form.value.emp_email
      found[0].emp_role = this.emp_form.value.emp_role
    }
    this.resetForm()
    this.toLocalSaveData()
    this.toaster.success("Employee is Updated")
  }

  employeeSetEdit(emp_id: any) {
    this.empupdateRecordId = emp_id
    let data = this.emp_details.filter((emp_Data: any) => emp_Data.id == emp_id)
    this.emp_form.patchValue(data[0])
  }

  deleteEmp(emp_id: any) {
    this.emp_details = this.emp_details.filter((emp_Data: any) => emp_Data.id != emp_id)
    this.toLocalSaveData()
    this.toaster.success("Employee is deleted")
  }

  toLocalSaveData() {
    localStorage.setItem('employeeData', JSON.stringify(this.emp_details))
  }

}