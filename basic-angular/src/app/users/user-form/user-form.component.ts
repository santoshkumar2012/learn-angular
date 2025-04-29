import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpSharedService } from '../../http-shared.service';
import { response } from 'express';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  user_form!: FormGroup

    user_field = {
        username:  ['', Validators.required],
        firstName: ['', Validators.required],
        lastName:  ['', Validators.required],
        gender:    ['', Validators.required],
        email:     ['', Validators.required],
        phone:     ['', Validators.required],
        address:   ['', Validators.required]
      }

      constructor(
        private _fb: FormBuilder,
        private _http: HttpSharedService
      ){
        this.user_form = this._fb.group(this.user_field)
      }

      ngOnInit(){}

      setPalyLoad(form: any){
        return {
          username: form.username,
          firstName: form.firstName,
          lastName: form.lastName,
          gender: form.gender,
          email: form.email,
          phone: form.phone,
          address: form.address,
        }
      }

      createUser(){
        this._http.post('users/add', this.setPalyLoad(this.user_form.value)).subscribe((response:any) => {
          console.log('Check--->', response);
        })
      }

      savForm(){ this.createUser() }


}
