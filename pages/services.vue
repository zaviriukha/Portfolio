<script setup lang="ts">
import {ref, onMounted} from 'vue'

const showServices = ref(false)

const services = [
  {num: '01', title: 'Front-end Developer, Vue,js', description: 'Front-end Developer'},
  {num: '02', title: 'Pim-Core Developer', description: 'Front-end Developer'},
  {num: '03', title: 'Shopware6 Developer', description: 'Front-end Developer'},
]

onMounted(() => {
  showServices.value = true
})

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
                  class="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                {{ service.num }}
              </div>
              <NuxtLink href="/"
                        class="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                <Icon class="text-primary text-3xl" name="mdi:arrow-bottom-right"/>
              </NuxtLink>
            </div>
            <h2 class="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
              {{ service.title }}</h2>
            <p>{{ service.description }}</p>
            <div class="border-b border-white/20 w-full"/>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>
