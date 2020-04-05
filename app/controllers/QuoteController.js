import QuoteService from "../services/QuoteService.js";
import store from "../store.js";


function drawQuote() {
    document.getElementById('quote').innerHTML = store.State.quote.Template
    console.log("THE QUOTE MAN SAYS:", store.State.Quotes)
}
//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
    constructor() {
        store.subscribe('quote', drawQuote);
        QuoteService.getQuote();
    }
}