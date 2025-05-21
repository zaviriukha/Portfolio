<script setup lang="ts">
import { ref, onMounted } from "vue";

const showServices = ref(false);

const services = [
  {
    href: "/work",
    num: "01",
    title: "Vue Developer",
    description:
      "Developing Vue.js modules based on client-provided designs and adapting them to work within a specific platforms.",
  },
  {
    href: "/work",
    num: "02",
    title: "Pim-Core Developer",
    description:
      "Developing custom modules, implementing templates, integrating with data systems, and extending platform functionality.",
  },
  {
    href: "/work",
    num: "03",
    title: "Shopware 6 Developer",
    description:
      "Setting up and developing custom CMS modules, integrating client APIs, and ensuring stable website operation",
  },
];

onMounted(() => {
  showServices.value = true;
});
</script>

<template>
  <section class="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div class="container mx-auto h-full">
      <transition
        appear
        enter-active-class="transition-opacity duration-1000 ease-in"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
      >
        <div
          v-if="showServices"
          class="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          <div
            v-for="service in services"
            :key="service.num"
            class="flex-1 flex flex-col justify-center gap-6 group"
          >
            <div class="w-full flex justify-between items-center">
              <div
                class="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500"
              >
                {{ service.num }}
              </div>
              <NuxtLink
                :href="service.href"
                class="w-[70px] h-[70px] rounded-full bg-gray-800 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
              >
                <Icon
                  class="text-primary text-3xl"
                  name="mdi:arrow-bottom-right"
                />
              </NuxtLink>
            </div>
            <h2
              class="text-[38px] font-bold leading-none text-gray-800 group-hover:text-accent transition-all duration-500"
            >
              {{ service.title }}
            </h2>
            <p class="text-gray-800">{{ service.description }}</p>
            <div class="border-b border-accent w-full" />
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>
