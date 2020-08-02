import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { TodoInput } from './input/todo.input';
import { Todo, StatusEnum } from './todo/todo';
import { UpdateStatusTodoInput } from './input/update-status.input';

@Injectable()
export class TodosService {
    // this fix any only for array
    todos: any[]= [
        {
            id: 1,
            title: 'Todo 1',
            status: StatusEnum.DONE
        },
        {
            id: 2,
            title: 'Todo 2',
            status: StatusEnum.TODO
        }
    ]
    constructor() {
    }
    // method for return all todos
    async getTodos(): Promise<Todo[]> {
        console.log(this.todos);
        return this.todos;
    }

    // method for create todods
    async createTodos(todo: TodoInput) {
        let id = Math.max(...this.todos.map(t => t.id));
        const createTodo = Object.assign({id: 2}, todo);
        createTodo.id = ++id;
        if (!createTodo.status) {
            todo.status = StatusEnum.TODO;
        }
        this.todos.push(createTodo);
        return createTodo;
    }

    //method for return todo by id
    async getTodoById(id: number) {
        const todo = this.todos.find(t => t.id === id);
        return todo;
    }

    async removeById(id: number) {
        const todo = this.todos.find(t => t.id === id);
        if (this.todos.indexOf(todo) > -1)
            this.todos.splice(this.todos.indexOf(todo), 1)
        else 
            throw new HttpException('Not found todo by id', HttpStatus.NOT_FOUND)
    }

    // update status todo
    async updateStatusTodo(updateTodo: UpdateStatusTodoInput) {
        const idx = this.todos.findIndex(todo => todo.id === updateTodo.id);
        console.log(idx);
        if (idx > -1) {
            this.todos[idx].status = updateTodo.status;
            return this.todos[idx];
        } else {
            throw new HttpException('Not found todo by id', HttpStatus.NOT_FOUND)
        }
        
            
    }
}
