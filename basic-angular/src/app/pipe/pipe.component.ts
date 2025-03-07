import { CommonModule, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  imports: [LowerCasePipe, UpperCasePipe, CommonModule],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  name = "Santosh Kumar"
  company_profile = {
    company_name: "P & N Brothers",
    company_length: 50-2000,
    company_address: "204 Apt Sathvik Apartment"
  }

  employees = [
    { id:1, name:"Virendra Prasad", country:"Delhi", },
    { id:2, name:"Santosh Kumar", country:"Pune", },
    { id:3, name:"Anjali Kumari", country:"Delhi", },
    { id:4, name:"Pragyansh", country:"Delhi", },
    { id:5, name:"Nityansh", country:"Delhi", },
    { id:6, name:"Sushila Deve", country:"Delhi", },
  ]
  age = 42

}
