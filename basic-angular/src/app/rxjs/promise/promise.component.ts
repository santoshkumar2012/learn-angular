import { Component } from '@angular/core';
import { rejects } from 'assert';
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: 'app-promise',
  imports: [HeaderComponent],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.css'
})
export class PromiseComponent {

constructor(){}

promiseVel:any

dellAvailable(){
  return true    
}

hpAvailable(){
  return false
}

del = {brand: "Del", hardisk: "1.2gb", color: "Silver"}
hp = {brand: "HP", hardisk: "1.5gb", color: "Gray"}

ngOnInit(): void {

let promise = new Promise((resolve, reject) => {

  if(this.dellAvailable()){
     setTimeout(() => {
        resolve("Dell laptop is purchased")
        // resolve(this.del)
     }, 3000)
  } else if(this.hpAvailable()){
    setTimeout(() => {
      resolve("HP laptop is purchased")
      // resolve(this.hp)
    }, 3000);
  } else {
    reject("Laptop is not available")
  }

})

  promise.then(result=>{
    console.log(result)
    this.promiseVel = result
  }).catch(result =>{
    console.log(result)
    this.promiseVel = result
  })

}

}
