import { Component } from '@angular/core';
import { ChildsComponent } from "../childs/childs.component";
import { HttpSharedService } from '../../http-shared.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-parents',
  imports: [ChildsComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './parents.component.html',
  styleUrl: './parents.component.css'
})
export class ParentsComponent {

// parentMessage: string = 'Hello from Parent Component!';

// apiData: any [] = [];
// constructor( private http: HttpSharedService){}
// ngOnInit(){
//   this.getUser()
// }
// getUser(){
//   this.http.get('users').subscribe((response: any) => {
//     this.apiData = response.users
//   })
// }


receivedData: any[] = [];
onApiDataReceived(data: any[]) {
    this.receivedData = data;
    console.log("Received from child:", data);
  }

}
