import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { response } from 'express';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, LoaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

isVisiable = false
loginForm!: FormGroup;
loading:boolean = false

constructor(
  private fb: FormBuilder,
){
  console.log('Check--->', "Login");
}

form_field = {
  email: ['', Validators.required],
  password: ['', Validators.required],
  name: ['', Validators.required],
  age: ['']
}

ngOnInit(){this.loginForm = this.fb.group(this.form_field)}
setPayload(form: any){return { email: form.email, password: form.password}}

login(){
  this.loading = true
  // this.http.get('').subscribe((response:any) => {
  // this.loading = false
  // })
}

toggle(){
  this.isVisiable = !this.isVisiable
}


}
