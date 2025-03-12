import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [CommonModule],
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
	age: 30,
	department: "Human Resources",
	salary: 5000000
	},
	{
	id: 3,
	name: "Anjali Kumar",
	age: 30,
	department: "Human Resources",
	salary: 5000000
	},
	{
	id: 4,
	name: "Nityansh Kumar",
	age: 30,
	department: "Human Resources",
	salary: 5000000
	}
]

}
