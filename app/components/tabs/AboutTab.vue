<script setup lang="ts">
const about = {
  title: "About me",
  icon: "mdi:person",
  description:
    "Extensive experience in Front-end development using Shopware 6, Pimcore CMS, and Vue.js. Skilled in e-commerce development in Germany and Ukraine. ",
  description2:
    "Regular collaboration with partner companies to develop new features, suggest improvements, and refine their systems. Researched and presented new technologies to the company, including the implementation of Shopware 6 and Vue Storefront.",
  description3: "Direct involvement in client communications, including:",
  info: [
    {
      fieldName: "Linkedin",
      fieldValue: "https://www.linkedin.com/in/valeriia-zaviriukha-579595206/",
    },
    {
      fieldName: "Mail",
      fieldValue: "v.zaviriukha@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "Ukrainian, English",
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
  <h2 class="text-2xl font-bold flex justify-start items-center">
    {{ about.title }}
    <Icon class="ml-2" :name="about.icon" />
  </h2>
  <p class="text-gray-300">{{ about.description }}</p>

  <p class="text-gray-300">{{ about.description3 }}</p>
  <ul
    v-for="communication in about.communications"
    :key="communication.text"
    class=":text-gray-300 list-disc pl-8"
  >
    <li>{{ communication.text }}</li>
  </ul>
  <p class="text-gray-300">{{ about.description2 }}</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div
      v-for="(item, index) in about.info"
      :key="index"
      class="bg-gray-800 p-4 rounded"
    >
      <div class="text-sm text-gray-400">{{ item.fieldName }}</div>

      <div class="font-semibold text-white">
        <a
          v-if="item.fieldName.toLowerCase() === 'linkedin'"
          :href="item.fieldValue"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-400 hover:underline"
        >
          Valeriia Zaviriukha
        </a>
        <span v-else>
          {{ item.fieldValue }}
        </span>
      </div>
    </div>
  </div>
</template>
