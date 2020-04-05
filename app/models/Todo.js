export default class Todo {

    constructor(data) {

        this.id = data.id || data._id
        this.completed = data.completed
        this.description = data.description
    }

    get Template() {
        return /*html*/ `
<div>
<ul class="list-group list-group-flush">
<input type="checkbox" class="form-check-input" id="materialChecked2" checked>
<label class="form-check-label" for="materialChecked2"></label>
<li class="list-group-item text-center">${this.description}
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