import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-signal',
  imports: [HeaderComponent],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

  firstName = signal("Santosh Kumar")

  cityList = signal(["Delhi", "Mumbai"])

  studentObj = signal({
    name: 'Pankaj Kumar',
    city: 'Pune'
  })

  courseName: string = "Java"

  constructor() {

    const fname = this.firstName();

    setTimeout(() => {
      this.firstName.set("Pragyansh")
      this.courseName = "HTML"
    }, 5000);
  }

  changeName() {
    this.firstName.set("Anjali Kumari")
  }

  addCity() {
    this.cityList.set([...this.cityList(), "Gurugram"])
  }

  changeCity() {
    this.studentObj.set({ ...this.studentObj(), city: 'Banglore' })
  }


}
