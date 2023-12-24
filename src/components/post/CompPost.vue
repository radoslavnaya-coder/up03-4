<template>
  <v-card class="card bg-teachat mx-auto my-8" width="690" variant="flat">
    <!--        img user and action-->
    <v-card-title class="d-flex">
      <v-avatar
        rounded="3"
        size="122"
        class="avatar__block align-self-center"
      >
        <v-img
          alt="Avatar"
          :src="props.post.avatar_src"
        ></v-img>
      </v-avatar>
      <p class="text-teachat avatar__block__name">@{{ props.post.user_name }}</p>
    </v-card-title>

    <!--        content-->
    <v-card class="mx-auto card bg-teachat card__content" width="690">
      <v-img :src="props.post.content_src" height="690" cover></v-img>

      <v-card-title class="text-teachat fs-4 my-2"
        >{{ props.post.title }}</v-card-title
      >
      <v-card-text class="text-white fs-5">
        {{ props.post.description }}
      </v-card-text>
    </v-card>
  </v-card>
  
</template>

<script setup>
import imgFile from "@assets/post-img__1.png";

const props = defineProps({
  post: Object
})
</script>
<style scoped>
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
