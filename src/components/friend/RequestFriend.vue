<script setup>
import CompFriend from "./Friend.vue"
import {http} from "../../axios/index.js";
// import {ref} from "vue";
const props = defineProps({
  friendRequest: Object,
  getMyFriends: Function,
  getMyReqFriends: Function,
})

const acceptRequest = (friendId) => {
  http.post(`/api/friend_request?friend_id=${friendId}`)
      .then((res) => {
        props.getMyFriends()
        props.getMyReqFriends()
      })
      .catch(error => {
        // todo toast
      })
}
</script>
<template>
  <v-banner lines="one" class="my-4" bg-color="transparent">
    <v-img
        alt="Avatar"
        :src="props.friendRequest.friend_avatar_src"
        width="210"
        style="border-radius: 10px; border: 1px solid #f4d58d;"
        class="v-col-2"
    >
    </v-img>
    <v-banner-text class="v-col-8 ml-4 fs-5" style="color: #f4d58d">
      @{{ props.friendRequest.friend_name }}
    </v-banner-text>
    <v-banner-text class="d-flex align-center v-col-2">
      <v-btn
          block
          class="text-none my-4"
          size="x-large"
          color="#708D81"
          variant="flat"
          @click="acceptRequest(props.friendRequest.friend_id)"
      >
        Принять
      </v-btn>
    </v-banner-text>
  </v-banner>
</template>
<style scoped>
button {
  border-radius: 10px;
}
</style>