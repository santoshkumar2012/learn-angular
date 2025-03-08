import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css'],
})
export class NgifComponent implements OnInit {

// isVisiable:boolean = false

// isLoggedIn:boolean = true

// empData = {
//   name: "Santosh",
//   last_name: "Kumar",
//   age: 30,
//   department: 'Development'
// }

empData:any;

ngOnInit(): void {
  setTimeout(() => {
      this.empData = {
      name: "Santosh",
      last_name: "Kumar",
      age: 30,
      department: 'Development'
    };
  }, 4000
)
}

}
