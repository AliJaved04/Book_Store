import ApiServices from "@/services/Api";
const state = {
    bookList: [],
    dummyList: [],

};

const getters = {
    getBookList: state => state.bookList,
    getDummyData: state => state.dummyList,


};
const mutations = {
    setBookList(state, bookList) {
        state.bookList = bookList;
    },

    setDummyData(state, dummyList) {
        state.dummyList = dummyList
    },

};

const actions = {
    async fetchBooks({ commit }) {
        const books = await ApiServices.showAllBooks()
        commit('setBookList', books);
    },
    fetchPopularBooks({ commit }) {
        const books = [
            {
                id: 1,
                author: "Author01",
                title: "Book Title 01",
                src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
                description: "This is all the description we need about this single product",
                price: 500,
                rating: 4.5,
            },
            {
                id: 2,
                author: "Author02",
                title: "Book Title 02",
                description: "This is all the description we need about this single product",
                src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
                price: 500,
                rating: 1,

            },

            {
                id: 3,
                author: "Author03",
                title: "Book Title 03",
                description: "This is all the description we need about this single product",
                price: 500,
                src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
                rating: 2,

            },
            {
                id: 4,
                description: "This is all the description we need about this single product",
                author: "Author04",
                src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
                title: "Book Title 04",
                price: 500,
                rating: 3,

            },
            {
                id: 5,
                description: "This is all the description we need about this single product",
                author: "Author05",
                src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
                title: "Book Title 05",
                price: 500,
                rating: 4.0,

            },
            {
                id: 6,
                description: "This is all the description we need about this single product",
                author: "Author06",
                src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",

                title: "Book Title 06",
                price: 500,
                rating: 4.1,

            },
            {
                id: 7,
                description: "This is all the description we need about this single product",
                author: "Author07",
                src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",

                title: "Book Title 07",
                price: 500,
                rating: 4.0,

            },

            {
                id: 8,
                description: "This is all the description we need about this single product",
                author: "Author08",
                title: "Book Title 08",
                src: "https://picsum.photos/500/300?image=232",
                price: 500,
                rating: 3.5,

            },
        ];
        const popularBooks = books.filter(book => book.rating > 3);
        commit('setBookList', popularBooks);
    },


    async getSingleBook({ commit }, id) {
        const res = await ApiServices.getSingleBook(id);
        return res;
    },

    async addBook({ commit }, bookData) {
        const res = await ApiServices.addBook(localStorage.getItem("access_token"), bookData)
        return res;
    },

    async deleteABook({ commit }, id) {
        const res = await ApiServices.deleteBook(localStorage.getItem("access_token"), id);
        return res
    },

    async updateABook({ commit }, bookData) {
        const res = await ApiServices.updateBook(localStorage.getItem("access_token"), bookData)
        return res
    },




};



export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
