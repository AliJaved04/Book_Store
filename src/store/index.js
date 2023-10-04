import { createStore } from "vuex";
import book from "./modules/book_module";
import cart from "./modules/cart_module";
import user_module from "./modules/user_module";
import wishlist from "./modules/wishlist_module";
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
            book,
            cart,
            user_module,
            wishlist
        }

    })