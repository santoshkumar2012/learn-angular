import { Component } from '@angular/core';
import { HttpSharedService } from '../http-shared.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup, FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { LoaderSeriveService } from '../loader-serive.service';
import { response } from 'express';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

    users: any
    // loading: boolean = false
    user_form!: FormGroup

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
      public loader: LoaderSeriveService
     ){ this.initializeForm() }

    ngOnInit(){
      this.getUsers()
    }

    initializeForm(){this.user_form = this._fb.group(this.user_fields)}
  
    getUsers(){
     this._http.get('users').subscribe((response: any) => {
      this.users = response.users;
      console.log('Check--->', this.users);
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

   saveForm(){ this.createUser() }

   createUser(){
    this._http.post('users/add', this.setPayLoad(this.user_form.value)).subscribe((response: any) => {
      this.getUsers()
      console.log('Check--->', response);
    })
   }
  
}
