<template>
  <CategoryItem
      v-for="c in categories"
      :category="c"
      :setEditCategoryId="setEditCategoryId"
      :updateCategories="getCategories"
      :editable="c.id===currentEditCategoryId"
  />
</template>
<script setup>
import {onMounted, ref} from "vue";
import {http} from "../../axios/index.js";
import {useRouter} from 'vue-router'
import CategoryItem from "./CategoryItem.vue";


const router = useRouter();

const currentEditCategoryId = ref(0)

const categories = ref([])

const setEditCategoryId = (id) => {
  currentEditCategoryId.value = id;
}

const getCategories = () => {
  http.get("/api/category")
      .then((res) => {
        categories.value = res.data;
      })
}


onMounted(() => {
  getCategories();
})

</script>

