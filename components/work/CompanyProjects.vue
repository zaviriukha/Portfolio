<script setup lang="ts">
import { ref } from "vue";

const loadedImages = ref<Record<number, boolean>>({});

const handleImageLoad = (index: number) => {
  loadedImages.value[index] = true;
};

const projects = [
  {
    title: "JOOP!",
    category: "Frontend",
    company: "Blackbit digital Commerce GmbH",
    description:
      "A series of projects involving the development of Vue components based on the Styla Frontend platform.",
    stack: [
      { name: "Vue.js" },
      { name: "JS" },
      { name: "Сss" },
      { name: "Styla" },
    ],
    image: "/img/slider/joop.webp",
    live: "https://joop.com/int/en/",
    github: "",
  },
  {
    title: "WINDSOR",
    category: "Frontend",
    company: "Blackbit digital Commerce GmbH",
    description:
      "A series of projects involving the development of Vue components based on the Styla Frontend platform.",
    stack: [
      { name: "Vue.js" },
      { name: "JS" },
      { name: "Сss" },
      { name: "Styla" },
    ],
    image: "/img/slider/windsor.webp",
    live: "https://windsor.de/eu/en/",
    github: "",
  },
  {
    title: "strellson",
    category: "Frontend",
    company: "Blackbit digital Commerce GmbH",
    description:
      "A series of projects involving the development of Vue components based on the Styla Frontend platform.",
    stack: [
      { name: "Vue.js" },
      { name: "JS" },
      { name: "Сss" },
      { name: "Styla" },
    ],
    image: "/img/slider/strellson.webp",
    live: "https://strellson.com/int/en/",
    github: "",
  },
  {
    title: "Bense&Eicke",
    category: "E-Commerce",
    company: "Blackbit digital Commerce GmbH",
    description: "Shopware 6 e-commerce project.",
    stack: [{ name: "Shopware" }, { name: "Twig" }, { name: "SCSS" }],
    image: "/img/slider/bense.webp",
    live: "https://www.bense-eicke.de/",
    github: "",
  },
  {
    title: "fitstore24",
    category: "E-Commerce",
    company: "Blackbit digital Commerce GmbH",
    description: "Shopware 6 e-commerce project.",
    stack: [{ name: "Shopware" }, { name: "Twig" }, { name: "SCSS" }],
    image: "/img/slider/fitstore.webp",
    live: "https://www.fitstore24.com/",
    github: "",
  },
  {
    title: "expresso",
    category: "E-Commerce",
    company: "Blackbit digital Commerce GmbH",
    description: "Vue components for BigCommerce project.",
    stack: [{ name: "BigCommerce" }, { name: "Vue" }, { name: "SCSS" }],
    image: "/img/slider/expresso.webp",
    live: "https://shop.expresso.de/sackkarre-universal-type-2-011-21-201121/",
    github: "",
  },
];
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="bg-gray-800 p-6 rounded-xl h-full flex flex-col justify-between"
    >
      <div>
        <div
          v-if="!loadedImages[index]"
          class="rounded-xl mb-4 h-48 w-full bg-gray-700 animate-pulse"
        />

        <img
          v-show="loadedImages[index]"
          :src="project.image"
          :alt="project.title"
          class="rounded-xl mb-4 h-48 w-full object-cover transition-opacity duration-500"
          @load="handleImageLoad(index)"
        >

        <div class="text-sm text-accent mb-1">{{ project.category }}</div>
        <h3 class="text-xl font-semibold text-white mb-2 uppercase">
          {{ project.title }}
        </h3>

        <p class="text-gray-100 text-sm mb-4">{{ project.description }}</p>
      </div>

      <div class="text-sm text-gray-100 mb-1">{{ project.company }}</div>

      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in project.stack"
          :key="tech.name"
          class="text-xs px-2 py-1 rounded bg-gray-700 text-gray-100"
        >
          {{ tech.name }}
        </span>
      </div>

      <div class="flex gap-4 mt-auto">
        <a
          v-if="project.live"
          :href="project.live"
          target="_blank"
          class="text-sm text-accent underline hover:text-gray-100"
        >
          Live
        </a>
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          class="text-sm text-accent underline hover:text-gray-100"
        >
          Code
        </a>
      </div>
    </div>
  </div>
</template>
