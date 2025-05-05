import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-ls',
  imports: [HeaderComponent, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './crud-ls.component.html',
  styleUrl: './crud-ls.component.css'
})
export class CrudLsComponent {

  employee_form!: FormGroup
  employee_Toggle = false
  
  employee_details: any = []
  updateRecordId: any
  operation: any = "Add"
  
  employeeFormToggle(){
    this.employee_Toggle = !this.employee_Toggle
  }
  
    constructor( private fb: FormBuilder){}
  
    empform_fields = {
      emp_id  : [''],
      emp_name: ['', Validators.required],
      emp_email:['', Validators.required],
      emp_role :['', Validators.required]
    }
  
    ngOnInit(){ 
      this.initializeForm()
      let emp_data = localStorage.getItem('employeeData')
      if(emp_data){
        this.employee_details = JSON.parse(emp_data)
      }
    }
  
    initializeForm(){
      this.employee_form = this.fb.group(this.empform_fields)
    }
  
    saveEmployee() {
      if (this.updateRecordId) {
        this.updateEmployee();
      } else {
        this.addEmployee();
      }
    }
  
    addEmployee() {
      const emp_id = (this.employee_details.at(-1)?.id ?? 0) + 1;
  
      this.employee_details.push({
        "id"       : emp_id,
        "emp_name" : this.employee_form.value.emp_name,
        "emp_email": this.employee_form.value.emp_email,
        "emp_role" : this.employee_form.value.emp_role
      })
  
      this.resetForm()
      this.saveToLocalStorage()
    }
  
    updateEmployee() {
      
      const found = this.employee_details.filter((empData: any) => empData.id == this.updateRecordId);
  
      if (found) {
        found[0].emp_name = this.employee_form.value.emp_name;
        found[0].emp_email = this.employee_form.value.emp_email;
        found[0].emp_role = this.employee_form.value.emp_role;
      }
    
      this.saveToLocalStorage();
      this.resetForm();
    }
    
  
    getDataForEdit(emp_id: any){
      this.updateRecordId = emp_id
      let data = this.employee_details.filter((empData: any) => empData.id == emp_id)
      this.employee_form.patchValue(data[0])

      this.operation = "Update"
      this.employee_Toggle = true
    }
  
    deleteEmployee(emp_id: any){
      this.employee_details = this.employee_details.filter((empData: any) => empData.id != emp_id);
      this.saveToLocalStorage();
    }
  
    resetForm() {
      this.employee_form.reset();
      this.updateRecordId = null;
      this.operation = 'Add';
      this.employee_Toggle = false;
    }
  
    saveToLocalStorage(){
      localStorage.setItem('employeeData', JSON.stringify(this.employee_details))
    }

}
