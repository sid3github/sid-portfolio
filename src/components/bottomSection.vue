<template>
  <div class="bottom-shell">
    <div class="buttons-section" role="tablist" aria-label="Sections">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ active: active === tab.id }"
        role="tab"
        :aria-selected="active === tab.id"
        @click.prevent="$emit('update:active', tab.id)"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="info-section">
      <transition name="fade" mode="out-in">
        <component :is="activeComponent" :key="active" />
      </transition>
    </div>
  </div>
</template>
<script>
import AboutSection from "./aboutSection.vue";
import SkillsSection from "./skillsSection.vue";
import ExperienceSection from "./experienceSection.vue";
import ProjectsSection from "./projectsSection.vue";
import ContactSection from "./contactSection.vue";
import { tabs } from "../tabs";

export default {
  props: {
    active: { type: String, required: true },
  },
  emits: ["update:active"],
  data() {
    return { tabs };
  },
  computed: {
    activeComponent() {
      const tab = this.tabs.find((t) => t.id === this.active);
      return tab ? tab.component : "about-section";
    },
  },
  components: {
    AboutSection,
    SkillsSection,
    ExperienceSection,
    ProjectsSection,
    ContactSection,
  },
};
</script>
