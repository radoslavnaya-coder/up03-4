<template>
  <v-sheet width="600" class="mx-auto add__sheet" color="#001427">
    <v-container fast-fail @submit.prevent>
      <v-file-input
          label="Выбрать фото"
          variant="outlined"
          class="text-white pa-0 ma-0"
          @change="selectFile($event)"
          prepend-icon=""
      ></v-file-input>
      <span class="text-danger d-block  mb-4 t" v-if="errors?.content_data">{{ errors.content_data[0] }}</span>
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
      <v-btn @click="addPost" block class="mt-2" color="#708D81">Опубликовать</v-btn>
    </v-container>
  </v-sheet>
  <v-container>
    <v-progress-linear
        v-model="progress"
        color="light-blue"
        height="25"
        reactive
    >
      <strong>{{ progress }} %</strong>
    </v-progress-linear>
  </v-container>
</template>
<script setup>
import {reactive, ref} from "vue";
import {upload} from "../../axios/index.js";
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


//file
const currentFile = ref(undefined)
const progress = ref(0)

const selectFile = (event) => {
  progress.value = 0;
  currentFile.value = event.target.files[0];
}

const addPost = () => {

  upload(currentFile.value, (event) => {
        progress.value = Math.round((100 * event.loaded) / event.total);
      },
      "content_data",
      `/api/post`,
      (formDat) => {
        formDat.append("category_id", post.category_id);
        formDat.append("title", post.title);
        formDat.append("description", post.description);
        formDat.append("type", post.type);
      }
  ).then((res) => {
    router.push({name: 'Posts'})
  }).catch(error => {
    if (error.response.status === 422) {
      errors.value = error.response.data.errors
    }
  })
}
</script>
<style scoped>
@media (max-device-width: 480px) {
  .add__sheet {
    width: 300px !important;

  }
}
</style>