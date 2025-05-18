<template>
  <div class="w-full h-full relative">
    <div
        class="flex justify-center items-center mix-blend-lighten w-[300px] h-[300px] md:w-[320px] md:h-[320px] xl:w-[498px] xl:h-[498px]">
      <transition
          enter-active-class="transition-opacity duration-1000 ease-in"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
      >
        <NuxtImg
            v-if="loaded"
            src="/img/image.jpg"
            alt="me"
            class="object-cover rounded-full w-[300px] h-[300px] md:w-[320px] md:h-[320px] xl:w-[498px] xl:h-[498px]"
        />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const loaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    loaded.value = true
  }, 100)
})
</script>
