import axios from "axios";

const BASE_URL = "http://10.0.10.211:3300/api";

const ApiServices =
{


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


}

export default ApiServices