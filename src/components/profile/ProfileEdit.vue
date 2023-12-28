<template>
  <v-container>
    <v-row justify="center" a>
      <v-col cols="2" md="4">
        <div class="d-flex justify-lg-space-between align-center">
          <div class="d-flex w-100 align-center">
            <p class="fs-3 text-white pr-2">@</p>
            <v-text-field
                variant="outlined"
                class="text-white py-1 edit__field"
                v-model="profile.name"
                :counter="10"
                label="Изменить id"
            >
            </v-text-field>
          </div>
        </div>
        <span class="d-block mb-4 text-danger ml-9" v-if="errors?.name">{{ errors.name[0] }}</span>
      </v-col>
      <v-col cols="2">
        <v-btn @click="editProfile" color="#708D81" class="mt-4 ty-2 edit__button" style="border-radius: 10px">
          Изменить
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
    </v-row>

    <v-row justify="center">
      <v-col cols="3">
        <v-img
            alt="Avatar"
            :src="avatarSrc"
            width="122"
            style="border-radius: 10px; border: 1px solid #f4d58d"
            class="v-col-9 edit__avatar"
        >
        </v-img>
      </v-col>
      <v-col cols="3">
        <!--        <v-file-input-->
        <!--          label="Выбрать фото"-->
        <!--          variant="outlined"-->
        <!--          class="text-white v-col-10 pa-0 ma-0"-->
        <!--          prepend-icon=""-->
        <!--        ></v-file-input>-->
        <!--        <v-btn color="#708D81" class="mt-4" style="border-radius: 10px">-->
        <!--          Изменить-->
        <!--        </v-btn>-->
      </v-col>
    </v-row>
  </v-container>
<!--//todo like categories-->
<!--  <v-combobox-->
<!--      multiple-->
<!--      label="Любимые категории"-->
<!--      :items="[-->
<!--              'Спорт',-->
<!--              'Музыка',-->
<!--              'Рисование',-->
<!--              'Мода',-->
<!--              'Повседневная жизнь',-->
<!--            ]"-->
<!--      variant="outlined"-->
<!--      style="color: white"-->
<!--  ></v-combobox>-->

</template>
<script setup>
import {onMounted, reactive, ref} from "vue";
import {http} from "../../axios/index.js";
import {useRouter} from 'vue-router'

const router = useRouter();

const profile = reactive({
  //todo
  "avatar": "xxx",
  "name": "Cute_cat",
  "like_categories_ids": []
});
const avatarSrc = ref('')
const errors = ref([])


onMounted(() => {
  http.get('/api/profile')
      .then((res) => {
        profile.value = res.data

        avatarSrc.value = res.data.avatar_src
        profile.name = res.data.name
        // profile.like_categories_ids=res.data.like_categories  todo array object => array ids
      })
})

const editProfile = () => {
  http.put(`/api/profile`, profile)
      .then((res) => {
        router.push({name: 'Profile'})
      })
      .catch(error => {
        if (error.response.status === 422) {
          errors.value = error.response.data.errors
        }
      })
}

</script>
<style scoped>
@media (max-device-width: 480px) {
  .edit__field{
    min-width: 8.5em;
  }
  .justify-center{
    justify-content:flex-start !important;
  }
  .edit__button{
    min-width: 9em;
    margin-left: 12em;
    font-size: 11px;
  }
  .edit__avatar{
    min-width: 7em;
  }
}
</style>
