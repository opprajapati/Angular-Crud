import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/todoItem';
  gettoDoList() {
    return this.http.get('http://localhost:3000/todoItem');
  }
  postItemList(data:any){
   return this.http.post(this.url,data) 
  }

  getItemById(id:any){
    return this.http.get(`http://localhost:3000/todoItem/${id}`)
  }
}
