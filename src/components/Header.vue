<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4">
    <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
      <div class="flex items-center gap-3 cursor-pointer" @click="scrollTo('home')">
        <span class="text-2xl font-bold text-blue-600">{{ siteMeta.brand }}</span>
      </div>
      <nav class="hidden md:flex items-center gap-8">
        <a v-for="item in navItems" :key="item.id" @click.prevent="scrollTo(item.id)" class="text-gray-700 hover:text-blue-600 cursor-pointer font-medium">{{ item.label }}</a>
      </nav>
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden flex flex-col gap-1.5 cursor-pointer p-2">
        <span class="w-6 h-0.5 bg-blue-600"></span>
        <span class="w-6 h-0.5 bg-blue-600"></span>
        <span class="w-6 h-0.5 bg-blue-600"></span>
      </button>
    </div>
    <nav v-if="isMenuOpen" class="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col p-4 gap-4">
      <a v-for="item in navItems" :key="item.id" @click.prevent="scrollTo(item.id); isMenuOpen = false" class="block px-4 py-2 text-gray-700 hover:text-blue-600 cursor-pointer">{{ item.label }}</a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { navItems, siteMeta } from '@/data/site'

const isMenuOpen = ref(false)

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
