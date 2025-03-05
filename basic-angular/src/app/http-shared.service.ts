import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpSharedService {

private apiurl = "https://api.memelli.com/"

httpHeader = new HttpHeaders({
  'Accept': 'application/json',
  'content-type': 'application/json'
});

  api_url: any;

constructor(private http: HttpClient) {}

get(url: any, params: any = null){
  let token = sessionStorage.getItem('token')
  let httpHeader = new HttpHeaders({
    'Accept': 'application/json',
    'content-type': 'application/json',
    'Authorization': "Bearer "+token,
  });

  const converted_params = this.configureParams(params)
  return this.http.get(
    `${this.api_url}${url}${converted_params}`,
    {headers: httpHeader}
  )
}

configureParams(params:any){
  let paramsString = ""
  if(params){
    params.forEach((element: any, index: number) => {
      if(index == 0){
        paramsString += `?${element.key}=${element.value}`
      }

      if(index > 0 && params.length > 1){
        paramsString += `&${element.key}=${element.value}`
      }
    });
  }
  return paramsString
}

}
