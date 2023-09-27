import ApiServices from "@/services/Api";
const state = {
    bookList: [

    ],

    dummyList: []
};

const mutations = {
    setBookList(state, bookList) {
        state.bookList = bookList;
    },

    setDummyData(state, dummyList) {
        state.dummyList = dummyList
    }
};

const actions = {
    fetchBooks({ commit }) {
        const books = [
            {
                id: 1,
                title: "Book Title 01",
                src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
                descriptiom: "This is all the description we need about this single product",
                price: 500,
                rating: 4.5,
            },
            {
                id: 2,
                title: "Book Title 02",
                descriptiom: "This is all the description we need about this single product",
                src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
                price: 500,
                rating: 1,

            },

            {
                id: 3,
                title: "Book Title 03",
                descriptiom: "This is all the description we need about this single product",
                price: 500,
                src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
                rating: 2,

            },
            {
                id: 4,
                descriptiom: "This is all the description we need about this single product",

                src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",

                title: "Book Title 04",
                price: 500,
                rating: 3,

            },
            {
                id: 5,
                descriptiom: "This is all the description we need about this single product",

                src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",

                title: "Book Title 05",
                price: 500,
                rating: 4.0,

            },
            {
                id: 6,
                descriptiom: "This is all the description we need about this single product",

                src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",

                title: "Book Title 06",
                price: 500,
                rating: 4.1,

            },
            {
                id: 7,
                descriptiom: "This is all the description we need about this single product",

                src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",

                title: "Book Title 07",
                price: 500,
                rating: 4.0,

            },

            {
                id: 8,
                descriptiom: "This is all the description we need about this single product",

                title: "Book Title 08",
                src: "https://picsum.photos/500/300?image=232",
                price: 500,
                rating: 3.5,

            },
        ];
        commit('setBookList', books);
    },
    fetchPopularBooks({ commit }) {
        const books = [
            {
                id: 1,
                title: "Book Title 01",
                src: "book5.jpg",
                price: 500,
                rating: 4.5,
            },
            {
                id: 2,
                title: "Book Title 02",
                src: "book1.jpg",
                price: 500,
                rating: 1,

            },

            {
                id: 3,
                title: "Book Title 03",
                src: "book2.jpg",
                price: 500,
                rating: 2,

            },
            {
                id: 4,
                title: "Book Title 04",
                src: "book5.jpg",
                price: 500,
                rating: 3,

            },
            {
                id: 5,
                title: "Book Title 05",
                src: "book1.jpg",
                price: 500,
                rating: 4.0,

            },
            {
                id: 6,
                title: "Book Title 06",
                src: "book5.jpg",
                price: 500,
                rating: 4.1,

            },
            {
                id: 7,
                title: "Book Title 07",
                src: "book1.jpg",
                price: 500,
                rating: 4.0,

            },

            {
                id: 8,
                title: "Book Title 08",
                src: "book2.jpg",
                price: 500,
                rating: 3.5,

            },
        ];
        const popularBooks = books.filter(book => book.rating > 3);
        commit('setBookList', popularBooks);
    },

    async fetchDummy({ commit }) {
        const data = await ApiServices.getAllProducts();
        commit('setDummyData', data.products);

    }



};

const getters = {
    getBookList: state => state.bookList,
    getDummyData: state => state.dummyList,

};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
