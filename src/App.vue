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
  font-family: 'Inter', sans-serif;
}
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
</style>