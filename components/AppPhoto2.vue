<script setup lang="ts">
import { ref } from "vue";

const isLoaded = ref(false);

const handleLoad = () => {
  isLoaded.value = true;
};
</script>

<template>
  <div
    class="relative mx-auto w-[300px] sm:w-[320px] xl:w-[498px] aspect-square"
  >
    <svg
      class="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 100 100"
    >
      <defs>
        <linearGradient
          id="animated-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stop-color="#00f6ff">
            <animate
              attributeName="stop-color"
              values="#00f6ff;#ff00d4;#00f6ff"
              dur="6s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stop-color="#ff00d4">
            <animate
              attributeName="stop-color"
              values="#ff00d4;#00f6ff;#ff00d4"
              dur="6s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>

      <circle
        cx="50"
        cy="50"
        r="48"
        stroke="url(#animated-gradient)"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-dasharray="5 5"
      />
    </svg>

    <div class="absolute inset-0 flex items-center justify-center z-10">
      <div
        v-if="!isLoaded"
        class="w-[88%] h-[88%] rounded-full bg-gray-700 animate-pulse"
      />

      <NuxtImg
        v-show="isLoaded"
        src="/img/image.webp"
        alt="me"
        class="rounded-full object-cover w-[88%] h-[88%] transition-opacity duration-500"
        @load="handleLoad"
      />
    </div>
  </div>
</template>
