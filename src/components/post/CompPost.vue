<template>
    <v-card class="card bg-teachat mx-auto" width="690">
        <!--        img user and action-->
        <v-card-title class="d-flex">
            <v-avatar
                    rounded="3"
                    size="122px"
                    class="avatar__block align-self-center"
                >
                <v-img
                        alt="Avatar"
                        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                ></v-img>

            </v-avatar>
            <p class="text-teachat avatar__block__name">
                @viliskas
            </p>

        </v-card-title>

        <!--        content-->
        <v-card class="mx-auto card bg-teachat card__content" width="690">
            <v-img :src="imgFile"
                   height="690"
                   cover></v-img>

            <v-card-title class="text-teachat">Булочка “парфе”</v-card-title>
            <v-card-subtitle class="text-white">
                Очень вкусные французские булки в самом <br/>
                сердце Италии
            </v-card-subtitle>
        </v-card>
    </v-card>
</template>

<script setup>
    import imgFile from "@assets/post-img__1.png"

    console.log(imgFile)
    // const props = defineProps({
    //   post: Object
    // })
</script>
<style scoped>
    .bg-teachat {
        background: #001427;
    }

    .card {
        border-radius: 10px;
    }

    .text-teachat {
        color: #F4D58D;
    }

    .card__content {
        margin-top: -10%;
        z-index: -1;
    }

    .avatar__block__name {
        margin: 1em 0 0 1em;
    }

    .avatar__block {
    border: 1px solid #F4D58D;
    }

</style>