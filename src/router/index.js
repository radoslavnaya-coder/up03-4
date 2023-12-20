import {createRouter, createWebHistory} from 'vue-router'
import ProductListPage from '../pages/product/ProductListPage.vue'
import CreateProductPage from '../pages/product/CreateProductPage.vue'
import EditProductPage from '../pages/product/EditProductPage.vue'
import RegisterPage from '../pages/auth/RegisterPage.vue'
import LoginPage from '../pages/auth/LoginPage.vue'
import CartPage from '../pages/cart/CartPage.vue'
import Posts from '../pages/post/Posts.vue'

import OrderListPage from '../pages/order/OrderListPage.vue'
import EditOrdersPage from '../pages/order/EditOrderPage.vue'
import MyOrders from '../pages/order/MyOrders.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: ProductListPage
        },
        {
            path: '/products',
            name: 'Products',
            component: ProductListPage
        },
        {
            path: '/products/create',
            name: 'CreateProduct',
            component: CreateProductPage
        },
        {
            path: '/products/edit/:productId',
            name: 'EditProduct',
            component: EditProductPage
        },


        {
            path: '/orders',
            name: 'Orders',
            component: OrderListPage
        },
        {
            path: '/orders/edit/:orderId',
            name: 'EditOrder',
            component: EditOrdersPage
        },

        {
            path: '/register',
            name: 'Register',
            component: RegisterPage
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginPage
        },

        {
            path: '/my_order',
            name: 'MyOrders',
            component: MyOrders
        },

        {
            path: '/cart',
            name: 'Cart',
            component: CartPage
        },
        {
            path: '/posts',
            name: 'Posts',
            component: Posts
        },


    ]
})


export default router