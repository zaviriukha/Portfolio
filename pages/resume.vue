<script setup lang="ts">
import {ref} from 'vue'

const tabs = [
  {id: 'about', label: 'About'},
  {id: 'experience', label: 'Experience'},
  {id: 'skills', label: 'Skills'},
  {id: 'education', label: 'Education'},
  {id: 'certifications', label: 'Certifications'},
]

const activeTab = ref('about')

const about = {
  title: "About me",
  icon: "mdi:person",
  description: "Extensive experience in Front-end development using Shopware 6, Pimcore CMS, and Vue.js. Skilled in e-commerce development in Germany and Ukraine. ",
  description2: "Regular collaboration with partner companies to develop new features, suggest improvements, and refine their systems. Researched and presented new technologies to the company, including the implementation of Shopware 6 and Vue Storefront.",
  description3: "Direct involvement in client communications, including:",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Valeriia Zaviriukha"
    },
    {
      fieldName: "Phone",
      fieldValue: "+38 (097) 170-70-30"
    },
    {
      fieldName: "Mail",
      fieldValue: "v.zaviriukha@gmail.com"
    },
    {
      fieldName: "Languages",
      fieldValue: "Ukrainian, English"
    }
  ],
  communications: [
    {
      communication: "Presenting products to clients"
    },
    {
      communication: "Collecting client product suggestions"
    },
    {
      communication: "Training clients to use developed or modified functionality"
    }
  ]
}

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

const education = {
  icon: "mdi:education-outline",
  title: "My education",
  items: [
    {
      degree: "Master's Degree in Telecommunications and Radio Engineering",
      institution: "State University of Telecommunications",
      duration: "2014 — 2016"
    },
    {
      degree: "Bachelor's Degree in Computer Engineering",
      institution: "Kyiv College of Communication",
      duration: "2011 — 2014"
    }
  ]
}

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
  <transition
      appear
      enter-active-class="transition-opacity duration-1000 ease-in"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
  >
    <section class="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto py-8">

      <!-- Tabs -->
      <div class="flex md:flex-col gap-4 shrink-0">
        <button
            v-for="tab in tabs"
            :key="tab.id"
            class="uppercase"
            :class="[
          'px-4 py-2 rounded font-medium text-left transition-all duration-300',
          activeTab === tab.id
            ? 'bg-accent text-gray-800'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        ]"
            @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Tab Content -->
      <div class="flex-1">
        <div v-if="activeTab === 'about'" class="space-y-4">
          <h2 class="text-2xl font-bold flex justify-start items-center">{{ about.title }}
            <Icon class="ml-2" :name="about.icon"/>
          </h2>
          <p class="text-gray-600 dark:text-gray-300">{{ about.description }}</p>

          <p class="text-gray-600 dark:text-gray-300">{{ about.description3 }}</p>
          <ul
              v-for="communication in about.communications"
              :key="communication.communication"
              class="text-gray-600 dark:text-gray-300 list-disc pl-8 "
          >
            <li>{{ communication.communication }}</li>
          </ul>
          <p class="text-gray-600 dark:text-gray-300">{{ about.description2 }}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
                v-for="(item, index) in about.info"
                :key="index"
                class="bg-gray-100 dark:bg-gray-800 p-4 rounded"
            >
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ item.fieldName }}</div>
              <div class="font-semibold text-gray-800 dark:text-white">{{ item.fieldValue }}</div>
            </div>
          </div>
        </div>

        <div v-else-if="activeTab === 'experience'">
          <h2 class="mb-4 text-2xl font-bold flex justify-start items-center">{{ experience.title }}
            <Icon class="ml-2" :name="experience.icon"/>
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div
                v-for="(item, index) in experience.items"
                :key="index"
                class="bg-gray-100 dark:bg-gray-800 p-4 rounded"
            >
              <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">{{ item.company }}</h2>
              <h3 class="font-semibold text-gray-800 dark:text-white">{{ item.position }}</h3>
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ item.duration }}</div>
            </div>
          </div>
          <Stats/>
        </div>

        <div v-else-if="activeTab === 'skills'">
          <h2 class="mb-4 text-2xl font-bold flex justify-start items-center">{{ skills.title }}
            <Icon class="ml-2" :name="skills.icon"/>
          </h2>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div
                v-for="(item, index) in skills.list"
                :key="index"
                class="bg-gray-100 dark:bg-gray-800 p-4 rounded"
            >
              <div class="flex flex-col justify-center items-center">
                <Icon v-if="item.icon.startsWith('mdi:')" :name="item.icon" class="text-2xl"/>
                <img v-else :src="item.icon" alt="" class="w-10 h-10">
                <span class="uppercase mt-1">{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="activeTab === 'education'">
          <h2 class="mb-4 text-2xl font-bold flex justify-start items-center">{{ education.title }}
            <Icon class="ml-2" :name="education.icon"/>
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
                v-for="(item, index) in education.items"
                :key="index"
                class="bg-gray-100 dark:bg-gray-800 p-4 rounded"
            >
              <div class="text-2xl font-semibold text-gray-800 dark:text-white">{{ item.degree }}</div>
              <div class="font-semibold text-gray-800 dark:text-white">{{ item.institution }}</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ item.duration }}</div>
            </div>
          </div>
        </div>

        <div v-else-if="activeTab === 'certifications'">
          <h2 class="mb-4 text-2xl font-bold flex justify-start items-center">{{ certifications.title }}
            <Icon class="ml-2" :name="certifications.icon"/>
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
                v-for="(item, index) in certifications.items"
                :key="index"
                class="bg-gray-100 dark:bg-gray-800 p-4 rounded"
            >
              <div class="text-2xl font-semibold text-gray-800 dark:text-white">{{ item.company }}</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ item.data }}</div>
            </div>
          </div>
        </div>


      </div>

    </section>
  </transition>
</template>
