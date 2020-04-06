export default class Todo {

    constructor(data) {

        this.id = data.id || data._id
        this.completed = data.completed
        this.description = data.description
    }

    get Template() {
        return /*html*/ `
<div>
<ul class="list-group list-group-flush bg-transparent">
<input type="checkbox"onclick="app.todoController.toggleTodoStatus('${this.id}')" class="form-check-input" id="materialChecked2" checked>
<label class="form-check-label" for="materialChecked2"></label>
<li class="list-group-item text-center bg-transparent border-0">${this.description}
<div class="form-check">
</div>
<button type="button" class="close delete text-dark" onclick="app.todoController.removeTodo('${this.id}')">
<span>&times;</span>
</button>
</li>
</ul>
</div>
`
    }


}
// checked=${this.completed}