import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpSharedService } from '../../http-shared.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-crud-api',
  imports: [HeaderComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crud-api.component.html',
  styleUrl: './crud-api.component.css'
})
export class CrudApiComponent {

  users: any
  user_detail: any
  user_form!: FormGroup

  constructor(private fb: FormBuilder, private http: HttpSharedService, private toastr: ToastrService){}
    user_field = {
    username  : ['', Validators.required],
    firstName : ['', Validators.required],
    lastName  : ['', Validators.required],
    email     : ['', Validators.required],
    phone     : ['', Validators.required],
    address   : ['', Validators.required]
  }

 ngOnInit(){ 
  this.getUser()
  this.intializeForm()
 }

 resetForm(){
  this.intializeForm()
}

 intializeForm(){ this.user_form = this.fb.group(this.user_field)}

 getUser(){
  this.http.get('users').subscribe((response: any) => {
    this.users = response.users;
  })
 }

 setUser(user: any){
  this.user_detail = user;
  this.patchForm()
 }

 saveForm(){ 
  this.createUser(),
  this.updateUser()
 }

 patchForm(){
  this.user_form.patchValue({
    username  : this.user_detail.username,
    firstName : this.user_detail.firstName ,
    lastName  : this.user_detail.lastName ,
    email     : this.user_detail.email,
    phone     : this.user_detail.phone,
    address   : this.user_detail.address
  })
 }

 setPayLoad(form: any){
  return {
    username  : form.username,
    firstName : form.firstName ,
    lastName  : form.lastName ,
    email     : form.email,
    phone     : form.phone,
    address   : form.address
  }
 }

 createUser(){
  this.http.post('users/add', this.setPayLoad(this.user_form.value)).subscribe((response: any) => {
    this.getUser()
    this.resetForm()
    console.log('Add User --->', response);
    this.toastr.success("User Added Successfully")
  })
 }

 updateUser(){
  this.http.put('users/'+this.user_detail.id, this.setPayLoad(this.user_form.value)).subscribe((response: any) => {
    this.getUser()
    this.resetForm()
    console.log('Add User --->', response);
    this.toastr.success("User Updated Successfully")
  })
 }

 deActivatedUser(user: any){
  this.http.delete('users/'+user.id).subscribe((response: any) => {
    this.getUser()
    this.resetForm()
    console.log('Delete', response);
    this.toastr.success("User Deleted Successfully")
  })
 }

}
