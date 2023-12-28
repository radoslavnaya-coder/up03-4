<template>
  <v-sheet width="600" class="mx-auto" color="#001427">
    <v-container fast-fail @submit.prevent>
<!--      <v-file-input-->
<!--          label="Выбрать фото"-->
<!--          variant="outlined"-->
<!--          class="text-white pa-0 ma-0"-->
<!--          prepend-icon=""-->
<!--      ></v-file-input>-->
<!--      <span class="text-danger" v-if="errors?.name">{{ errors.name[0] }}</span>-->
      <v-text-field
          v-model="post.title"
          label="Заголовок"
          variant="outlined"
      ></v-text-field>
      <span class="d-block mb-4 text-danger" v-if="errors?.title">{{ errors.title[0] }}</span>
      <v-textarea
          v-model="post.description"
          label="Описание"
          variant="outlined"
      ></v-textarea>
      <span class="d-block mb-4 text-danger" v-if="errors?.description">{{ errors.description[0] }}</span>
      <v-btn @click="addPost" block class="mt-2" color="#1a579a">Опубликовать</v-btn>
    </v-container>
  </v-sheet>
</template>
<script setup>
import {reactive, ref} from "vue";
import {http} from "../../axios/index.js";
import {useRouter} from 'vue-router'

const router = useRouter();

const errors = ref([])
const post = reactive({
  "category_id": 1,
  "title": "",
  "description": "",
  "type": "img",
  "content_data": "string"//todo
})

const addPost = () => {
  http.post(`/api/post`, post)
      .then((res) => {
        //todo Перебросить на мои посты
        router.push({name: 'Posts'})
      })
      .catch(error => {
        if (error.response.status === 422) {
          errors.value = error.response.data.errors
        }
      })
}
</script>