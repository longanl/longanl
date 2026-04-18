<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      <HomeView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HomeView from './views/HomeView.vue'
</script>
