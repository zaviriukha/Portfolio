<template>
  <header class="text-white py-8 xl:py-12 flex gap-6 text-lg">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink href="/">
        <h1 class="text-4xl font-semibold">
          Valeriia<span class="text-accent">.</span>
        </h1>
      </NuxtLink>
      <div class="hidden xl:flex items-center justify-center gap-8">
        <NavMenu/>
        <NuxtLink href="/contact">
          <button
              class="bg-accent text-primary hover:bg-accent-hover hover:text-white h-[44px] px-6 py-2 md:h-[48px] md:px-6 md:rounded-xl lg:px-8 lg:text-sm lg:uppercase lg:tracking-[2px]">
            Hire me
          </button>
        </NuxtLink>
      </div>

      <div class="xl:hidden">
        <MobMenu/>
      </div>

    </div>
  </header>
</template>
<script setup lang="ts">
import MobMenu from "~/components/navigation/MobMenu.vue";
import NavMenu from "~/components/navigation/NavMenu.vue";
</script>