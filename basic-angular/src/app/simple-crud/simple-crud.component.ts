import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-crud',
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './simple-crud.component.html',
  styleUrl: './simple-crud.component.css'
})
export class SimpleCrudComponent {

  title="Simple Practise For Crud Opertion"

  employees: any[] = [];
  showForm = false;
  isEditMode = false;
  editIndex = -1;

  formData = {
    name: '',
    email: '',
    role: ''
  };

  ngOnInit() {
    const storedData = localStorage.getItem('employees');
    this.employees = storedData ? JSON.parse(storedData) : [];
  }

  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) this.cancelEdit();
  }

  addEmployee() {
    this.employees.push({ ...this.formData });
    this.saveToLocalStorage();
    this.resetForm();
  }

  editEmployee(index: number) {
    this.formData = { ...this.employees[index] };
    this.editIndex = index;
    this.isEditMode = true;
    this.showForm = true;
  }

  updateEmployee() {
    if (this.editIndex !== -1) {
      this.employees[this.editIndex] = { ...this.formData };
      this.saveToLocalStorage();
      this.resetForm();
    }
  }

  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
    this.saveToLocalStorage();
  }

  cancelEdit() {
    this.resetForm();
    this.showForm = false;
  }

  resetForm() {
    this.formData = { name: '', email: '', role: '' };
    this.isEditMode = false;
    this.editIndex = -1;
  }

  saveToLocalStorage() {
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

}
