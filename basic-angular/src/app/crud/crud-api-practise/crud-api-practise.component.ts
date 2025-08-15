
import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { HttpSharedService } from '../../http-shared.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud-api-practise',
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './crud-api-practise.component.html',
  styleUrl: './crud-api-practise.component.css'
})
export class CrudApiPractiseComponent {

  users: any
  user_form!: FormGroup
  user_details: any

  constructor( 
    private fb: FormBuilder, 
    private http: HttpSharedService, 
    private toaster: ToastrService){}

  userFields = {
    firstName : [''],
    lastName : ['']
  }

  ngOnInit(){
    this.initialize()
    this.getUser()
  }

  initialize(){
    this.user_form = this.fb.group(this.user_details)
  }

  saveUser(){
    this.creatUser()
    this.updatedUser()
  }

  getUser(){
    this.http.get('users').subscribe((response: any) => {
      this.users = response.users
    })
  }

  setPayload(form: any){
    return {
      firstName : form.firstName,
      lastName : form.lastName
    }
  }

  creatUser(){
    this.http.post('users/add', this.setPayload(this.user_form.value)).subscribe((response: any) => {
      this.toaster.success("User created is successfully")
    })
  }

  patchForm(){
    this.user_form.patchValue({
      firstName : this.user_details.firstName,
      lastName : this.user_details.firstName
    })
  }

  updatedUser(){
    this.http.put('users/'+this.user_details.id, this.setPayload(this.user_form.value)).subscribe((response: any) => {
      this.toaster.success("User created is successfully")
    })
  }

  setUser(user: any){
    this.user_details = user
    this.patchForm()
  }

  deleteUser(user: any){
    this.http.delete('user/'+user.id).subscribe((response: any) => {
      this.toaster.success("User deleted is successfully")
    })
  }

}