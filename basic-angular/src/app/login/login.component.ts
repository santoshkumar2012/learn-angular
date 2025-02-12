import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [LowerCasePipe, TitleCasePipe, UpperCasePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  person_name = "Anjali Kumari"

  company_details = {
    name: "P & N Brothers",
    company_address: "New Delhi",
    company_length: 50,
    company_owners: "Santosh Kumar"
  }

 


}
