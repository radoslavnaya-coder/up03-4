<template>
  <template v-if="!isMobile()">
    <header>
      <div class="d-flex flex-column flex-md-row align-items-center">
        <router-link
          :to="{ name: 'Posts' }"
          class="d-flex align-items-center text-dark text-decoration-none"
        >
          <img :src="imgLogo" class="fs-4 py-2" />
        </router-link>
        <nav class="mx-12">
          <router-link
            :to="{ name: 'Posts' }"
            class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
          >
            Новости
          </router-link>
          <router-link
            :to="{ name: 'Friends' }"
            class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
          >
            Друзья
          </router-link>
          <router-link
            :to="{ name: 'Chats' }"
            class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
          >
            Чаты
          </router-link>
          <router-link
            :to="{ name: 'Profile' }"
            class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
          >
            Профиль
          </router-link>
        </nav>
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto align-center">
          <!--        {{ store.isAuth }}-->
          <!--        {{ store.isAdmin }}-->
          <!--        admin routes-->
          <template v-if="store.isAuth && store.isAdmin">
            <router-link
              :to="{ name: 'CreateProduct' }"
              class="me-3 py-2 text-dark text-decoration-none"
              >Добавить продукт
            </router-link>
            <router-link
              :to="{ name: 'Products' }"
              class="me-3 py-2 text-dark text-decoration-none"
              >Список продуктов
            </router-link>
            <router-link
              :to="{ name: 'Orders' }"
              class="me-3 py-2 text-dark text-decoration-none"
              >Заказы
            </router-link>
          </template>

          <!--        client routes-->
          <template v-if="store.isAuth && !store.isAdmin">
            <!-- <router-link :to="{name: 'Products'}" class="me-3 py-2 text-dark text-decoration-none">Список продуктов
          </router-link>
          <router-link :to="{name: 'MyOrders'}" class="me-3 py-2 text-dark text-decoration-none">Мои
            заказы
          </router-link>
          <router-link :to="{name: 'Cart'}" class="me-3 py-2 text-dark text-decoration-none">Корзина
          </router-link> -->
            <router-link :to="{ name: 'AddPost' }">
              <img :src="addButton" />
            </router-link>
          </template>

          <!--        auth routes-->
          <router-link
            v-if="!store.isAuth"
            :to="{ name: 'Login' }"
            class="me-3 py-2 text-white text-decoration-none fs-5 text-teachat__hover"
          >
            Авторизация
          </router-link>
          <router-link
            v-if="!store.isAuth"
            :to="{ name: 'Register' }"
            class="me-3 py-2 text-white text-decoration-none fs-5 text-teachat__hover"
          >
            Регистрация
          </router-link>

          <span
            v-if="store.isAuth"
            @click="logOut"
            role="button"
            class="me-3 py-2 text-white text-decoration-none fs-5 ml-4"
            >Выход</span
          >
        </nav>
      </div>
      <v-container class="" style="width: 25vw">
        <v-row>
          <v-col class="py-0" cols="11">
            <v-text-field
              v-model="search"
              :rules="searchEngine"
              variant="outlined"
              clearable
              placeholder="Поиск по идентификатору @"
              type="text"
              class="text-white"
              @click:clear="clearMessage"
              @click:send="findName"
            ></v-text-field>
          </v-col>
          <v-col cols="1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
              />
            </svg>
          </v-col>
        </v-row>
      </v-container>
    </header>

    <!--  <router-link :to="{name: 'Products'}"> ProductListPage</router-link>-->
    <!--  <router-link :to="{name: 'CreateProduct'}"> CreateProduct</router-link>-->
    <!--  <router-link :to="{name: 'EditProduct', params: {'productId':'3'}}"> EditProduct</router-link>-->

    <!--  <router-link :to="{name: 'Orders'}"> OrdersList</router-link>-->
    <!--  <router-link :to="{name: 'EditOrder', params: {'orderId':'4'}}"> EditOrder</router-link>-->
  </template>
  <template v-else>
   
    <!-- <v-toolbar color="#001427"> 
      <v-toolbar-title> </v-toolbar-title>
      <v-btn >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
          />
        </svg>
      </v-btn>
    </v-toolbar> -->
          <v-container>
            <v-row>
              <v-col cols="9">

              </v-col>
              <v-col cols="3">
<v-menu>
            <template v-slot:activator="{ props }">
              <v-btn color="#001427" v-bind="props">
                <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
          />
        </svg>
              </v-btn>
            </template>

            <v-list bg-color="#001427">
              <v-list-item>
                <nav class="mx-12">
          <router-link
            :to="{ name: 'Posts' }"
            class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
          >
            Новости
          </router-link>
          <router-link
            :to="{ name: 'Friends' }"
            class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
          >
            Друзья
          </router-link>
          <router-link
            :to="{ name: 'Chats' }"
            class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
          >
            Чаты
          </router-link>
          <router-link
            :to="{ name: 'Profile' }"
            class="me-8 py-2 text-white text-decoration-none fs-4 fw-bold"
          >
            Профиль
          </router-link>
          <v-spacer class="pb-3"></v-spacer>
          <router-link
            v-if="!store.isAuth"
            :to="{ name: 'Login' }"
            class="me-3 py-2 text-white text-decoration-none fs-4 fw-bold text-teachat__hover"
          >
            Авторизация
          </router-link>
          <router-link
            v-if="!store.isAuth"
            :to="{ name: 'Register' }"
            class="me-3 py-2 text-white text-decoration-none fs-4 fw-bold text-teachat__hover"
          >
            Регистрация
          </router-link>

          <span
            v-if="store.isAuth"
            @click="logOut"
            role="button"
            class="me-3 py-2 text-white text-decoration-none fs-4 fw-bold ml-4"
            >Выход</span
          >
        </nav>
              </v-list-item>
            </v-list>
          </v-menu>
              </v-col>
              
            </v-row>
          </v-container>
          

    
  </template>
</template>

<script setup>
import { onMounted } from "vue";
import { http } from "../axios/index.js";
import { useRouter } from "vue-router";
import { store } from "../store/index.js";
import imgLogo from "@/assets/logo.png";
import addButton from "@/assets/addButton.png";

const router = useRouter();
const logOut = () => {
  http
    .get(`/api/logout`)
    .then((res) => {
      store.isAuth = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user_role");
    })
    .catch(() => {
      store.isAuth = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user_role");
    });
};

onMounted(() => {});
</script>
<script>
export default {
  data: () => ({
    valid: false,
    search: "@",
    searchEngine: [
      (value) => {
        if (value) return true;

        return "Используйте идентификатор @";
      },
      (value) => {
        if (value?.length <= 13) return true;

        return "Имя не может быть длиннее 12 знаков";
      },
    ],
  }),
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.text-teachat {
  color: #f4d58d;
}
.text-teachat__hover:hover {
  color: #f4d58d;
}
</style>
