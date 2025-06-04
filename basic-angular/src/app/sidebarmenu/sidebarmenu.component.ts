import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebarmenu',
  imports: [],
  templateUrl: './sidebarmenu.component.html',
  styleUrl: './sidebarmenu.component.css'
})
export class SidebarmenuComponent {

 isSidebarOpen = false;
 
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
