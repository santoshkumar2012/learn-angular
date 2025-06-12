import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { HttpSharedService } from '../../http-shared.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud-api-practise',
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './crud-api-practise.component.html',
  styleUrl: './crud-api-practise.component.css'
})
export class CrudApiPractiseComponent {

  users: any
  user_form!: FormGroup
  user_details: any

  constructor(
    private http: HttpSharedService,
    private fb: FormBuilder,
    private toaster: ToastrService
  ){}

  user_field = {
    firstName : ['', Validators.required],
    lastName  : ['', Validators.required],
    email     : ['', Validators.required],
    gender    : ['', Validators.required],
    address   : ['', Validators.required],
    department: ['', Validators.required]
  }

  ngOnInit(){
    this.intializedForm()
    this.getUser()
  }

  intializedForm(){
    this.user_form = this.fb.group(this.user_field)
  }

  resetForm(){
    this.intializedForm()
  }

  saveUser(){
    this.createUser()
    this.updateUser()
  }

  getUser(){
    this.http.get('users').subscribe((response: any) => {
      this.users = response.users
    })
  }

  setPayLoad(form: any){
    return{
      firstName : form.firstName,
      lastName  : form.lastName,
      email     : form.email,
      gender    : form.gender,
      address   : form.address,
      department: form.department
    }
  }

  createUser(){
    this.http.post('users/add', this.setPayLoad(this.user_form.value)).subscribe((response: any) => {
      this.getUser()
      this.resetForm()
      this.toaster.success("User is created")
    })
  }

  patchForm(){
    this.user_form.patchValue({
      firstName : this.user_details.firstName,
      lastName  : this.user_details.lastName,
      email     : this.user_details.email,
      gender    : this.user_details.gender,
      address   : this.user_details.address?.address,
      department: this.user_details.company?.department
    })
  }

  updateUser(){
    this.http.put('users/'+this.user_details.id, this.setPayLoad(this.user_form.value)).subscribe((response: any) => {
      this.resetForm()
      this.toaster.success("User is updated")
    })
  }

  setUser(user: any){
    this.user_details = user
    this.patchForm()
  }

  deActiveUser(user: any){
    this.http.delete('users/'+user.id).subscribe((response: any) => {
      this.toaster.success("User is deleted")
    })
  }
}