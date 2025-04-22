import { CommonModule } from '@angular/common';
import { Component,NgModule,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { AsyncSubject } from 'rxjs';


@Component({
  selector: 'app-subject',
  imports: [CommonModule, FormsModule],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {

// replaySubject = new ReplaySubject(2); // buffer size = 2
// behaviorSubject = new BehaviorSubject(0); // initial value is 0

asyncSubject = new AsyncSubject()

// isDisable = true

// imgUrl = "../assets/images.icon.png"

// bgColor = 'yellow'

// clickEvent(val:string){
//   console.log(val)
// }

// userInput: string = ''

data = new Promise(resolve => {
  setTimeout(() => resolve('Loaded from Promise!'), 1500);
});


result = '';

  async loadData() {
    const data = await this.fetchData();
    this.result = data;
  }

  fetchData(): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => resolve('Data loaded with async/await!'), 1000);
    });
  }


ngOnInit() {
  // this.replaySubject.next(1);
  // this.replaySubject.next(2);
  // this.replaySubject.next(3);
  // this.replaySubject.subscribe(value => console.log('Subscriber:', value));

  // this.behaviorSubject.subscribe(value => console.log('Subscriber 1:', value));
  // this.behaviorSubject.next(1); // Subscriber 1: 1
  // this.behaviorSubject.subscribe(value => console.log('Subscriber 2:', value)); // Subscriber 2: 1

  this.asyncSubject.next(1);
  this.asyncSubject.next(2);
  this.asyncSubject.next(3);
  this.asyncSubject.subscribe(value => console.log('Subscriber 1:', value));
  this.asyncSubject.subscribe(value => console.log('Subscriber 2:', value));
  this.asyncSubject.next(4);
  this.asyncSubject.complete(); // Now it emits 4 to both
}

}
