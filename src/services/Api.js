import axios from "axios";

const BASE_URL = "http://10.0.10.211:3300/api";

const ApiServices =
{


    async getSingleBook(id) {
        const res = await axios.get(`${BASE_URL}/showbooks/${id}`);
        return res.data;

    },

    async registerUser(userData) {

        const response = await axios.post(`${BASE_URL}/register`, {
            name: userData.username,
            email: userData.email,
            password: userData.password
        })
        const data = await response.data;

        return data

    },

    async loginUser(userData) {

        const response = await axios.post(`${BASE_URL}/login`, {
            email: userData.email,
            password: userData.password
        })
        const data = await response.data;

        return data

    },

    async showUserProfile(token) {

        const profile = await axios.get(`${BASE_URL}/user/profile`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

        return profile.data;

    },


    async updateUserProfile(token, userData) {


        const profile = await axios.put(`${BASE_URL}/updateUser`,
            {
                name: userData.name,
                email: userData.email,
                password: userData.password
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

        return profile.data;
    },


    async deleteUser(token, user_id) {
        const response = await axios.delete(`http://10.0.10.211:3300/api/users/${user_id}`);
    },

    async newletterSubscription(token) {
        const response = await axios.post(
            `${BASE_URL}/subscribe`, {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;

    },

    async showAllBooks() {
        const res = await axios.get(`${BASE_URL}/showbooks`);
        return res.data;
    },

    async logout(token) {
        const response = await axios.post(
            `${BASE_URL}/logout`, {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response
    },

    async addToWishlist(token, id) {
        const response = await axios.post(
            `${BASE_URL}/wishlist/add/${id}`, {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    },


    async getWishList(token) {
        const response = await axios.get(`${BASE_URL}/wishlist/show`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data;
    },
    async showWishList(token) {
        const response = await axios.post(
            `${BASE_URL}/wishlist/show`, {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    },


    async addToCart(token, cartItem) {

        const response = await axios.post(`${BASE_URL}/cart/add`, {
            user_id: cartItem.user_id,
            book_id: cartItem.book_id,
            quantity: cartItem.quantity,
            price: cartItem.price
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return response.data
    }
    ,

    async showCartItems(token) {
        const response = await axios.get(`${BASE_URL}/cart`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return response.data
    },

    async updateCart(token, cartItem) {
        const response = await axios.post(`${BASE_URL}/cart/update/${cartItem.id}`, {
            user_id: cartItem.user_id,
            book_id: cartItem.book_id,
            quantity: cartItem.quantity,
            price: cartItem.price
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return response.data
    },
    async deleteCartItem(token, id) {
        const response = await axios.delete(`${BASE_URL}/cart/remove/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return response.data
    },

    async placeOrder(token, user_id) {
        const response = await axios.post(`${BASE_URL}/create/orders`, {
            user_id: user_id,
            status: "pending"
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return response.data
    },

    async showOrdersUser(token, user_id) {
        const response = await axios.get(`${BASE_URL}/orders/${user_id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return response.data
    },

    async addBook(token, bookData) {
        const response = await axios.post(`${BASE_URL}/create/bookcatalog`, {
            title: bookData.title,
            author: bookData.author,
            cover_image_url: bookData.cover_image_url,
            price: bookData.price,
            description: bookData.description
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return response.data
    },
    async deleteBook(token, id) {
        const response = await axios.delete(`${BASE_URL}/deletebooks/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return response.data
    },
    async updateBook(token, bookData) {
        const response = await axios.put(`${BASE_URL}/updatebooks/${bookData.id}`, {
            title: bookData.title,
            author: bookData.author,
            cover_image_url: bookData.cover_image_url,
            price: bookData.price,
            description: bookData.description
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return response.data
    },

    async showAllUsers(token) {
        const response = await axios.get(`${BASE_URL}/users`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return response.data
    },
    async deleteUser(token, id) {
        const response = await axios.delete(`${BASE_URL}/users/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return response.data
    },
    async showAllOrders(token) {
        const response = await axios.get(`${BASE_URL}/show/orders`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return response.data
    },

    async updateOrderStatus(token, orderData) {
        const response = await axios.post(`${BASE_URL}/update/orders/${orderData.id}`, {
            user_id: orderData.user_id,
            status: orderData.status
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return response.data
    },
    async deleteOrder(token, id) {
        const response = await axios.delete(`${BASE_URL}/delete/orders/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return response.data
    }



}

export default ApiServices