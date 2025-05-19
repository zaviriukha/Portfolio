<script setup lang="ts">
const skills = {
  title: "My skills",
  icon: "mdi:scroll-text-outline",
  description: "I am a software developer",
  list: [
    {
      icon: "/img/javascript.svg",
      name: "JavaScript",
    },
    {
      icon: "/img/typescript.svg",
      name: "TypeScript",
    },
    {
      icon: "/img/vue.svg",
      name: "Vue.js"
    },
    {
      icon: "/img/nuxt.svg",
      name: "Nuxt",
    },
    {
      icon: "/img/pinia.svg",
      name: "Pinia"
    },
    {
      icon: "/img/scss.svg",
      name: "Scss"
    },
    {
      icon: "/img/tailwind.svg",
      name: "Tailwind",
    },
    {
      icon: "/img/twig.svg",
      name: "Twig",
    },
    {
      icon: "/img/vuetify.svg",
      name: "Vuetify",
    },
    {
      icon: "/img/vite.svg",
      name: "Vite",
    },
    {
      icon: "/img/pm.svg",
      name: "Pimcore",
    },
    {
      icon: "/img/shopware.svg",
      name: "Shopware 6",
    }
  ]
}
</script>

<template>
  <h2 class="mb-4 text-2xl font-bold flex justify-start items-center">{{ skills.title }}
    <Icon class="ml-2" :name="skills.icon"/>
  </h2>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
    <div
        v-for="(item, index) in skills.list"
        :key="index"
        class="bg-gray-800 p-4 rounded"
    >
      <div class="flex flex-col justify-center items-center">
        <Icon v-if="item.icon.startsWith('mdi:')" :name="item.icon" class="text-2xl"/>
        <img v-else :src="item.icon" alt="" class="w-10 h-10">
        <span class="uppercase mt-1">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>