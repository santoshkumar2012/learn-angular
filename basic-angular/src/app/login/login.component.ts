import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

isVisiable = false
loginForm!: FormGroup;

constructor(
  private fb: FormBuilder,
){}

form_field = {
  email: ['', Validators.required],
  password: ['', Validators.required],
  name: ['', Validators.required],
  age: ['']
}

ngOnInit(){this.loginForm = this.fb.group(this.form_field)}
setPayload(form: any){return { email: form.email, password: form.password}}

login(){}

toggle(){
  this.isVisiable = !this.isVisiable
}

}
