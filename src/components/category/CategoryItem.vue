<template>
  <v-container>
    <v-row justify="center" a>
      <v-col cols="3" md="4">
        <div class="d-flex justify-lg-space-between align-center">
          <div class="d-flex w-100 align-center text-white">
            <v-text-field v-model="props.category.name" :disabled="!props.editable"></v-text-field>
          </div>
        </div>
      </v-col>
      <v-col cols="3">
        <v-btn v-if="props.editable" @click="save" color="#708D81" class="mt-4 ty-2 edit__button"
               style="border-radius: 5px">
          Сохранить
        </v-btn>
        <v-btn v-else @click="editCurrentCategory" color="#708D81" class="mt-4 ty-2 edit__button"
               style="border-radius: 5px">
          Изменить
        </v-btn>
        <v-btn @click="" color="#8D0801" class="ml-6 mt-4 ty-2 edit__button" style="border-radius: 5px">
          Удалить
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import {http} from "../../axios/index.js";

const props = defineProps({
  category: Object,
  editable: {
    type: Boolean,
    default: false,
  },
  setEditCategoryId: Function,
  updateCategories: Function,
})

const editCurrentCategory = () => {
  props.setEditCategoryId(props.category.id);
}

const save = () => {
  http.put(`/api/category/${props.category.id}`, {
    "name": props.category.name
  })
      .then((res) => {
        props.updateCategories();
        props.setEditCategoryId(0);
      })
}
</script>