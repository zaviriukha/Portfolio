<template>
  <div class="relative mx-auto w-[300px] sm:w-[320px] xl:w-[498px] aspect-square">
    <!-- SVG с анимированным градиентом -->
    <svg
        class="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 100 100"
    >
      <defs>
        <linearGradient id="animated-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#00f6ff">
            <animate attributeName="stop-color" values="#00f6ff;#ff00d4;#00f6ff" dur="6s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stop-color="#ff00d4">
            <animate attributeName="stop-color" values="#ff00d4;#00f6ff;#ff00d4" dur="6s" repeatCount="indefinite" />
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

    <!-- Фото -->
    <div class="absolute inset-0 flex items-center justify-center z-10">
      <NuxtImg
          src="/img/image.jpg"
          alt="me"
          class="rounded-full object-cover w-[88%] h-[88%]"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
</script>