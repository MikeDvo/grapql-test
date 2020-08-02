import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { Todo } from './todo/todo';
import { TodoInput } from './input/todo.input';
import { UpdateStatusTodoInput } from './input/update-status.input';

@Resolver('Todos')
export class TodosResolver {
    constructor(private todosService: TodosService) {}
    @Query(() => [Todo])
    async getAllTodos(){
      return await this.todosService.getTodos();
    }

    @Query(() => Todo)
    async getByIdTodo(@Args('id') id: number){
      return await this.todosService.getTodoById(id);
    }

    @Mutation(() => Todo)
    newTodo(@Args('newTodo') newTodo: TodoInput){
        console.log(newTodo);
        const todo = this.todosService.createTodos(newTodo);
        return todo;
    } 

    @Mutation(() => Todo)
    updateTodoStatus(@Args('updateTodo') updateTodo: UpdateStatusTodoInput){
        const todo = this.todosService.updateStatusTodo(updateTodo);
        return todo;
    } 
}
