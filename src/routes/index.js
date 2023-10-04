import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from '../components/LoginComponent.vue'
import RegisterComponent from '../components/RegisterComponent.vue'
import HomeComponent from '../components/HomeComponent.vue'
import AllProducts from '../components/AllProducts.vue'
import SingleProduct from '../components/SingleProduct.vue'
import CartPage from '../components/CartPage.vue'
import LandingPage from '../components/LandingPage.vue'
import MyOrders from '../components/MyOrders.vue'
import Orders from '../components/Orders.vue'
import dummy from '../components/dummy.vue'
import UserProfile from '../components/UserProfile.vue'
import Wishlist from '../components/Wishlist.vue'
import AddBook from '../components/AddBook.vue'
import AllUsers from '../components/AllUsers.vue'
const routes = [


    {
        path: "/register",
        name: "Register_Component",
        component: RegisterComponent,

    },
    {
        path: "/dummy",
        name: "dummy",
        component: dummy,

    },

    {
        path: "/",
        name: "HomeComponent",
        component: HomeComponent,
        children:
            [
                {
                    path: "addbook",
                    name: "AddBook",
                    component: AddBook,
                },
                {
                    path: "allproducts",
                    name: "AllProducts",
                    component: AllProducts,
                },
                {
                    path: "allusers",
                    name: "AllUsers",
                    component: AllUsers,
                },
                {
                    path: "wishlist",
                    name: "Wishlist",
                    component: Wishlist,
                },
                {
                    path: "userProfile",
                    name: "UserProfile",
                    component: UserProfile,
                },

                {
                    path: "orders",
                    name: "Orders",
                    component: Orders,
                }, {
                    path: "myorders",
                    name: "MyOrders",
                    component: MyOrders,
                },
                {
                    path: "/singleproduct/:product_id",
                    name: "SingleProduct",
                    component: SingleProduct,
                    props: true

                },
                {
                    path: "",
                    name: "LandingPage",
                    component: LandingPage,
                },
                {
                    path: "allproducts",
                    name: "AllProducts",
                    component: AllProducts,
                },
                {
                    path: "cartpage",
                    name: "CartPage",
                    component: CartPage,
                },
            ]
    },
    {
        path: "/login",
        name: "LoginComponent",
        component: LoginComponent,

    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
