<script setup lang="ts">
import Vue3autocounter from 'vue3-autocounter'

const experiences = [
  { num: '7', text: 'Years of experience' },
  { num: '6', text: 'Known technologies' },
  { num: '18', text: 'Completed projects' }
]
</script>

<template>
  <div class="flex flex-row gap-4 max-w-[80vw] mx-auto xl:max-w-none">
    <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="flex flex-col items-center"
    >
      <Vue3autocounter
          :startAmount="0"
          :endAmount="+experience.num"
          :duration="2.5"
          suffix=""
          :autoinit="true"
          class="text-4xl font-bold text-accent"
      />
      <p
          class="mt-1 text-sm text-white/80 text-center"
          :class="experience.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'"
      >
        {{ experience.text }}
      </p>
    </div>
  </div>
</template>
