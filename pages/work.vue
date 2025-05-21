<script setup lang="ts">
import { ref } from 'vue'
import CompanyProjects from "~/components/work/CompanyProjects.vue";
import HomeProjects from "~/components/work/HomeProjects.vue";

const activeTab = ref<'company' | 'home'>('company')
</script>

<template>
  <section class="h-full">
    <div class="container mx-auto">
      <!-- Tabs -->
      <div class="flex gap-4 mb-8">
        <button
            :class="[
            'px-6 py-2 rounded-full font-medium transition-colors duration-300',
            activeTab === 'company'
              ? 'bg-accent text-gray-100'
              : 'bg-gray-800 text-gray-100 hover:bg-gray-700'
          ]"
            @click="activeTab = 'company'"
        >
          Company Projects
        </button>
        <button
            :class="[
            'px-6 py-2 rounded-full font-medium transition-colors duration-300',
            activeTab === 'home'
              ? 'bg-accent text-gray-100'
              : 'bg-gray-800 text-gray-100 hover:bg-gray-700'
          ]"
            @click="activeTab = 'home'"
        >
          My Projects
        </button>
      </div>

      <!-- Tab Content with Transition -->
      <transition
          appear
          mode="out-in"
          enter-active-class="transition-opacity duration-1000 ease-in"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-300 ease-out"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
      >
        <component
            :is="activeTab === 'company' ? CompanyProjects : HomeProjects"
            :key="activeTab"
        />
      </transition>
    </div>
  </section>
</template>
