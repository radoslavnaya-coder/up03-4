<script setup>
import CompFriend from "./Friend.vue"
// import {ref} from "vue";
const props = defineProps({
  friendRequest:Object,
})
</script>
<template>
  <v-banner lines="one" class="my-4" bg-color="transparent">
    <v-img
        alt="Avatar"
        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
        width="210"
        style="border-radius: 10px; border: 1px solid #f4d58d;"
        class="v-col-2"
    >
    </v-img>
    <v-banner-text class="v-col-8 ml-4 fs-5" style="color: #f4d58d">
      @{{props.friendRequest.friend_name}}
    </v-banner-text>
    <v-banner-actions class="d-block flex-column v-col-2">
      <v-btn
          block
          class="text-none my-4"
          color="#708D81"
          size="x-large"
          variant="flat"
      >
        Написать
      </v-btn>
      <v-btn
          block
          class="text-none my-4"
          size="x-large"
          color="#8D0801"
          style="color:#f4d58d"
          variant="flat"
      >
        Удалить
      </v-btn>
    </v-banner-actions>
  </v-banner>
</template>