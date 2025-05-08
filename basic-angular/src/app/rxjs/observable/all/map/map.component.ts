import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../header/header.component";
import { from, map } from 'rxjs';

@Component({
  selector: 'app-map',
  imports: [HeaderComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

 constructor(){}

 ngOnInit(){
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
    .subscribe(res => {
    console.log(res)
    })
 }
    
  
}
