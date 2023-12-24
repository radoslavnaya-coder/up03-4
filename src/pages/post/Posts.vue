<script setup>
import CompPost from "../../components/post/CompPost.vue"
import {ref} from "vue";

const posts = ref([
{
    "id": 1,
    "user_id": 1,
    "user_name": "Nastya",
    "category_id": 1,
    "category_name": "Cпорт",
    "title": "Cat",
    "description": "Cute cat",
    "type": "video",
    "created_at": "2017-07-21T17:32:28Z",
    "content_src": "https://cdn.theatlantic.com/thumbor/fWHNkP-IHxWP4gyI87XDAaiKPFU=/0x62:2000x1187/976x549/media/img/mt/2018/03/AP_325360162607/original.jpg",
    "avatar_src": "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
    },
    {
    "id": 2,
    "user_id": 1,
    "user_name": "Vilaskass",
    "category_id": 1,
    "category_name": "Музыка",
    "title": "Cat",
    "description": "Cute cat",
    "type": "video",
    "created_at": "2017-07-21T17:32:28Z",
    "content_src": "https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg",
    "avatar_src": "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
  }
]);
</script>
<template>
    <CompPost v-for="p in posts" :key="p.id" :post="p" />   
</template>