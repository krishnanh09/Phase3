import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommondataService {
  loggedIn:boolean = false;
  constructor() { }
}
