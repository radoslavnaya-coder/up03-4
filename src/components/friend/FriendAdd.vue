<template>
  <div class="my-4 d-flex">
    <v-img
        alt="Avatar"
        :src="props.user.avatar_src"
        width="210"
        style="border-radius: 10px; border: 1px solid #f4d58d;"
        class="v-col-2"
    >
    </v-img>
    <v-banner-text class="v-col-6 ml-4 fs-5" style="color: #f4d58d">
      @{{ props.user.name }}

    </v-banner-text>
    <v-banner-text class="flex-column v-col-3">
      <v-btn
          block
          @click="addToFriend(props.user.id)"
          class="text-none my-4"
          color="#708D81"
          size="large"
          variant="flat"
      >
        Добавить
      </v-btn>
    </v-banner-text>
  </div>
</template>
<script setup>


import {http} from "../../axios/index.js";

const props = defineProps({
  user: Object,
  getMyFriends: Function,
  getMyReqFriends: Function,
  closeDialog: Function,
})

const addToFriend = (friendId) => {
  http.post(`/api/friend?friend_id=${friendId}`)
      .then((res) => {
        props.getMyFriends()
        props.getMyReqFriends()
        props.closeDialog()
      })
      .catch(error => {
        // todo toast
      })
}


</script>
<style scoped>
button {
  border-radius: 10px;
}
</style>