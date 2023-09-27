import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

const ApiServices =
{
    async getAllProducts() {

        const response = await axios.get(BASE_URL);

        return response.data
    }

}

export default ApiServices