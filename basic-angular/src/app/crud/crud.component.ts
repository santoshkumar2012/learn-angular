import { Component } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { CommonModule } from '@angular/common';
import { HttpSharedService } from '../http-shared.service';
import { response } from 'express';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  letters: any
  genders: any
  leads: any

  constructor(
    private _common : CommonServiceService,
    private _http : HttpSharedService
  ){
    this.genders = this._common.genders
    console.log('Check--->', "crud");    
  }

  ngOnInit(){}

  getLeads(){
    this._http.get('leads/leads/').subscribe((response:any) => {
      this.leads = response
    })
  }

}
