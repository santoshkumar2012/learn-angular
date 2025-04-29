import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class HttpSharedService {
  api_url = environment.apiurl


  httpHeader = new HttpHeaders({
    'Accept': 'application/json',
    'content-type': 'application/json'
  });

  constructor(private http: HttpClient) {}

  post(url: any, payload: any = {}, params: any = null){
    let token = sessionStorage.getItem('token')
    let httpHeader = new HttpHeaders({
      'Accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': "Bearer "+token,
    });

    const converted_params = this.configureParams(params)
    return this.http.post(
      `${this.api_url}${url}${converted_params}`,
      payload, {headers: httpHeader}
    )
  }

  postForm(url: any, obj: any, params: any = null){
    let token = sessionStorage.getItem('token')
    let httpHeaderWithTokenForForm = new HttpHeaders({
      'Authorization': "Bearer "+token,
    })

    const converted_params = this.configureParams(params)
    return this.http.post(`${this.api_url}${url}${converted_params}`, obj, {headers: httpHeaderWithTokenForForm})
  }

  put(url: any, payload: any, params: any = null) {
    let token = sessionStorage.getItem('token')
    let httpHeader = new HttpHeaders({
      'Accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': "Bearer "+token,
    });

    const converted_params = this.configureParams(params)
    return this.http.put(
      `${this.api_url}${url}${converted_params}`,
      payload, {headers: httpHeader}
    )
  }

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

  delete(url: any, params: any = null){
    let token = sessionStorage.getItem('token')
    let httpHeader = new HttpHeaders({
      'Accept': 'application/json',
      'content-type': 'application/json',
      'Authorization': "Bearer "+token,
    });

    const converted_params = this.configureParams(params)
    return this.http.delete(
      `${this.api_url}${url}${converted_params}`,
      {headers: httpHeader}
    )
  }

  getJson(url: any, params: any = null){
    return this.http.get(url)
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
