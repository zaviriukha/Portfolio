<script setup lang="ts">
const experience = {
  icon: "mdi:list-box-outline",
  title: "My experience",
  description:
    "Extensive experience in Front-end development using Shopware 6, Pimcore CMS, and Vue.js. Skilled in e-commerce development in Germany and Ukraine. ",
  description2:
    "Regular collaboration with partner companies to develop new features, suggest improvements, and refine their systems. Researched and presented new technologies to the company, including the implementation of Shopware 6 and Vue Storefront.",
  description3: "Direct involvement in client communications, including:",
  items: [
    {
      company: "Blackbit digital Commerce GmbH",
      position: "Front-End Developer",
      duration: "November 2020 - March 2025",
    },
    {
      company: "Diamatic LLC",
      position: "Front-End Developer",
      duration: "December 2018 — July 2020",
    },
    {
      company: "DevDroid",
      position: "Junior Front-End Developer",
      duration: "November 2017 — October 2018",
    },
    {
      company: "IMQ",
      position: "Markup Developer",
      duration: "May 2014 — September 2017",
    },
  ],
  communications: [
    { text: "Presenting products to clients" },
    { text: "Collecting client product suggestions" },
    { text: "Training clients to use developed or modified functionality" },
  ],
};
</script>

<template>
  <h2
    class="mb-4 text-2xl font-bold flex justify-start items-center text-gray-800"
  >
    {{ experience.title }}
    <Icon class="ml-2" :name="experience.icon" />
  </h2>
  <p class="text-gray-800 pb-2">{{ experience.description }}</p>
  <p class="text-gray-800 pb-2">{{ experience.description3 }}</p>
  <ul
    v-for="communication in experience.communications"
    :key="communication.text"
    class="text-gray-800 list-disc pl-8 pb-2"
  >
    <li>{{ communication.text }}</li>
  </ul>
  <p class="text-gray-800 mb-4">{{ experience.description2 }}</p>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
    <div
      v-for="(item, index) in experience.items"
      :key="index"
      class="bg-gray-800 p-4 rounded"
    >
      <h2 class="text-xl font-semibold text-accent">{{ item.company }}</h2>
      <h3 class="font-semibold text-white">{{ item.position }}</h3>
      <div class="text-sm text-gray-400">{{ item.duration }}</div>
    </div>
  </div>
  <Stats />
</template>
