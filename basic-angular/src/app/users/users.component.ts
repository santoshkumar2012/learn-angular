import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpSharedService } from '../http-shared.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup, FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { LoaderSeriveService } from '../loader-serive.service';
import { ToastrService } from 'ngx-toastr';
import { response } from 'express';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  @ViewChild('close') close!: ElementRef

    users: any
    user_detail: any
    // loading: boolean = false
    user_form!: FormGroup
    user: any;
    action: string = "Add"

    user_fields = {
    username : ['', Validators.required],
    firstName: ['', Validators.required],
    lastName : ['', Validators.required],
    email    : ['', Validators.required],
    phone    : ['', Validators.required],
    address  : [''],
    }
  
    constructor( 
      private _http: HttpSharedService,
      private _fb: FormBuilder,
      public loader: LoaderSeriveService,
      private toastr: ToastrService
     ){ }

    ngOnInit(){
      this.getUsers()
      this.initializeForm()
    }

    resetForm(){
      this.action = "Add"
      this.initializeForm()
    }

    initializeForm(){this.user_form = this._fb.group(this.user_fields)}

    getUsers(){
     this._http.get('users').subscribe((response: any) => {
      this.users = response.users;
      console.log('Check--->', this.users);
    })
   }

   setUser(user: any, action: string){
    this.user_detail = user;
    if(action == 'edit'){
      this.action = 'Edit'
      this.patchUser()
    }
    // this._http.get('users/'+user.id).subscribe((response: any) => {
    //   this.user_detail = response;
    //   if(action == 'edit'){
    //     this.action = 'Edit'
    //     this.patchUser()
    //   }
    // })
   }

   patchUser(){
    this.user_form.patchValue({
      username  : this.user_detail.username,
      firstName : this.user_detail.firstName,
      lastName  : this.user_detail.lastName,
      email     : this.user_detail.email,
      phone     : this.user_detail.phone
      // address   : this.users.address
    })
   }

   setPayLoad(form: any){
    return {
      username : form.username,
      firstName: form.firstName,
      lastName : form.lastName,
      email    : form.email,
      phone    : form.phone,
      address  : form.address
    }
   }

   saveForm(){ this.action === "Add" ? this.createUser() : this.updateUser()}

   createUser(){
    this._http.post('users/add', this.setPayLoad(this.user_form.value)).subscribe((response: any) => {
      this.getUsers()
      this.resetForm()
      this.close.nativeElement.click()
      this.toastr.success("User Added successfully.");
      console.log('Create Users', response);
    })
   }

   updateUser(){
    this._http.put('users/'+this.user_detail.id, this.setPayLoad(this.user_form.value)).subscribe((response: any) => {
      this.resetForm()
      this.getUsers()
      this.close.nativeElement.click()
      this.toastr.success("User Updated Successfully")
    })
   }

   deActivatedUser(user: any){
    this._http.delete('users/'+user.id).subscribe((response: any) => {
      this.getUsers()
      this.resetForm()
      console.log('DeActivate--->', response);
      this.toastr.success("User Deleted Successfully")
    })
   }
  
}
