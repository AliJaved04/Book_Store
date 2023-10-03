const state = {
    wishList: []
}
const getters = {
    getWishLisr: state => state.wishList,

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

    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
