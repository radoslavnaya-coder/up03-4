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
  <v-title class="text-white mx-4 fs-3" >Заявки в друзья</v-title>
  <RequestFriend v-for="fr in friendRequests" :key="fr.id" :friendRequest="fr"/>

  <text-title class="text-white mx-4 fs-3">Мои друзья</text-title>
  <Friend v-for="f in myFriends" :key="f.id" :friend="f" />
</template>