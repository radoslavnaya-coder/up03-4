<template>
    <v-card>
        <v-card-title>
            <v-img src="" height="">

            </v-img>
            <span>
               @{{ props.post.name }}
            </span>
        </v-card-title>
        <v-card-text>

        </v-card-text>
        <v-img src="" height="">

        </v-img>
        <v-card-title>

        </v-card-title>
        <v-card-subtitle>

        </v-card-subtitle>
    </v-card>
</template>

<script setup>

const props = defineProps({
  post: Object
})
</script>