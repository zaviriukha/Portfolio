<script setup lang="ts">
const experience = {
  icon: "mdi:list-box-outline",
  title: "My experience",
  description: "I am a software developer",
  items: [
    {
      company: "Blackbit digital Commerce GmbH",
      position: "Front-End Developer",
      duration: "November 2020 - March 2025"
    },
    {
      company: "Diamatic LLC",
      position: "Front-End Developer",
      duration: "December 2018 — July 2020"
    },
    {
      company: "DevDroid",
      position: "Junior Front-End Developer",
      duration: "November 2017 — October 2018"
    },
    {
      company: "IMQ",
      position: "Markup Developer",
      duration: "May 2014 — September 2017"
    }
  ]
}
</script>

<template>
  <h2 class="mb-4 text-2xl font-bold flex justify-start items-center">{{ experience.title }}
    <Icon class="ml-2" :name="experience.icon"/>
  </h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
    <div
        v-for="(item, index) in experience.items"
        :key="index"
        class="bg-gray-800 p-4 rounded"
    >
      <h2 class="text-2xl font-semibold text-white">{{ item.company }}</h2>
      <h3 class="font-semibold text-white">{{ item.position }}</h3>
      <div class="text-sm text-gray-400">{{ item.duration }}</div>
    </div>
  </div>
  <Stats/>
</template>