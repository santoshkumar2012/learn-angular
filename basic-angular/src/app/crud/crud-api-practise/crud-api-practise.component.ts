import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { HttpSharedService } from '../../http-shared.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { response } from 'express';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud-api-practise',
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './crud-api-practise.component.html',
  styleUrl: './crud-api-practise.component.css'
})
export class CrudApiPractiseComponent {

   user_form!: FormGroup
  users: any
  user_details:any
  searchQuery: string = '';

  constructor(
    private http: HttpSharedService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ){}

  user_fields = {
    username : ['', Validators.required],
    email    : ['', Validators.required],
    phone    : ['', Validators.required]
  }

  ngOnInit(){ 
    this.getUser()
    this.initializeForm()
   }

  initializeForm(){
    this.user_form = this.fb.group(this.user_fields)
  }

  resetForm(){ this.initializeForm()}

 saveForm(){
  this.createUser()
  this.updatedUser()
  this.resetForm()
 }

 setUser(user: any){
  this.user_details = user
  this.patchForm()
 }

 getUser(){
  this.http.get('users').subscribe((response: any) => {
    this.users = response.users
  })
 }

 setPayLoad(form:any){
  return{
    username  : form.username,
    email     : form.email,
    phone     : form.phone
  }
 }

 createUser(){
  this.http.post('users/add', this.setPayLoad(this.user_form.value)).subscribe((response: any) => {
    this.getUser()
    this.resetForm()
    this.toastr.success("Added User Details")
  })
 }

 patchForm(){
  this.user_form.patchValue({
    username: this.user_details.username,
    email   : this.user_details.email,
    phone   : this.user_details.phone,
  })
 }

 updatedUser(){
  this.http.put('users/'+this.user_details.id, this.setPayLoad(this.user_form.value)).subscribe((response: any) => {
    this.getUser()
    this.resetForm()	
    this.toastr.success("Updated User Details")
  })
 }

 deactiveUser(user: any){
  this.http.delete('users/'+user.id).subscribe((response: any) => {
    this.toastr.success("Deleted User Details")
  })
 } 

 searchUser() {
  const query = this.searchQuery.trim();
  if (query) {
    this.http.get(`users/search?q=${query}`).subscribe((response: any) => {
        this.users = response.users;
      });
  } else {
    this.getUser(); // show full list if search box is empty
  }
}

}
