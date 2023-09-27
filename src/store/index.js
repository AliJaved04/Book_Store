import { createStore } from "vuex";
import book from "./modules/book_module";
export default createStore(
    {
        state:
        {
            counter: 10
        },
        getters:
        {

        },
        mutations:
        {

        },
        actions: {},
        modules: {
            book
        }

    })