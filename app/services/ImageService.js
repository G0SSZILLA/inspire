// @ts-ignore

import Image from "../models/Image.js";
import store from "../store.js";


// @ts-ignore
const imgApi = axios.create({
    baseURL: "//bcw-sandbox.herokuapp.com/api/images",
    timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {

    async getImage() {
        let res = await imgApi.get();
        console.log("Picture", res.data);
        let image = new Image(res.data)
        store.commit("image", image);
    }


}

const imageService = new ImageService();
export default imageService;