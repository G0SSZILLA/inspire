// @ts-ignore
import Quote from "../models/Quote.js";
import store from "../store.js";

// @ts-ignore
const _quoteApi = axios.create({
    baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
    timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {

    async getQuote() {
        console.log("inspiration");
        let res = await _quoteApi.get();
        console.log('quote', res.data);

        let quote = new Quote(res.data.quote)
        store.commit("quote", quote);
    }
}

const quoteService = new QuoteService();
export default quoteService;