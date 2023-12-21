<template>
    <v-card class="mx-auto bg-teachat" max-width="690">
        <v-card-title>
            <v-img src="assets/user-img__1.png" width="200">

            </v-img>
            <span class="text-teachat">
               <!-- @{{ props.post.name }} -->
               @vilaskass
            </span>
        </v-card-title>
        <v-img src="post-img__1.png" width="600">

        </v-img>
        <v-card-title class="text-teachat">
            Булочка “парфе”
        </v-card-title>
        <v-card-subtitle class="text-white">
            Очень вкусные французские булки в самом <br />
            сердце Италии
        </v-card-subtitle>
    </v-card>
</template>

<script setup>

// const props = defineProps({
//   post: Object
// })
</script>
<style scoped>
.bg-teachat{
  background: #001427;
}
.text-teachat{
  color: #F4D58D;
}
</style>