import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  addItemForm:FormGroup
 constructor(public fb:FormBuilder ,private todoservice:TodoServiceService){
 this.addItemForm= this.fb.group({
  price:['',Validators.required],
  item:['',Validators.required]
 }
 )
 }

 addItem(data:any){
   this.todoservice.postItemList(data).subscribe((res)=>{
    alert("Item added ")
    this.addItemForm.reset()
   })
 }

 
}
