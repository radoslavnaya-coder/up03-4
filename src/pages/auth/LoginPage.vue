<script setup>
import {useRoute, useRouter} from 'vue-router'
import {http} from "../../axios/index.js";
import {reactive, ref} from "vue";
import {store} from "../../store/index.js";

const route = useRoute();
const router = useRouter();

const form = reactive({
  email: '',
  password: ''
});

const hasErrors = ref(false)

const login = () => {

  http.get('/sanctum/csrf-cookie').then(response => {
    http.post('/api/login', form)
        .then(res => {
          localStorage.setItem("token", res.data.content.user_token);
          store.isAuth = true
          localStorage.setItem("user_role", res.data.content.user_role);
          store.isAdmin = res.data.content.user_role === "ADMIN";
          hasErrors.value = false
          router.push({name: 'Products'})
        })
        .catch(error => {
          hasErrors.value = true
        })
  });


}

const goBack = () => {
  router.go(-1)
}
</script>

<template>
  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
    <div class="col">
      <div class="row">
        <div>
          <div class="form-floating mb-3">
            <input v-model="form.email" type="email" class="form-control" id="floatingInput"
                   placeholder="name@example.com">
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating mb-3">
            <input v-model="form.password" type="password" class="form-control" id="floatingPassword"
                   placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
          <div class="text-danger pb-2" v-if="hasErrors">Ошибка входа в аккаунт</div>
          <button @click="login" class="w-100 btn btn-lg btn-primary mb-3">Войти</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
