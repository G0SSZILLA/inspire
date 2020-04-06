import TodoService from "../services/TodoService.js";
import store from "../store.js";
// import todoService from "../services/TodoService.js";

//TODO Create the render function
function _drawTodos() {
    let template = ''
    let todos = store.State.todos

    todos.forEach(todo => template += todo.Template)
    document.getElementById('todos').innerHTML = template
    document.getElementById('numTodos').innerHTML = `<p>Tasks: ${todos.length}</p>`
}

export default class TodoController {
    constructor() {
        console.log('todo controller works');

        //TODO Remember to register your subscribers
        TodoService.getTodos();
        store.subscribe('todos', _drawTodos)
    }

    addTodo(e) {
        event.preventDefault();
        var form = e.target;
        var todo = {
            description: form.description.value
                //TODO build the todo object from the data that comes into this method
        };
        TodoService.addTodoAsync(todo);
    }


    //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
    toggleTodoStatus(todoId) {
        TodoService.toggleTodoStatusAsync(todoId);
    }

    //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
    removeTodo(todoId) {
        TodoService.removeTodoAsync(todoId);
    }
}