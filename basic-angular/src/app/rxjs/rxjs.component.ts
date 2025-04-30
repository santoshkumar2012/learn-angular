import { Component } from '@angular/core';
import { resolve } from 'path';
import { Observable } from 'rxjs';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-rxjs',
  imports: [HeaderComponent],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent {

  ngOnInit(){

    let promise = new Promise((resolve) => {
      setTimeout(() => {  //setTimeout is used to delay the execution 1000 milliseconds (1 seconds)
        resolve("Promise Working")
      }, 1000);
    });

    promise.then((result)=>{  // then method is attached to the promise and is executed when the promise resolves,
      console.log(result);
    });


    let observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next("Observable Working");
        observer.complete();
      }, 1000)
    })

    observable.subscribe({
      next: (result) => console.log(result), 
      complete: () => console.log("Observable Completed")
    });


    // let observable = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next("Observable Working");
    //     observer.next("Observable Working1");
    //     observer.next("Observable Working2");
    //     observer.complete(); // Complete the observable
    //   }, 1000);
    // });
    
    // observable
    //   .pipe(
    //     filter(value => value === "Observable Working1") // This will correctly match
    //   )
    //   .subscribe(
    //     result => console.log(result),
    //     error => console.error(error), // Handle errors if any
    //     () => console.log("Observable Completed") // Completion message
    //   );


  }

}
