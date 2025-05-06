import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../header/header.component";
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  imports: [HeaderComponent],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.css'
})
export class IntervalComponent {

  obsMsg: any;

  videoSubscription!: Subscription;

  constructor(){}

  ngOnInit(){
    // const broadCastVideos = interval(1000)
    // timer(delay, interval)
    
    const broadCastVideos = timer(5000, 1000)

    this.videoSubscription = broadCastVideos.subscribe(res => {

      console.log(res)
      this.obsMsg = 'Video ' + res;

      if(res >= 5){
        this.videoSubscription.unsubscribe()
      }

    })
  }

}
