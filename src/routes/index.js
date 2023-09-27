import { createRouter, createWebHistory } from 'vue-router'
import UserProfile from '../components/UserProfile.vue'
import ReviewComponent from '../components/ReviewComponent.vue'
import TrackOrder from '../components/TrackOrder.vue'
import UserDashboard from '../components/UserDashboard.vue'
import MyOrders from '../components/MyOrders.vue'
import LoginComponent from '../components/LoginComponent.vue'
import RegisterComponent from '../components/RegisterComponent.vue'
import BooksCatalog from '../components/BooksCatalog.vue'
import HomeComponent from '../components/HomeComponent.vue'
import AllProducts from '../components/AllProducts.vue'
import SingleProduct from '../components/SingleProduct.vue'
import StoreTest from '../components/StoreTest.vue'
const routes = [


    {
        path: "/register",
        name: "Register_Component",
        component: RegisterComponent,

    },
    {
        path: "/storetest",
        name: "StoreTest",
        component: StoreTest,

    },
    {
        path: "/singleproduct/:product_id",
        name: "SingleProduct",
        component: SingleProduct,
        props: true

    },
    {
        path: "/allproducts",
        name: "AllProducts",
        component: AllProducts,

    },
    {
        path: "/HomeComponent",
        name: "HomeComponent",
        component: HomeComponent,

    },

    {
        path: "/catalog",
        name: "BooksCatalog",
        component: BooksCatalog,

    },




    {
        path: "/login",
        name: "LoginComponent",
        component: LoginComponent,

    },
    {

        path: "/userDashboard",
        name: "UserDashboard",
        component: UserDashboard,
        children:
            [
                {
                    path: "userprofile",
                    name: "UserProfile",
                    component: UserProfile

                },
                {
                    path: "myorders",
                    name: "MyOrders",
                    component: MyOrders

                },

                {
                    name: "ReviewComponent",
                    path: "ReviewComponent/:order_id/:productName",
                    component: ReviewComponent,
                    props: true,
                },
                {
                    name: "TrackOrder",
                    path: "trackorder",
                    component: TrackOrder,

                }
            ]
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
