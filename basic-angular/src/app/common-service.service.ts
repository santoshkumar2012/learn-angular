import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  genders = [
    {"id": "male", "name": "Male"},
    {"id": "female", "name": "Female"},
    {"id": "other", "name": "Other"}
  ]

  constructor() { }
}
