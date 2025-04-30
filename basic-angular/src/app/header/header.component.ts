import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   
  constructor(
  private router: Router,
  // private toastr: ToastrService
  ){}

ngOnInit() {}

logout() {
  localStorage.clear();
  sessionStorage.clear();
  // this.toastr.success('Logout successful');
  this.router.navigateByUrl('');
}


}
