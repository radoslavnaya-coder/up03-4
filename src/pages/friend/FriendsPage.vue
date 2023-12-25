<script setup>
import Friend from "../../components/friend/Friend.vue"
import RequestFriend from "../../components/friend/RequestFriend.vue"
import {onMounted, ref} from "vue";
import {http} from "../../axios/index.js";

const myFriends = ref([]);

const friendRequests=ref([]);

onMounted(() => {
  http.get('/api/friend')
      .then((res) => {
        console.log(res)
        myFriends.value = res.data
      })
})

onMounted(() => {
  http.get('/api/friend_request')
      .then((res) => {
        console.log(res)
        friendRequests.value = res.data
      })
})
</script>
<template>
  <!-- <CompPost v-for="p in posts" :key="p.id" :post="p" /> -->
  <v-title class="text-white mx-4">Заявки в друзья</v-title>
  <RequestFriend v-for="fr in friendRequests" :key="fr.id" :friendRequest="fr"/>

  <text-title class="text-white mx-4">Мои друзья</text-title>
  <Friend v-for="f in myFriends" :key="f.id" :friend="f" />
</template>