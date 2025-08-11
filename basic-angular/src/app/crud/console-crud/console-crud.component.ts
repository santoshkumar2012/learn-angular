import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-console-crud',
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './console-crud.component.html',
  styleUrl: './console-crud.component.css'
})
export class ConsoleCrudComponent {

  emp_form!: FormGroup
  emp_details: any = []

  constructor( private fb: FormBuilder){}

  emp_fields = {
    name : [''],
    email: [''],
    phone: ['']
  }

  ngOnInit(){
    this.initializeForm()
  }

  initializeForm(){
    this.emp_form = this.fb.group(this.emp_fields)
  }

  onSubmit(){
    this.emp_details.push({
      "name" : this.emp_form.value.name,
      "email": this.emp_form.value.email,
      "phone": this.emp_form.value.phone
    })
    console.log(this.emp_form.value)
  }

}