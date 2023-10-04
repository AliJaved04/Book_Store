import ApiServices from "@/services/Api";
const state = {
    wishList: []
}
const getters = {
    getWishList: state => state.wishList,

}
const mutations = {
    setWishList(state, items) {
        state.wishList = items;
    },
}
const actions = {
    fetchItems({ commit }) {
        const wishlist = [
            {
                "id": 1,
                "user_id": 3,
                "book_id": 1,
                "created_at": "2023-09-27T18:58:53.000000Z",
                "updated_at": "2023-09-27T18:58:53.000000Z"
            },
            {
                "id": 2,
                "user_id": 3,
                "book_id": 3,
                "created_at": "2023-09-27T19:01:50.000000Z",
                "updated_at": "2023-09-27T19:01:50.000000Z"
            },
            {
                "id": 3,
                "user_id": 3,
                "book_id": 5,
                "created_at": "2023-09-27T19:01:54.000000Z",
                "updated_at": "2023-09-27T19:01:54.000000Z"
            }
        ]

        commit('setWishList', wishlist);

    },
    async addToWishList({ commit }, id) {

        const res = await ApiServices.addToWishlist(localStorage.getItem("access_token"), id)
        console.log(res)
    },

    async showWishList({ commit }) {

        const res = await ApiServices.getWishList(localStorage.getItem("access_token"))
        commit("setWishlist", res)
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
