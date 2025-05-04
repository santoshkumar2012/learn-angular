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

  emp_field = {
    emp_id    : [''],
    emp_name  : ['', Validators.required],
    emp_email : ['', Validators.required],
    emp_role  : ['', Validators.required]
    
  }

  constructor(private fb: FormBuilder){}

  ngOnInit(){ this.initializeform() }

  initializeform(){ this.emp_form = this.fb.group(this.emp_field)}

  saveForm(){ this.creatEmp() }

  creatEmp(){
    const emp_id = (this.emp_details.at(-1)?.id ?? 0) + 1;

    this.emp_details.push({
      "id": emp_id,
      "emp_name": this.emp_form.value.emp_name,
      "emp_email": this.emp_form.value.emp_email,
      "emp_role": this.emp_form.value.emp_role,
    })
  }



}
