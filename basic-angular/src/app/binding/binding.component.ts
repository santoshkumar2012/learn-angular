import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  clickEvent(){
    console.log("event binding")
  }

  clickEvent2(val:string){
    console.log(val)
  }

  clickEvents(){
    console.log("click Event Call")
  }

  isDisabled = true

  defaultName = "santosh"

  imgUrl = "assets/images/home-icon.png"

  columnSpan = 2;

  placeholder1 = "First Name"

  isActive = true
  isSuccess = true;
  isError = false;

  bgColor = 'yellow'

  username = ''



onSubmit(){
  console.log("Alert")
}

santoAnj(val:string){
  console.log(val)
}

data = ''

isDisable = true
imgSrc = '../assets/images/icon.png'


isVisiable = false
showContent(){
  this.isVisiable = !this.isVisiable
}

placeholder2 = "Enter Username"

placeholder3 = "Enter Username3"


}
