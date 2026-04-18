<template>
  <div>
    <section id="home" class="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div class="container-custom mb-20">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            全球领先的企业级<br />
            <span class="text-gradient">科技服务商</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            专注混合云、人工智能与核心算力基础设施<br />
            为关键行业提供全栈数字化解决方案
          </p>
          <div class="flex flex-wrap gap-4">
            <button type="button" class="btn-primary">立即咨询</button>
            <button type="button" class="btn-secondary">了解我们</button>
          </div>
        </div>
      </div>
      <div class="container-custom grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="(s, i) in heroStats" :key="i" class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{{ s.value }}</div>
          <div class="text-gray-600 font-medium">{{ s.label }}</div>
        </div>
      </div>
    </section>

    <section id="about" class="section-padding bg-white">
      <div class="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-4">关于 {{ siteMeta.brand }}</h2>
          <p class="text-xl text-blue-600 mb-6 font-medium">以技术可靠与持续创新，助力客户实现高效、安全、智能的数字化转型</p>
          <p class="text-gray-600 text-lg leading-relaxed mb-6">
            {{ siteMeta.brand }} 是全球领先的企业级科技服务商，专注于混合云、人工智能与核心算力基础设施领域。我们为关键行业提供全栈数字化解决方案与全球化专业服务。
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div v-for="(p, i) in aboutPillars" :key="i" class="text-center">
              <div class="w-12 h-12 mx-auto mb-4 text-3xl" :class="p.color">{{ p.icon }}</div>
              <h4 class="text-lg font-semibold text-gray-900 mb-2">{{ p.title }}</h4>
              <p class="text-gray-600 text-sm">{{ p.desc }}</p>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <div v-for="(h, i) in aboutHighlights" :key="i" class="stat-blue-card">
            <div class="text-4xl font-bold mb-2">{{ h.value }}</div>
            <div class="text-blue-100">{{ h.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="section-heading">
          <h2 class="section-heading-title">服务领域</h2>
          <p class="section-heading-desc">提供全方位的技术服务与解决方案</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(svc, i) in services" :key="i" class="card-elevated">
            <div class="w-14 h-14 mb-6 text-4xl">{{ svc.icon }}</div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ svc.title }}</h3>
            <p class="text-gray-600 leading-relaxed mb-6">{{ svc.desc }}</p>
            <ul class="space-y-3">
              <li v-for="(f, j) in svc.features" :key="j" class="flex items-center gap-3 text-gray-700">
                <span class="text-green-500">✓</span>{{ f }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="solutions" class="section-padding bg-white">
      <div class="container-custom">
        <div class="section-heading">
          <h2 class="section-heading-title">解决方案</h2>
          <p class="section-heading-desc">为关键行业提供定制化的数字化解决方案</p>
        </div>
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <button
              v-for="(tab, index) in solutions"
              :key="index"
              type="button"
              @click="activeTab = index"
              :class="activeTab === index ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
              class="px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              {{ tab.title }}
            </button>
          </div>
          <div class="bg-gray-50 p-8 rounded-2xl">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ solutions[activeTab].title }}</h3>
            <p class="text-gray-600 text-lg leading-relaxed mb-6">{{ solutions[activeTab].description }}</p>
            <ul class="space-y-3 mb-8">
              <li v-for="(b, idx) in solutions[activeTab].benefits" :key="idx" class="flex items-center gap-3 text-gray-700">
                <span class="text-green-500">✓</span>{{ b }}
              </li>
            </ul>
            <button type="button" class="btn-primary">了解详情</button>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="section-padding bg-gray-50">
      <div class="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-4">联系我们</h2>
          <p class="text-xl text-blue-600 mb-8 font-medium">期待与您合作，共创数字化未来</p>
          <form class="bg-white p-8 rounded-2xl shadow-lg" @submit.prevent="handleSubmit">
            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2">姓名</label>
              <input v-model="form.name" type="text" class="form-input" placeholder="请输入您的姓名" required>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2">邮箱</label>
              <input v-model="form.email" type="email" class="form-input" placeholder="请输入您的邮箱" required>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2">电话</label>
              <input v-model="form.phone" type="tel" class="form-input" placeholder="请输入您的电话" required>
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 font-medium mb-2">留言内容</label>
              <textarea v-model="form.message" class="form-input resize-none" rows="5" placeholder="请输入您的留言内容" required></textarea>
            </div>
            <button type="submit" class="w-full btn-primary">提交咨询</button>
          </form>
        </div>
        <div class="space-y-6">
          <div v-for="(block, i) in contactBlocks" :key="i" class="bg-white p-6 rounded-2xl shadow-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ block.title }}</h3>
            <p v-for="(line, j) in block.lines" :key="j" class="text-gray-600">{{ line }}</p>
            <p v-if="block.note" class="text-gray-500 text-sm mt-2">{{ block.note }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  siteMeta,
  heroStats,
  aboutPillars,
  aboutHighlights,
  services,
  solutions,
  contactBlocks,
} from '@/data/site'

const activeTab = ref(0)
const form = ref({ name: '', email: '', phone: '', message: '' })

const handleSubmit = () => {
  alert('感谢您的咨询，我们会尽快与您联系！')
  form.value = { name: '', email: '', phone: '', message: '' }
}
</script>
