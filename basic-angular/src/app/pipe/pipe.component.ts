import { CommonModule, LowerCasePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import { Component } from '@angular/core';
import { MypipePipe } from './mypipe.pipe';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ImpurePipe } from './impure.pipe';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-pipe',
  imports: [LowerCasePipe, CommonModule, MypipePipe, FilterPipe, FormsModule, ImpurePipe, HeaderComponent],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  // name = "Santosh Kumar"
  // company_profile = {
  //   company_name: "P & N Brothers",
  //   company_length: 50-2000,
  //   company_address: "204 Apt Sathvik Apartment"
  // }

  nameSearch: string = '';

  employees = [
    { id:1, name:"Virendra Prasad", gender:"Male", country:"Delhi", },
    { id:2, name:"Santosh Kumar", gender:"Male", country:"Pune", },
    { id:3, name:"Anjali Kumari", gender:"Female", country:"Delhi", },
    { id:4, name:"Pragyansh", gender:"Male", country:"Delhi", },
    { id:5, name:"Nityansh", gender:"Male", country:"Delhi", },
    { id:6, name:"Sushila Devi", gender:"Female", country:"Delhi", },
    { id:7, name:"Seema Devi", gender:"Female", country:"Delhi", },
  ];
  
  // addPerson() {
  //   this.employees.push({ name: 'New Person ' + Math.floor(Math.random() * 100), gender: 'male' });
  // }

  addPerson(){
    this.employees.push({
      name: 'New Person ' + Math.floor(Math.random() * 100), gender: 'male',
      id: 0,
      country: ''
    });
  }

}