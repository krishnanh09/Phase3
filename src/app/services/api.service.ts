import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string='http://localhost:8000/api';  
  constructor(private http:HttpClient) { }

  getChatHistory(){
    return this.http.get(this.url)
  }

  saveChat(data:any){
    return this.http.post(this.url+'/save',data,{responseType: 'text'})
  }
}
