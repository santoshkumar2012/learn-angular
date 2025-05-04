import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpSharedService } from '../http-shared.service';
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterLink],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  users: any
  orders: any;

  constructor( private _http: HttpSharedService ){}

  ngOnInit(){
    this.getUsers()
  }

  getUsers(){
   this._http.get('users').subscribe((response: any) => {
    this.users = response.users;
    console.log('Check--->', this.users);
  })
 }



 // For Learning only
 getOrder(){
  this._http.get('zilliwo/zillow/my-orders').subscribe((response: any) => {  // call my orders API 
    this.orders = response
    this.orders.map((order:any) => {  // I have running one loop by map on my orders API, I have added "property_contract" array on my Orders API 
      this._http.get('contracts/property/contract/'+order.property_id).subscribe((response:any) => {
        order["property_contract"] = response
      })
    }) 
    console.log('orders--->', this.orders);
  })
}

}
