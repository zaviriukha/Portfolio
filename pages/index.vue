<script setup lang="ts">

</script>

<template>
  <section class="h-full">
    <div class="container mx-auto h-full">
      <div class="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div class="text-center xl:text-left">
          <span class="text-xl">Front-end Developer</span>
          <h2 class="h1 mb-6">
            Hello I'm<br/> <span class="text-accent">Valeriia Zaviriukha</span>
          </h2>
          <p class="max-w-[480px] mb-9 text-white/80">
            Extensive experience in Front-end development using Vue.js, Pimcore CMS and Shopware 6. Skilled in
            e-commerce development in Germany and Ukraine.</p>

          <div class="flex flex-col xl:flex-row items-center gap-8">
            <button
                class="gap-2 flex items-center justify-center p-2 rounded-xl uppercase
         outline outline-2 outline-accent text-accent hover:outline-white hover:text-white">
              <span>Download CV</span>
              <Icon name="mdi:tray-download" class="text-xl ml-1 "/>
            </button>
            <div class="mb-8 xl:mb-0 flex flex-row gap-2">
              <BtnSocial/>
            </div>
          </div>
        </div>
        <div>photo</div>
      </div>
    </div>
  </section>
</template>