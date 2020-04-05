import store from "../store.js";
import Todo from "../models/Todo.js";

// @ts-ignore
const todoApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/Justin/todos/",
    timeout: 8000
});

class TodoService {
    getTodos() {
        console.log("Getting the Todo List");
        todoApi.get()
            .then(res => {
                let todos = res.data.data.map(rawTodoData => new Todo(rawTodoData))
                store.commit('todos', todos)
                console.log(store.State);

            })
            .catch(err => console.error(err))
            //TODO Handle this response from the server
    }

    addTodoAsync(todo) {
        todoApi.post("", todo)
            .then(res => {
                console.log(res.data.data)
                let newTodo = new Todo(res.data.data)
                let todos = [newTodo, ...store.State.todos]
                store.commit('todos', todos)

            })
            .catch(err => console.error(err))
            //TODO Handle this response from the server (hint: what data comes back, do you want this?)
    }

    toggleTodoStatusAsync(todoId) {
        let todo = store.State.todos.find(todo => todo.id == todoId);
        //TODO Make sure that you found a todo,
        //		and if you did find one
        //		change its completed status to whatever it is not (ex: false => true or true => false)

        todoApi.put(todoId, todo);
        //TODO do you care about this data? or should you go get something else?
    }

    removeTodoAsync(todoId) {
        todoApi.delete(todoId)
            .then(res => {
                console.log(res.data)
                this.getTodos()

            })

        .catch(err => console.error(err))
            //TODO Work through this one on your own
            //		what is the request type
            //		once the response comes back, what do you need to insure happens?
    }
    constructor() {
        console.log('todo service works')
        this.getTodos()

    }
}

const todoService = new TodoService();
export default todoService;