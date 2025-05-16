<script setup lang="ts">
const socials = [
  {icon: 'mdi:github', path: "https://github.com/zaviriukha"},
  {icon: 'mdi:linkedin', path: "https://www.linkedin.com/in/valeriia-zaviriukha-579595206"},
  {icon: 'mdi:facebook', path: "https://www.facebook.com/profile.php?id=100004935821330"},
  {icon: 'mdi:telegram', path: "https://t.me/valeriia_zaviriukha"}
]
</script>

<template>
  <div class="flex gap-6">
    <a
        v-for="(social, index) in socials"
        :key="index"
        :href="social.path"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Social link"
        class="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-2xl hover:bg-accent hover:text-primary hover:transition-all duration-500"
    >
      <Icon :name="social.icon"/>
    </a>
  </div>
</template>

