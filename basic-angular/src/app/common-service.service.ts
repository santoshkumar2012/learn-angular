import { Injectable } from '@angular/core';
import { HttpSharedService } from './http-shared.service';
import { Router } from 'express';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  genders = [
    {"id": "male", "name": "Male"},
    {"id": "female", "name": "Female"},
    {"id": "other", "name": "Other"}
  ]

  constructor(
    private router: Router,
    private _http: HttpSharedService,
    private toastr: ToastrService,
  ) { }

    previousButton(){
      if(sessionStorage.getItem('role') == "client"){
        return false
      }
      return true
    }
    checkSubscription(user_id: any, user: any){
      this._http.get('user/subscriptions/'+user_id).subscribe((response: any) => {
        this.toastr.success(user.first_name + ' ' + user.last_name, "Welcome")
        if (response.status == 'pending'){
          this.router.navigate(['/settings'], {queryParams: {"page": "settings", "id": response.id}})
        }else{
          this.router.navigate(['/dashboard'], {queryParams: {"page": "dashboard", "id": response.id}})
        }
  
      }, (error: any) => {
        console.error('dashbaord/checkSubscription()--->', error.errors);
      })
    }
  
    setSessionData(response: any){
      let role_id = response.roles[0]['id'] ?? 0
      let role_name = response.roles[0]['name'] ?? ''
  
      let plan_id = response.plan_id ? response.plan_id : 6
      sessionStorage.setItem('token', response.access_token)
      sessionStorage.setItem('user_details', JSON.stringify(response))
      sessionStorage.setItem('role_id', role_id)
      sessionStorage.setItem('user_id', response.id)
      sessionStorage.setItem('plan_id', plan_id)
      sessionStorage.setItem('tenant_id', '1')
      sessionStorage.setItem('role', role_name)
      this.renderPage(response)
    }
  
    renderPage(response: any){
      // this.checkSubscription(response.id, response)
      this.toastr.success(response.first_name + ' ' + response.last_name, "Welcome")
      this.router.navigate(['/dashboard'], {queryParams: {"page": "dashboard", "id": response.id}})
    }

}
