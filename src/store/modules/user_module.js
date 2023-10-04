import ApiServices from "@/services/Api";
const state = {

};

const getters = {

};
const mutations = {

};

const actions = {
    async registerUser({ commit }, user) {
        const res = await ApiServices.registerUser(user);
        return res;
    },
    async loginUser({ commit }, user) {
        const res = await ApiServices.loginUser(user);
        return res;
    },


    async userProfile({ commit }, token) {
        const profile = await ApiServices.showUserProfile(token);
        return profile;
    },

    async updateUserProfile({ commit }, user) {


        const profile = await ApiServices.updateUserProfile(localStorage.getItem("access_token"), user);
        return profile
    },

    async deleteUser({ commit }, user_id) {
        // const res = await ApiServices.deleteUser(state.token , user_id);
        console.log(user_id)
    },


    async logout({ commit }, token) {
        const res = await ApiServices.logout(token);
        return res;
    },

    async subscribe({ commit }, token) {
        const res = await ApiServices.newletterSubscription(token);
        return res;
    },
    async showAllUsers({ commit }) {
        const res = await ApiServices.showAllUsers(localStorage.getItem("access_token"))
        return res;
    },
    async deleteUser({ commit }, id) {
        const res = await ApiServices.deleteUser(localStorage.getItem("access_token"), id)
        return res;
    },



}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
