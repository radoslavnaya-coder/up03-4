<template>
  <!-- Banner with alert  -->
  <v-banner lines="one" class="my-4" bg-color="transparent">
    <v-img
      alt="Avatar"
      src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      width="210"
      style="border-radius: 10px; border: 1px solid #f4d58d"
      class="v-col-2"
    >
    </v-img>
    <v-banner-text class="v-col-9 ml-4 fs-5" style="color: #f4d58d">
      @viliskas
    </v-banner-text>
      <v-banner-action
      class="fs-5 py-3 px-4"
        block
        :icon="`mdi-numeric-${n}`"
        border
        height="40"
        variant="text"
        width="40"
        style="background:#f4d58d; border-radius: 10px; text-align: center;"
        >1</v-banner-action
      >
  </v-banner>
  <!-- Banner without alert -->
  <v-banner lines="one" class="my-4" bg-color="transparent">
    <v-img
      alt="Avatar"
      src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      width="210"
      style="border-radius: 10px; border: 1px solid #f4d58d"
      class="v-col-2"
    >
    </v-img>
    <v-banner-text class="v-col-8 ml-4 fs-5" style="color: #f4d58d">
      @viliskas
    </v-banner-text>
    <v-banner-actions class="d-block flex-column v-col-2"> </v-banner-actions>
  </v-banner>
</template>
<script setup></script>
<style scoped>
button {
  border-radius: 10px;
}
</style>
