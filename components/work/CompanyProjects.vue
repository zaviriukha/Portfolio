<script setup lang="ts">

const projects = [
  {
    title: "JOOP!",
    category: "Frontend",
    company: "Blackbit digital Commerce GmbH",
    description: "A series of projects involving the development of Vue components based on the Styla Frontend platform.",
    stack: [{name: "Vue.js"}, {name: "JS"}, {name: "Сss"}, {name: "Styla"}],
    image: "/img/slider/joop.png",
    live: "https://joop.com/int/en/",
    github: ""
  },
  {
    title: "WINDSOR",
    category: "Frontend",
    company: "Blackbit digital Commerce GmbH",
    description: "A series of projects involving the development of Vue components based on the Styla Frontend platform.",
    stack: [{name: "Vue.js"}, {name: "JS"}, {name: "Сss"}, {name: "Styla"}],
    image: "/img/slider/windsor.png",
    live: "https://windsor.de/eu/en/",
    github: ""
  },
  {
    title: "strellson",
    category: "Frontend",
    company: "Blackbit digital Commerce GmbH",
    description: "A series of projects involving the development of Vue components based on the Styla Frontend platform.",
    stack: [{name: "Vue.js"}, {name: "JS"}, {name: "Сss"}, {name: "Styla"}],
    image: "/img/slider/strellson.png",
    live: "https://strellson.com/int/en/",
    github: ""
  },
  {
    title: "Bense&Eicke",
    category: "E-Commerce",
    company: "Blackbit digital Commerce GmbH",
    description: "Shopware 6 e-commerce project.",
    stack: [{name: "Shopware"}, {name: "Twig"}, {name: "SCSS"}],
    image: "/img/slider/bense.png",
    live: "https://www.bense-eicke.de/",
    github: ""
  },
  {
    title: "fitstore24",
    category: "E-Commerce",
    company: "Blackbit digital Commerce GmbH",
    description: "Shopware 6 e-commerce project.",
    stack: [{name: "Shopware"}, {name: "Twig"}, {name: "SCSS"}],
    image: "/img/slider/fitstore.png",
    live: "https://www.fitstore24.com/",
    github: ""
  },
  {
    title: "expresso",
    category: "E-Commerce",
    company: "Blackbit digital Commerce GmbH",
    description: "Vue components for BigCommerce project.",
    stack: [{name: "BigCommerce"}, {name: "Vue"}, {name: "SCSS"}],
    image: "/img/slider/expresso.png",
    live: "https://shop.expresso.de/sackkarre-universal-type-2-011-21-201121/",
    github: ""
  }
]
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
    <div
        v-for="(project, index) in projects"
        :key="index"
        class="bg-gray-800 p-6 rounded-xl h-full flex flex-col justify-between"
    >
      <div>
        <img
            :src="project.image"
            :alt="project.title"
            class="rounded-xl mb-4 h-48 w-full object-cover"
        />

        <div class="text-sm text-accent mb-1">{{ project.category }}</div>
        <h3 class="text-xl font-semibold text-white mb-2 uppercase">
          {{ project.title }}
        </h3>

        <p class="text-gray-400 text-sm mb-4">{{ project.description }}</p>
      </div>

      <div class="text-sm text-white mb-1">{{ project.company }}</div>

      <div class="flex flex-wrap gap-2 mb-4">
            <span
                v-for="tech in project.stack"
                :key="tech.name"
                class="text-xs px-2 py-1 rounded bg-gray-700 text-white"
            >
              {{ tech.name }}
            </span>
      </div>

      <div class="flex gap-4 mt-auto">
        <a
            v-if="project.live"
            :href="project.live"
            target="_blank"
            class="text-sm text-accent underline hover:text-white"
        >
          Live
        </a>
        <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            class="text-sm text-accent underline hover:text-white"
        >
          Code
        </a>
      </div>
    </div>
  </div>
</template>
