## Description

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Graphql playground

```code
http://localhost:3000/graphql
```

## Examples query and mutation

```code
query getAllTodos{
  getAllTodos{
    id
    title
    status
  }
}

mutation newTodo {
  newTodo(newTodo: {
    title: "create Input2",
    status: DONE
  }) {
    id, 
    title,
    status
  }
}


query getById{
  getByIdTodo(id:1 ){
    id
    title
    status
  }
}
mutation updateTodStatus{
  updateTodoStatus(updateTodo: {
    id: 5, status: DONE
  }){
    id
    title
    status
  }
}
```


