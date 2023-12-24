<script setup>
import { useRouter } from "vue-router";

import { reactive, ref } from "vue";
import { http } from "../../axios/index.js";

const router = useRouter();

const form = reactive({
  name: "",
  surname: "",
  login: "",
  email: "",
  password: "",
  repeatPassword: "",
});

const errors = ref([]);

const register = () => {
  console.log(form);
  // http
  //   .post(`/api/signup`, form)
  //   .then((res) => {
  //     router.push({ name: "Products" });
  //   })
  //   .catch((error) => {
  //     if (error.response.status === 422) {
  //       errors.value = error.response.data.errors;
  //     }
  //   });
};
</script>

<template>
  <div
    class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center"
  >
    <div class="col">
      <div class="row">
        <div>
          <h1 class="h4 mb-3 fw-normal text-white">
            Пожалуйста заполните все поля
          </h1>
          <div class="form-floating mb-3">
            <input
              v-model="form.surname"
              type="text"
              class="form-control"
              id="floatingFio"
              placeholder="surname"
            />
            <label for="floatingFio">Фамилия</label>
            <span class="text-danger" v-if="errors?.surname">{{
              errors.surname[0]
            }}</span>
          </div>
          <div class="form-floating mb-3">
            <input
              v-model="form.name"
              type="text"
              class="form-control"
              id="floatingFio"
              placeholder="name"
            />
            <label for="floatingFio">Имя</label>
            <span class="text-danger" v-if="errors?.name">{{
              errors.name[0]
            }}</span>
          </div>
          <div class="form-floating mb-3">
            <input
              v-model="form.login"
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Login"
            />
            <label for="floatingInput">Логин</label>
            <span class="text-danger" v-if="errors?.login">{{
              errors.login[0]
            }}</span>
          </div>
          <div class="form-floating mb-3">
            <input
              v-model="form.email"
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">E-mail</label>
            <span class="text-danger" v-if="errors?.email">{{
              errors.email[0]
            }}</span>
          </div>
          <div class="form-floating mb-3">
            <input
              v-model="form.password"
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Пароль</label>
            <span class="text-danger" v-if="errors?.password">{{
              errors.password[0]
            }}</span>
          </div>
          <div class="form-floating mb-3">
            <input
              v-model="form.repeatPassword"
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="repeatPassword"
            />
            <label for="floatingPassword">Повтор пароля</label>
            <span class="text-danger" v-if="errors?.repeatPassword">{{
              errors.repeatPassword[0]
            }}</span>
          </div>
          <v-combobox
            multiple
            label="Любимые категории"
            :items="[
              'Спорт',
              'Музыка',
              'Рисование',
              'Мода',
              'Повседневная жизнь',
            ]"
            variant="outlined"
            style="color: white"
          ></v-combobox>

          <button
            @click="register"
            class="w-100 btn btn-lg bg-teachat__blgr mb-3 text-white"
            type="submit"
          >
            Регистрация
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-teachat__blgr {
  background: #708d81;
}
</style>
