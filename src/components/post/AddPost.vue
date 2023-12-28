<template>
  <v-sheet width="600" class="mx-auto" color="#001427">
    <v-container fast-fail @submit.prevent>
      <v-file-input
          label="Выбрать фото"
          variant="outlined"
          class="text-white pa-0 ma-0"
          prepend-icon=""
      ></v-file-input>
      <v-text-field
          v-model="post.title"
          label="Заголовок"
          :rules="titleRules"
          variant="outlined"
      ></v-text-field>
      <v-textarea
          v-model="post.description"
          :rules="descriptionRules"
          label="Описание"
          variant="outlined"
      ></v-textarea>
      <v-btn type="submit" block class="mt-2">Опубликовать</v-btn>
    </v-container>
  </v-sheet>
</template>
<script setup>
import {reactive, ref} from "vue";

const title = ref('')
const titleRules = ref([
  value => {
    if (value?.length > 5 && value?.length < 31) return true
    return 'Заголок не может быть меньше 5 букв и больше 30'
  },
],)
const descriptionRules = ref([
  value => {
    if (value?.length > 5) return true
    return 'Описание не может быть пустым и должно содержать минимум 5 букв'
  },
],)

const post = reactive({
  "category_id": 1,
  "title": "",
  "description": "",
  "type": "img",
  "content_data": "string"//todo
})
</script>
<script setup></script>
