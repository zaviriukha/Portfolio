<script setup lang="ts">
import {ref} from 'vue'
import SkillsTab from "~/components/tabs/SkillsTab.vue";
import ExperienceTab from "~/components/tabs/ExperienceTab.vue";
import EducationTab from "~/components/tabs/EducationTab.vue";
import CertificationsTab from "~/components/tabs/CertificationsTab.vue";

const tabs = [
  {id: 'experience', label: 'Experience'},
  {id: 'skills', label: 'Skills'},
  {id: 'education', label: 'Education'},
  {id: 'certifications', label: 'Certifications'},
]

const activeTab = ref('experience')

</script>

<template>
  <transition
      appear
      enter-active-class="transition-opacity duration-1000 ease-in"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
  >
    <section class="h-full flex flex-col justify-center py-0">
      <div class="container flex flex-col xl:flex-row gap-6">
        <!-- Tabs -->
        <div class="overflow-x-auto xl:overflow-visible">
          <div class="flex xl:flex-col gap-4 shrink-0 flex-nowrap w-max md:w-auto">
            <button
                v-for="tab in tabs"
                :key="tab.id"
                class="uppercase"
                :class="[
            'px-4 py-2 rounded font-medium text-left whitespace-nowrap transition-all duration-300',
            activeTab === tab.id
              ? 'bg-accent text-gray-800'
              : 'bg-gray-800 text-gray-100 hover:bg-gray-700'
          ]"
                @click="activeTab = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="flex-1">
          <div v-if="activeTab === 'experience'">
            <ExperienceTab />
          </div>

          <div v-else-if="activeTab === 'skills'">
            <SkillsTab />
          </div>

          <div v-else-if="activeTab === 'education'">
            <EducationTab/>
          </div>

          <div v-else-if="activeTab === 'certifications'">
            <CertificationsTab/>
          </div>
        </div>
      </div>
    </section>

  </transition>
</template>
