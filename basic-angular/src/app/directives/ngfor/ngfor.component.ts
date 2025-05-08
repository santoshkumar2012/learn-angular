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

	isToggle = true

	clickToggle(){
		this.isToggle = !this.isToggle
	}

employees = [
	{
		empid: 1,
		name: "Santosh Kumar",
		age: 45,
		department: "Angular Developer",
		salary: 1000000,
	},
	{
		empid: 2,
		name: "Achyut",
		age: 45,
		department: "Web Developer",
		salary: 300000,
	},
	{
		empid: 3,
		name: "Gorakh",
		age: 45,
		department: "Software Developer",
		salary: 200000,
	},
	{
		empid: 4,
		name: "Saksham",
		age: 45,
		department: "Software",
		salary: 300000,
	},
	{
		empid: 5,
		name: "Pankaj",
		age: 45,
		department: "Software Development",
		salary: 500000,
	}
]

}
