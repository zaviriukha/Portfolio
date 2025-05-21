<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/resume", label: "Resume" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

function closeMenu() {
  isOpen.value = false;
}
</script>

<template>
  <div class="z-50">
    <!-- Burger Button -->
    <button
      class="p-2 text-gray-800 dark:text-white"
      aria-label="Open menu"
      @click="isOpen = true"
    >
      <Icon name="mdi:menu" class="w-10 h-10 text-accent" />
    </button>

    <transition name="slide">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-end z-50"
      >
        <div
          class="w-64 h-full bg-white dark:bg-gray-800 shadow-lg p-6 flex flex-col"
        >
          <!-- Close Button -->
          <button
            class="self-end mb-6"
            aria-label="Close menu"
            @click="closeMenu"
          >
            <Icon
              name="mdi:close"
              class="w-8 h-8 text-accent dark:text-white"
            />
          </button>

          <nav class="flex flex-col gap-4 items-center">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="hover:text-accent transition-all capitalize text-lg font-medium text-gray-800 dark:text-white inline-block"
              :class="{
                'text-accent border-b-2 border-accent': $route.path === link.to,
              }"
              @click="closeMenu"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
