import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  todo!: Todo;

 constructor(private route:ActivatedRoute, private router: Router, private todoService: TodoService) { }

  ngOnInit(): void {
    return
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const todoId = paramMap.get('id')
        const todo = this.todoService.getTodo(todoId)
    })
  }
  onFormSubmit(form:NgForm) {
    this.todoService.updateTodo(this.todo.id, form.value)
    this.router.navigateByUrl("/todos")
  }

}
