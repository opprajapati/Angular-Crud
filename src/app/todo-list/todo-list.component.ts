import { Component, ElementRef, OnInit ,ViewChild} from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//@ts-ignore
const $=window['$']
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  id:any
  @ViewChild('editmodal') modal?: ElementRef;
  toDoList: any = [];
  isModalOpen = false;
  editForm= new FormGroup({
    
  })
  constructor(private todoService: TodoServiceService ) {}
  ngOnInit(): void {
    this.getListData();
    this.getItemByID(this.toDoList.id)
  }
  getListData() {
    this.todoService.gettoDoList().subscribe((res: any) => {
      this.toDoList = res;
    });
  }
  openModal() {
    $(this.modal?.nativeElement).modal('show');

  }
  closeModal() {
    $(this.modal?.nativeElement).modal('hide');
  }

  getItemByID(id:any) {
    this.todoService.getItemById(id).subscribe((res)=>{
      console.log(res)
    })
  }
}
