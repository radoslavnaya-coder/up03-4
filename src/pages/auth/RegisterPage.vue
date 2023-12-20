<script setup>
import {useRouter} from 'vue-router'

import {reactive, ref} from "vue";
import {http} from "../../axios/index.js";

const router = useRouter();

const form = reactive({
  "fio": "",
  "email": "",
  "password": ""
})

const errors = ref([])

const register = () => {
  http.post(`/api/signup`, form)
      .then((res) => {
        router.push({name: 'Products'})
      })
      .catch(error => {
        if (error.response.status === 422) {
          errors.value = error.response.data.errors
        }
      })
}

</script>

<template>
  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
    <div class="col">
      <div class="row">
        <h1 class="h3 mb-3 fw-normal">Пожалуйста заполните все поля</h1>
        <div class="form-floating mb-3">
          <input v-model="form.fio" type="text" class="form-control" id="floatingFio" placeholder="ФИО">
          <label for="floatingFio">ФИО</label>
          <span class="text-danger" v-if="errors?.fio">{{ errors.fio[0] }}</span>
        </div>
        <div class="form-floating mb-3">
          <input v-model="form.email" type="email" class="form-control" id="floatingInput"
                 placeholder="name@example.com">
          <label for="floatingInput">Email</label>
          <span class="text-danger" v-if="errors?.email">{{ errors.email[0] }}</span>
        </div>
        <div class="form-floating mb-3">
          <input v-model="form.password" type="password" class="form-control" id="floatingPassword"
                 placeholder="Password">
          <label for="floatingPassword">Password</label>
          <span class="text-danger" v-if="errors?.password">{{ errors.password[0] }}</span>
        </div>

        <button @click="register" class="w-100 btn btn-lg btn-primary mb-3" type="submit">Зарегистрироваться</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
