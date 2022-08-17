import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[]=[
    new Todo('this is Todo'),
    new Todo('Hey')
  ]

  constructor() {
    
     }
  
  getTodos() {
    return this.todos
  }
  
  getTodo(id:string){
    this.todos.find(t => t.id == id)
  }
  
  addTodo(todo: Todo) {
    this.todos.push(todo)
  }
  updateTodo(id: string, updateTodoFields: Partial<Todo>){
    const todo:any = this.getTodo(id)
    Object.assign(todo, updateTodoFields)
  }
  deleteTodo(id:string) {
    const index = this.todos.findIndex(t =>t.id === id)
    if(index == -1) return
    
    this.todos.splice(index, 1)
  }
}
