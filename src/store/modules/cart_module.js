import ApiServices from "@/services/Api";

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

    },

    async addToCart({ commit }, cartItem) {
        const response = await ApiServices.addToCart(localStorage.getItem("access_token"), cartItem);
        return response;
    },

    async getCartItems({ commit }) {
        const response = await ApiServices.showCartItems(localStorage.getItem("access_token"))
        return response
    },

    async updateCart({ commit }, cartItem) {

        const response = await ApiServices.updateCart(localStorage.getItem("access_token"), cartItem);
        return response

    },
    async deleteCartItem({ commit }, id) {

        const response = await ApiServices.deleteCartItem(localStorage.getItem("access_token"), id);
        return response
    },
    async placeOrder({ commit }) {
        const response = await ApiServices.placeOrder(localStorage.getItem("access_token"))
        return response

    },

    async showOrdersUser({ commit }) {
        const response = await ApiServices.showOrdersUser(localStorage.getItem("access_token"), localStorage.getItem("user_id"));
        return response;
    },
    async showAllOrders({ commit }) {
        const response = await ApiServices.showAllOrders(localStorage.getItem("access_token"));
        return response;
    },

    async updateOrderStatus({ commit }, orderData) {
        const res = await ApiServices.updateOrderStatus(localStorage.getItem("access_token"), orderData);
        return res;
    },



    async OrderItems({ commit }, orderId) {
        const res = await ApiServices.getItems(localStorage.getItem("access_token"), orderId);
        return res;
    }




}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
