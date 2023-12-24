<template>
  <!-- Banner without friends -->
  <v-banner lines="one" class="my-4" bg-color="transparent">
    <v-img
      alt="Avatar"
      src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      width="210"
      style="border-radius: 10px; border: 1px solid #f4d58d"
      class="v-col-2"
    >
    </v-img>
    <v-banner-text class="v-col-9 ml-4 fs-3" style="color: #f4d58d">
      @viliskas
    </v-banner-text>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <router-link :to="{ name: 'ProfileEdit' }">
        <path
          fill="white"
          d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"
        />
      </router-link>
    </svg>
  </v-banner>

  <v-container class="mx-0">
    <v-row>
      <v-col cols="12" md="2">
        <v-text class="fs-5 text-white" block rounded="10" width="210"
          >Друзья</v-text
        >
      </v-col>
      <v-col cols="12" md="3">
        <v-text class="fs-5 text-white" block rounded="10" width="210"
          >23</v-text
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="11" md="2">
        <v-text class="fs-5 text-white" block rounded="10" width="210"
          >Посты</v-text
        >
      </v-col>
      <v-col cols="11" md="3">
        <v-text class="fs-5 text-white" block rounded="10" width="210"
          >23</v-text
        >
      </v-col>
    </v-row>
  </v-container>

  <v-card class="card bg-teachat mx-auto my-8" width="690" variant="flat">
    <!--        img user and action-->
    <v-card-title class="d-flex">
      <v-avatar
        rounded="3"
        size="122px"
        class="avatar__block align-self-center"
      >
        <v-img
          alt="Avatar"
          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
        ></v-img>
      </v-avatar>
      <p class="text-teachat avatar__block__name">@viliskas</p>
    </v-card-title>

    <!--        content-->
    <v-card class="mx-auto card bg-teachat card__content" width="690">
      <v-img :src="imgFile" height="690" cover></v-img>

      <v-card-title class="text-teachat fs-4 my-2"
        >Булочка “парфе”</v-card-title
      >
      <v-card-text class="text-white fs-5">
        Очень вкусные французские булки в самом сердце Италии
      </v-card-text>
    </v-card>
  </v-card>
</template>
<script setup>
import imgFile from "@assets/post-img__1.png";
</script>
<style scoped>
button {
  border-radius: 10px;
}
.bg-teachat {
  background: #001427;
}

.card {
  border-radius: 10px;
}

.text-teachat {
  color: #f4d58d;
}

.card__content {
  margin-top: -10%;
  z-index: -1;
}

.avatar__block__name {
  margin: 1em 0 0 1em;
}

.avatar__block {
  border: 1px solid #f4d58d;
  margin-left: 1vw;
}
</style>
