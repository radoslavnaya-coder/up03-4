<template>
  <header>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4">
      <router-link
        :to="{name: 'Posts'}"
        class="d-flex align-items-center text-dark text-decoration-none"
      >
        <img :src="imgLogo" class="fs-4 py-2" />
      </router-link>
      <nav class="mx-12">
        <router-link
          :to="{name: 'Posts'}"
          class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
        >
          Новости
        </router-link>
        <router-link
          :to="{name: 'Friends'}"
          class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
        >
          Друзья
        </router-link>
        <router-link
          :to="{name: 'Chats'}"
          class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
        >
          Чаты
        </router-link>
        <router-link
          :to="{name: 'Profile'}"
          class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
        >
          Профиль
        </router-link>
      </nav>
      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">

        <!--        {{ store.isAuth }}-->
        <!--        {{ store.isAdmin }}-->
        <!--        admin routes-->
        <template v-if="store.isAuth&&store.isAdmin">
          <router-link
            :to="{name: 'CreateProduct'}"
            class="me-3 py-2 text-dark text-decoration-none"
            >Добавить продукт
          </router-link>
          <router-link
            :to="{name: 'Products'}"
            class="me-3 py-2 text-dark text-decoration-none"
            >Список продуктов
          </router-link>
          <router-link
            :to="{name: 'Orders'}"
            class="me-3 py-2 text-dark text-decoration-none"
            >Заказы
          </router-link>
        </template>

        <!--        client routes-->
        <template v-if="store.isAuth&&!store.isAdmin">
          <!-- <router-link :to="{name: 'Products'}" class="me-3 py-2 text-dark text-decoration-none">Список продуктов
          </router-link>
          <router-link :to="{name: 'MyOrders'}" class="me-3 py-2 text-dark text-decoration-none">Мои
            заказы
          </router-link>
          <router-link :to="{name: 'Cart'}" class="me-3 py-2 text-dark text-decoration-none">Корзина
          </router-link> -->
          <router-link :to="{name: 'AddPost'}">
            <img :src="addButton" />
          </router-link>
        </template>

        <!--        auth routes-->
        <router-link
          v-if="!store.isAuth"
          :to="{name: 'Login'}"
          class="me-3 py-2 text-white text-decoration-none fs-5 text-teachat__hover"
        >
          Авторизация
        </router-link>
        <router-link
          v-if="!store.isAuth"
          :to="{name: 'Register'}"
          class="me-3 py-2 text-white text-decoration-none fs-5 text-teachat__hover"
        >
          Регистрация
        </router-link>

        <span
          v-if="store.isAuth"
          @click="logOut"
          role="button"
          class="me-3 py-2 text-dark text-decoration-none"
          >Выход</span
        >
      </nav>
    </div>
  </header>

  <!--  <router-link :to="{name: 'Products'}"> ProductListPage</router-link>-->
  <!--  <router-link :to="{name: 'CreateProduct'}"> CreateProduct</router-link>-->
  <!--  <router-link :to="{name: 'EditProduct', params: {'productId':'3'}}"> EditProduct</router-link>-->

  <!--  <router-link :to="{name: 'Orders'}"> OrdersList</router-link>-->
  <!--  <router-link :to="{name: 'EditOrder', params: {'orderId':'4'}}"> EditOrder</router-link>-->
</template>

<script setup>
import {onMounted} from "vue";
import {http} from "../axios/index.js";
import {useRouter} from "vue-router";
import {store} from "../store/index.js";
import imgLogo from "@/assets/logo.png";
import addButton from "@/assets/addButton.png";


const router = useRouter();
const logOut = () => {
  http.get(`/api/logout`)
      .then((res) => {
        store.isAuth = false
        localStorage.removeItem("token")
        localStorage.removeItem("user_role")

      })
      .catch(() => {
        store.isAuth = false
        localStorage.removeItem("token")
        localStorage.removeItem("user_role")
      })
}

onMounted(() => {

})
</script>

<style scoped>
.text-teachat {
       color: #F4D58D;
   }
 .text-teachat__hover:hover{
     color: #F4D58D;
 }
</style>
