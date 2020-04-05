export default class Quote {
    constructor(data) {
        this.id = data.id || data._id
        this.url = data.url
        this.author = data.author
        this.body = data.body
    }

    get Template() {
        return /*html*/ `
<h3>${this.body}</h3>
<p>${this.author}</p>
`


    }


}