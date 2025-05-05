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
  isToggle = false
  updateRecordId: any

  constructor(private fb: FormBuilder){}

  emp_field = {
    emp_id    : [''],
    emp_name  : ['', Validators.required],
    emp_email : ['', Validators.required],
    emp_role  : ['', Validators.required]
    
  }

  formToggle(){
    this.isToggle = !this.isToggle
  }

  ngOnInit(){ 
    this.initializeform()
    let emp_data = localStorage.getItem('employeeData')
    if(emp_data) {
      this.emp_details = JSON.parse(emp_data)
    }
  }

  initializeform(){ this.emp_form = this.fb.group(this.emp_field)}

  reset(){this.initializeform()}

  saveEmployee(){ 
    if (this.updateRecordId) {
      this.updateEmployee();
    } else {
      this.addEmployee();
    }
  }

  addEmployee(){
    const emp_id = (this.emp_details.at(-1)?.id ?? 0) + 1;

    this.emp_details.push({
      "id": emp_id,
      "emp_name": this.emp_form.value.emp_name,
      "emp_email": this.emp_form.value.emp_email,
      "emp_role": this.emp_form.value.emp_role,
    })

    this.reset();
    this.saveToLocalStorage();
  }

  updateEmployee() {
      
    const found = this.emp_details.filter((empData: any) => empData.id == this.updateRecordId);

    if (found) {
      found[0].emp_name = this.emp_form.value.emp_name;
      found[0].emp_email = this.emp_form.value.emp_email;
      found[0].emp_role = this.emp_form.value.emp_role;
    }
  
    this.saveToLocalStorage();
    this.reset();
  }

  getDataForEdit(emp_id: any){
    this.updateRecordId = emp_id
    let data = this.emp_details.filter((empData: any) => empData.id == emp_id)
    this.emp_form.patchValue(data[0])

    // this.operation = "Update"
    this.isToggle = true
  }

  deleteEmp(emp_id: any){
    this.emp_details = this.emp_details.filter((empData: any) => empData.id != emp_id);
    this.saveToLocalStorage();
  }

  saveToLocalStorage(){
    localStorage.setItem('employeeData', JSON.stringify(this.emp_details))
  }

}
