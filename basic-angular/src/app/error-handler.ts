import { ErrorHandler, inject } from "@angular/core";
// import { ErrorService } from "./error.service";

export class MyErrorHandler implements ErrorHandler {
  error: any;
    // private error = inject(ErrorService)
  handleError(error: any) {
    console.log("Error occure : ", error)
    if(error.status == 422){
        let message = 'required fileds: '
        let params_required = error.error.detail.map((entity: any) => `${entity.loc[1]}`)
        console.log(message + params_required)
        this.error.setError(message + params_required)
    }
    if(error.status == 404){
        console.log("Please check your api url")
        this.error.setError("Please check your api url")
    }
    if(error.status == 500){
        console.log("Please check your network")
        this.error.setError("Please check your network")
    }
  }
}