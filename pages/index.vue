<script setup lang="ts">
import Cv from "~/components/btn/cv.vue";
</script>

<template>
  <section class="h-full">
    <div class="container mx-auto h-full">
      <div
        class="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24"
      >
        <div class="text-center xl:text-left order-2 xl:order-none">
          <h2 class="h1 text-gray-800">Valeriia Zaviriukha</h2>
          <p class="h2 text-accent mb-8">Front-end Developer</p>
          <p class="max-w-[480px] mb-9 text-gray-800">
            Extensive experience in Front-end development using Vue.js, Pimcore
            CMS and Shopware 6. Skilled in e-commerce development in Germany and
            Ukraine.
          </p>

          <div
            class="xl:mb-9 mb-0 flex flex-col xl:flex-row items-center gap-8"
          >
            <Cv />
            <div class="mb-8 xl:mb-0 flex flex-row gap-2">
              <BtnSocial />
            </div>
          </div>
          <!--          <Stats />-->
        </div>
        <div class="order-1 xl:order-none mb-8 xl:mb-0">
          <!--          <AppPhoto/>-->
          <AppPhoto2 />
        </div>
      </div>
    </div>
  </section>
</template>
