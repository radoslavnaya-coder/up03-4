<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="container py-3">
    <Header/>
    <main>
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<style>
body{
  background: #001427;
}
.bg-darktheme{
  background: #001427;
}
.text-yellow{
  color: #F4D58D;
}
</style>
