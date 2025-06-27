import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpSharedService } from '../http-shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LoaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup
  loading: boolean = false
  error: string = '';

constructor(
  private fb: FormBuilder,
  private http: HttpSharedService,
  private router: Router,
  private toastr: ToastrService
){
}

form_field = {
  username: ['', Validators.required],
  password: ['', Validators.minLength(6)]
}

ngOnInit(){
  this.loginForm = this.fb.group(this.form_field)
  this.login()
  this.pathFakerUser()
}

setPayload(form: any){
  return { 
  username: form.username, 
  password: form.password
}
}

pathFakerUser(){
  this.http.get('','').subscribe((response: any) => {
    this.loginForm.patchValue(
      {"username": "emilys", "password": "emilyspass"}
    )
  }, 
  (error: any) => {
      console.log("error", error)
      this.error = error.error.message;
    })
}


login() {
  this.http.post('auth/login', this.setPayload(this.loginForm.value)).subscribe((response: any) => {
    if(response.accessToken){
      sessionStorage.setItem("token", response.accessToken)
      this.toastr.success("Login is successfully.");
      this.router.navigateByUrl('dashboard')
    }  else {
      this.toastr.error("Login failed. No access token received.");
    }
    },
    // this.error: (err: any) => {
    //   console.error('Login error:', err);
    //   const message = err.error?.message || 'Login failed. Please try again.';
    //   this.toastr.error(message);
    // }
  )
}

}
