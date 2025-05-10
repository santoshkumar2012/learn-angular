import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-lg-practise',
  imports: [HeaderComponent, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './crud-lg-practise.component.html',
  styleUrl: './crud-lg-practise.component.css'
})
export class CrudLgPractiseComponent {

  emp_form!: FormGroup;
  emp_details = [
    {
      emp_id: 1,
      emp_name: "Achyut Kadam Singh",
      emp_email: "achyut@gmail.com",
      emp_role: "WebDeveloper"
    },
    {
      emp_id: 2,
      emp_name: "Gorakh Sans",
      emp_email: "gorakh@gmail.com",
      emp_role: "Fullstack Developer"
    },
    {
      emp_id: 3,
      emp_name: "Achyut Kadam",
      emp_email: "achyut@gmail.com",
      emp_role: "Senior webDeveloper"
    }
  ];
  empUpdateid: number | null = null;

  constructor(private fb: FormBuilder) {}

  emp_fields = {
    emp_id: [''],
    emp_name: ['', Validators.required],
    emp_email: ['', Validators.required],
    emp_role: ['', Validators.required]
  };

  ngOnInit() {
    this.intializeForm();
  }

  intializeForm() {
    this.emp_form = this.fb.group(this.emp_fields);
  }

  resetForm() {
    this.intializeForm();
    this.empUpdateid = null;
  }

  saveEmployeeData() {
    if (this.empUpdateid !== null) {
      this.empUpdate();
    } else {
      this.createEmp();
    }
  }

  createEmp() {
    const newId = this.emp_details.length > 0
      ? Math.max(...this.emp_details.map(emp => emp.emp_id)) + 1
      : 1;

    this.emp_details.push({
      emp_id: newId,
      emp_name: this.emp_form.value.emp_name,
      emp_email: this.emp_form.value.emp_email,
      emp_role: this.emp_form.value.emp_role
    });

    this.resetForm();
  }

  empUpdate() {
    const index = this.emp_details.findIndex(emp => emp.emp_id === this.empUpdateid);
    if (index > -1) {
      this.emp_details[index].emp_name = this.emp_form.value.emp_name;
      this.emp_details[index].emp_email = this.emp_form.value.emp_email;
      this.emp_details[index].emp_role = this.emp_form.value.emp_role;
    }

    this.resetForm();
  }

  empUpdateEdit(emp_id: number) {
    this.empUpdateid = emp_id;
    const emp = this.emp_details.find(emp => emp.emp_id === emp_id);
    if (emp) {
      this.emp_form.patchValue(emp);
    }
  }

  deleteEmp(emp_id: number) {
    this.emp_details = this.emp_details.filter(emp => emp.emp_id !== emp_id);
    this.resetForm();
  }
}
