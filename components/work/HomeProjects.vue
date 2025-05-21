<script setup lang="ts">

const pets = [
  {
    title: "Portfolio",
    category: "Frontend",
    description: "My Portfolio. You already here!",
    stack: [{name: "Vue.js"}, {name: "Nuxt"}, {name: "Tailwind"}],
    image: "/img/slider/portfolio.webp",
    live: "https://vue3-currency.netlify.app/",
    github: "https://github.com/zaviriukha/Portfolio"
  },
  {
    title: "films search",
    category: "Frontend",
    description: "Search and display of information about films and TV series using the TMDB API. Built with Vue and Vite, styled with Tailwind CSS.",
    stack: [{name: "Vue.js"}, {name: "JS"}, {name: "Tailwind"}, {name: "Vite"}],
    image: "/img/slider/films-search.webp",
    live: "https://site-for-films.netlify.app/",
    github: "https://github.com/zaviriukha/films-search"
  },
  {
    title: "films search 2.0",
    category: "Frontend",
    description: "An updated version of films-search. Created with Nuxt and styled with Vuetify.",
    stack: [{name: "Vue.js"}, {name: "TS"}, {name: "Nuxt"}, {name: "Vuetify"}],
    image: "/img/slider/films-search-2.webp",
    live: "https://films-search-2.netlify.app/",
    github: "https://github.com/zaviriukha/films-search-2.0"
  },
  {
    title: "currency",
    category: "Frontend",
    description: "Project based on Vue 3 and API of the National Bank of Ukraine (NBU).",
    stack: [{name: "Vue.js"}, {name: "Pinia"}, {name: "Tailwind"}],
    image: "/img/slider/currency.webp",
    live: "https://vue3-currency.netlify.app/",
    github: "https://github.com/zaviriukha/currency"
  }
]
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
    <div
        v-for="(pet, index) in pets"
        :key="index"
        class="bg-gray-800 p-6 rounded-xl h-full flex flex-col justify-between"
    >
      <div>
        <img
            :src="pet.image"
            :alt="pet.title"
            class="rounded-xl mb-4 h-48 w-full object-cover"
        >

        <div class="text-sm text-accent mb-1">{{ pet.category }}</div>
        <h3 class="text-xl font-semibold text-white mb-2 uppercase">
          {{ pet.title }}
        </h3>

        <p class="text-gray-100 text-sm mb-4">{{ pet.description }}</p>
      </div>

      <div class="flex flex-wrap gap-2 mb-4">
            <span
                v-for="tech in pet.stack"
                :key="tech.name"
                class="text-xs px-2 py-1 rounded bg-gray-700 text-gray-100"
            >
              {{ tech.name }}
            </span>
      </div>

      <div class="flex gap-4 mt-auto">
        <a
            v-if="pet.live"
            :href="pet.live"
            target="_blank"
            class="text-sm text-accent underline hover:text-gray-100"
        >
          Live
        </a>
        <a
            v-if="pet.github"
            :href="pet.github"
            target="_blank"
            class="text-sm text-accent underline hover:text-gray-100"
        >
          Code
        </a>
      </div>
    </div>
  </div>
</template>
