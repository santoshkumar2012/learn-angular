import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../header/header.component';
import { concatMap, from, map, mergeAll, mergeMap, of } from 'rxjs';
import { response } from 'express';

@Component({
  selector: 'app-mergemap',
  imports: [HeaderComponent],
  templateUrl: './mergemap.component.html',
  styleUrl: './mergemap.component.css'
})
export class MergemapComponent {

 
  getData(data: any){
    return of (data + 'Video Uploaded')
  }

 
  ngOnInit(){

     //Example 01 Map

    const source = from(['Tech', 'Comedy', 'News']);

    source.pipe(
      map( response => this.getData(response))
    )

    .subscribe((response: any) => {
      console.log(response)
    })

    //.subscribe(response => response.subscribe( response2 => {
      //console.log(response2);
    //}))

     //Example 02 MergeAll

    //  source.pipe(
    //   map( response => this.getData(response)),
    //   mergeAll()
    // )

    // .subscribe((response: any) => {
    //   console.log(response)
    // })


    //Example 03 Mergemap

    //  source.pipe(
    //   mergeMap( response => this.getData(response)),
    // )

    // .subscribe((response: any) => {
    //   console.log(response)
    // })


     //Example 04 Concatemap

     source.pipe(
      concatMap( response => this.getData(response)),
    )

    .subscribe((response: any) => {
      console.log(response)
    })


  }

}
