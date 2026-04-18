<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="container-custom px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 text-white text-2xl font-bold flex items-center justify-center bg-blue-600 rounded">L</div>
            <span class="text-2xl font-bold">{{ siteMeta.brand }}</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            {{ siteMeta.tagline }}，专注混合云、人工智能与核心算力基础设施。
          </p>
          <div class="flex gap-4">
            <a v-for="s in socialLinks" :key="s" href="#" class="text-gray-400 hover:text-blue-400 text-sm transition-colors">{{ s }}</a>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">服务领域</h3>
          <ul class="space-y-3">
            <li v-for="item in footerLinkGroups.services" :key="item">
              <a href="#services" class="text-gray-400 hover:text-blue-400 transition-colors">{{ item }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">解决方案</h3>
          <ul class="space-y-3">
            <li v-for="item in footerLinkGroups.solutions" :key="item">
              <a href="#solutions" class="text-gray-400 hover:text-blue-400 transition-colors">{{ item }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">联系我们</h3>
          <ul class="space-y-3 text-gray-400 text-sm">
            <li>📍 {{ siteMeta.addressShort }}</li>
            <li>📞 {{ siteMeta.phone }}</li>
            <li>✉️ {{ siteMeta.email }}</li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        © {{ year }} {{ siteMeta.brand }}. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { siteMeta, footerLinkGroups } from '@/data/site'

const socialLinks = ['微信', 'LinkedIn', 'GitHub']
const year = new Date().getFullYear()
</script>
