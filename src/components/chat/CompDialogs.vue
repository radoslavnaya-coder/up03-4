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

    <Message v-for="mess in messages" :key="mess.id" :message="mess" :site="calculateSide(mess.user_id)"/>


  </v-infinite-scroll>
  <!-- end scroll -->
  <v-form>
    <v-container>
      <v-row>
        <v-col class="py-0" cols="11">
          <v-text-field
              v-model="newMessage.text_messenger"
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
          <v-btn @click="sendMessage" color="#001427" icon="mdi-send" size="x-large"></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script setup>
import Message from "@components/chat/Message.vue"
import {onBeforeUnmount, onMounted, reactive, ref} from "vue";
import {store} from "../../store/index.js"
import {http} from "../../axios/index.js";
import {toast} from "vue3-toastify";

const load = ({done}) => {
  done('empty')
}
const newMessage = reactive({
  "text_messenger": ""
})
const messages = ref([])
const errors = ref([])
const updateTimeIntervalId = ref(null)

onMounted(() => {
  getAllMessages()
  updateTimeIntervalId.value = setInterval(getAllMessages, 1500);
})


onBeforeUnmount(() => {
  clearInterval(updateTimeIntervalId.value);
});


const calculateSide = (userId) => {
  return store.userId === userId.toString() ? 'right'  : 'left';
}

const getAllMessages = () => {
  const chatId = 2
  http.get(`/api/chat/${chatId}`)
      .then((res) => {
        messages.value = res.data
        const needReadMessages = []
        for (let m of res.data) {
          if (m.chat_id === chatId && m.user_id.toString() !== store.userId && m.status === "sent") {
            needReadMessages.push(m.id)
          }
        }
        //todo this method not secury WARN
        if (needReadMessages.length > 0) {
          http.post("/api/message/read_messages", {"ids": needReadMessages})
              .then(() => getAllMessages())
              .catch(() => toast.error("Не удалось отправить прочитанные сообщения"))
        }
      })
}


const sendMessage = () => {
  // todo id chat from router
  http.post(`/api/chat/2`, newMessage)
      .then((res) => {
        getAllMessages()
      })
      .catch(error => {
        if (error.response.status === 422) {
          errors.value = error.response.data.errors
        }
      })
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
