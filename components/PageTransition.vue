<script setup lang="ts">
import { Motion } from '@vueuse/motion'

// Определяем анимации для переходов
const initial = { opacity: 0, x: -50 }
const enter = { opacity: 1, x: 0, transition: { duration: 0.4 } }
const leave = { opacity: 0, x: 50, transition: { duration: 0.4 } }
</script>

<template>
  <Motion
      tag="div"
      :initial="initial"
      :enter="enter"
      :leave="leave"
      class="page-transition-wrapper"
  >
    <slot />
  </Motion>
</template>

<style scoped>
.page-transition-wrapper {
  /* например, чтобы занимать всю страницу и не ломать layout */
  position: relative;
}
</style>
