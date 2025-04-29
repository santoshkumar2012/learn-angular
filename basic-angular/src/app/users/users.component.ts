import { Component } from '@angular/core';
import { HttpSharedService } from '../http-shared.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LoaderComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

    users: any
    loading: boolean = false

    constructor( private _http: HttpSharedService ){}

    ngOnInit(){
      this.getUsers()
    }
  
    getUsers(){
     this.loading = true
     this._http.get('users').subscribe((response: any) => {
      this.users = response.users;
      this.loading = false
      console.log('Check--->', this.users);
    })
   }
  
}
