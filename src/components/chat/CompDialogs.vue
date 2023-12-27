<template>
  <v-container>
    <v-row>
      <v-col cols="5" class="my-7">
        <router-link :to="{name: 'Chats'}">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
          >
            <path
                fill="white"
                d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z"
            />
          </svg>
        </router-link>

      </v-col>
      <v-col cols="5" class="my-7">
        <v-text class="text-white fs-5 mx-16">@viliskas</v-text>
      </v-col>
      <v-col cols="2" align="right">
        <v-img
            alt="Avatar"
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            width="122"
            style="border-radius: 10px; border: 1px solid #f4d58d"
            class="v-col-6"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
  <!-- scroll -->
  <v-infinite-scroll
      status="loading"
      height="55.5vh"
      side="start"
      @load="load"
  >
    <template v-slot:empty>
      <!--      if need empty result -->
      <!--      <v-alert type="warning">No more items!</v-alert>-->
    </template>

        <Message v-for="mess in messages" :key="mess.id"  :message="mess" :site="calculateSide(mess.user_id)"/>


  </v-infinite-scroll>
  <!-- end scroll -->
  <v-form>
    <v-container>
      <v-row>
        <v-col class="py-0" cols="11">
          <v-text-field
              v-model="message"
              variant="outlined"
              clear-icon="mdi-close-circle"
              clearable
              placeholder="Напишите сообщение"
              type="text"
              class="text-white"
              @click:append-inner="toggleMarker"
              @click:append="sendMessage"
              @click:prepend="changeIcon"
              @click:clear="clearMessage"
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 4 30 30"
          >
            <path
                fill="white"
                d="M4 18.5v-5.154L9.846 12L4 10.654V5.5L19.423 12z"
            />
          </svg>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script setup>
import Message from "@components/chat/Message.vue"
import {onMounted, ref} from "vue";
import {store} from "../../store/index.js"
import {http} from "../../axios/index.js";

const load = ({done}) => {
  done('empty')
}

const messages = ref([])

onMounted(() => {
  http.get('/api/chat/2')
      .then((res) => {
        messages.value = res.data
      })
})
const calculateSide = (userId) => {
  return store.userId === userId.toString() ? 'left' : 'right';
}

</script>
<style scoped>
button {
  border-radius: 10px;
}

/* width */
::-webkit-scrollbar {
  display: none;
}
</style>
