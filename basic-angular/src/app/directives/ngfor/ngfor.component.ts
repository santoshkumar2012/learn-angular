import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {

employees = [
	{
	id: 1,
	name: "Santosh Kumar",
	age: 30,
	department: "Human Resources",
	salary: 5000000
	},
	{
	id: 2,
	name: "Pragyansh Kumar",
	age: 8,
	department: "Human Resources",
	salary: 3000000
	},
	{
	id: 3,
	name: "Anjali Kumar",
	age: 28,
	department: "Human Resources",
	salary: 2000000
	},
	{
	id: 4,
	name: "Nityansh Kumar",
	age: 7,
	department: "Human Resources",
	salary: 5000000
	}
]

}
