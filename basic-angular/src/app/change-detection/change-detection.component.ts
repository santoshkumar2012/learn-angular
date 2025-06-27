import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-detection',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent {

  http = inject(HttpClient);
  users:any[] = [];

  constructor(
    //  private cdRef: ChangeDetectorRef // For Manually Trigger
  ){}

  ngOnInit(){
    this.getUser()
  }

  getUser(){
    this.http.get('https://dummyjson.com/users').subscribe((response: any) => {
      this.users = response.users;
      // setTimeout(() => {
      //   this.cdRef.detectChanges() // For Manually Trigger
      // }, 5000);
    })
  }

  reloadUI(){}

}
