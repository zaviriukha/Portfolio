<script setup lang="ts">
const certifications = {
  icon: "mdi:certificate-outline",
  title: "My certificates",
  items: [
    {
      company: "Pimcore – Pimcore Developer",
      data: "2024"
    },
    {
      company: "Shopware 6 – Shopware Developer",
      data: "2021"
    }
  ]
}
</script>

<template>
  <h2 class="mb-4 text-2xl font-bold flex justify-start items-center">{{ certifications.title }}
    <Icon class="ml-2" :name="certifications.icon"/>
  </h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div
        v-for="(item, index) in certifications.items"
        :key="index"
        class="bg-gray-800 p-4 rounded"
    >
      <div class="text-xl font-semibold text-white">{{ item.company }}</div>
      <div class="text-sm text-gray-400">{{ item.data }}</div>
    </div>
  </div>
</template>