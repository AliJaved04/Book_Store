const state = {
    cartItems: []
}
const getters = {
    getCartItems: state => state.cartItems,

}
const mutations = {
    setCartItems(state, items) {
        state.cartItems = items;
    },
}
const actions = {
    fetchItems({ commit }) {
        const items = [
            {
                id: 1,
                author: "Author01",
                title: "Book Title 01",
                src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
                description: "This is all the description we need about this single product",
                price: 500,
                rating: 4.5,
                quantity: 4,
            },
            {
                id: 2,
                author: "Author02",
                title: "Book Title 02",
                description: "This is all the description we need about this single product",
                src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
                price: 500,
                rating: 1,
                quantity: 6

            },
        ]
        commit('setCartItems', items);

    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
