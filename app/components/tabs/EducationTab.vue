<script setup lang="ts">
const education = {
  icon: "mdi:education-outline",
  title: "My education",
  items: [
    {
      degree: "Master's Degree in Telecommunications and Radio Engineering",
      institution: "State University of Telecommunications",
      duration: "2014 — 2016",
    },
    {
      degree: "Bachelor's Degree in Computer Engineering",
      institution: "Kyiv College of Communication",
      duration: "2011 — 2014",
    },
  ],
};
</script>

<template>
  <h2
    class="text-gray-800 mb-4 text-2xl font-bold flex justify-start items-center"
  >
    {{ education.title }}
    <Icon class="ml-2" :name="education.icon" />
  </h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div
      v-for="(item, index) in education.items"
      :key="index"
      class="bg-gray-800 p-4 rounded"
    >
      <div class="text-xl font-semibold text-accent">{{ item.degree }}</div>
      <div class="font-semibold text-white">{{ item.institution }}</div>
      <div class="text-sm text-gray-400">{{ item.duration }}</div>
    </div>
  </div>
</template>
