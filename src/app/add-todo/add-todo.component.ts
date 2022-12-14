import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  showValidationErrors: boolean=true

  constructor(private todoServices: TodoService, private router:Router) { }

  ngOnInit(): void {
  }
  onFormSubmit(form: NgForm){
   if (form.invalid)  this.showValidationErrors=true
    const todo = new Todo(form.value.text)
    this.todoServices.addTodo(todo)
    this.router.navigateByUrl('/todos')

    
  }

}
