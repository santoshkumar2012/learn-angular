import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../header/header.component";
import { from, interval, map, Subscription } from 'rxjs';
import { response } from 'express';

@Component({
  selector: 'app-map',
  imports: [HeaderComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent {

  sub1!: Subscription
  msg1: any

  sub2!: Subscription
  msg2: any

 constructor(){}

 ngOnInit(){

  //Simple Examples 01

  const broadCastingVideo = interval(1000)

  this.sub1 = broadCastingVideo.pipe(
    map(data => 'Video '+ data)
  )
  .subscribe((response: any) => {
    console.log(response);
    this.msg1 = response;
  })

  setTimeout(() => {
    this.sub1.unsubscribe()
  }, 10000)


 //Map Logic Examples 02

 this.sub2 = broadCastingVideo.pipe(
  map(data => 'Video '+ data * 10)
 )
 
 .subscribe((response: any) => {
  this.msg2 = response
 })

 setTimeout(() => {
  this.sub2.unsubscribe()
 }, 10000)


  //Examples 03 For Objects

  const members = from([
    {id: 1, name: 'Anup'},
    {id: 1, name: 'Pankaj'},
    {id: 1, name: 'Tanmay'},
    {id: 1, name: 'Ashish'},
    {id: 1, name: 'Husnain'},
    {id: 1, name: 'Rajesh'},
    ])

    members.pipe(
      map(data => data.name)
    )
    .subscribe((response: any) => {
      console.log('Check--->', response);
    })

 }
    
  
}
