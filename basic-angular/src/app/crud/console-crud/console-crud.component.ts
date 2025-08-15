import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-console-crud',
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './console-crud.component.html',
  styleUrl: './console-crud.component.css'
})
export class ConsoleCrudComponent {

  empForm!: FormGroup
  empDetails: any = []
  employeeUpdateRecord: any

  existingEmails = ['web.santo2012@gmail.com'];

  constructor( private fb: FormBuilder, private toaster: ToastrService ){}

  empFields = {
    id: [''],
    name: ['', Validators.required],
    email: ['', [
        Validators.required,
        this.emailExistsValidator(this.existingEmails)
      ]],
    phone: ['', Validators.required]
  }

    emailExistsValidator(existingEmails: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      return existingEmails.includes(control.value) ? { emailExists: true } : null;
    };
  }

  ngOnInit(){
    this.initialization()
    let empData = localStorage.getItem('employee_id')
    if(empData){
      this.empDetails = JSON.parse(empData)
    }

  }

  initialization(){
    this.empForm = this.fb.group(this.empFields)
  }

  resetForm(){
    this.initialization()
  }

 empSave(){
  if(this.employeeUpdateRecord){
    this.empEdit()
  } else {
    this.onSubmit()
  }
 }

  onSubmit(){
    let employeeId = (this.empDetails.at(-1)?.id ?? 0) + 1
    this.empDetails.push({
      id: employeeId,
      name : this.empForm.value.name,
      email: this.empForm.value.email,
      phone: this.empForm.value.phone
    })
    console.log(this.empForm.value)
    this.toLocalHost()
    this.resetForm()
    this.toaster.success("Employee record is succefully added")
  }

  empEdit(){
    let found = this.empDetails.filter((employeeId: any) => employeeId.id == this.employeeUpdateRecord)

    if(found){
      found[0].name = this.empForm.value.name
      found[0].email = this.empForm.value.email
      found[0].phone = this.empForm.value.phone
    }
    this.toLocalHost()
    this.resetForm()
    this.toaster.success("Employee data is udpated")
  }

  empUpdate(empId: any){
    this.employeeUpdateRecord = empId
    let data = this.empDetails.filter((employeeId: any) => employeeId.id == empId)
    this.empForm.patchValue(data[0])
  }

  deleteEmp(empId: any){
    this.empDetails = this.empDetails.filter((employeeId: any) => employeeId.id != empId)
    this.toaster.success("Employee data is deleted")
    this.toLocalHost()
  }

  toLocalHost(){
    localStorage.setItem('employee_id', JSON.stringify(this.empDetails))
  }


}
