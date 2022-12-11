<template>
  <div>
    <div class="buttons-section">
      <button
        :class="{ active: aboutSection }"
        @click.prevent="switchSection('about')"
      >
        About
      </button>
      <button
        :class="{ active: skillsSection }"
        @click.prevent="switchSection('skills')"
      >
        Skills
      </button>
      <button
        :class="{ active: projectsSection }"
        @click.prevent="switchSection('projects')"
      >
        Projects
      </button>
      <button
        :class="{ active: contactSection }"
        @click.prevent="switchSection('contact')"
      >
        Contact
      </button>
    </div>

    <div class="info-section">
      <transition-group name="fade">
        <about-section v-if="aboutSection" />
        <skills-section v-if="skillsSection" />
        <projects-section v-if="projectsSection" />
        <contact-section v-if="contactSection" />
      </transition-group>
    </div>
  </div>
</template>
<script>
import AboutSection from "./aboutSection.vue";
import SkillsSection from "./skillsSection.vue";
import ProjectsSection from "./projectsSection.vue";
import ContactSection from "./contactSection.vue";
export default {
  data() {
    return {
      aboutSection: true,
      skillsSection: false,
      projectsSection: false,
      contactSection: false,
    };
  },
  components: {
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
  },
  methods: {
    switchSection(section) {
      if (section === "about") {
        this.aboutSection = true;
        this.skillsSection = false;
        this.projectsSection = false;
        this.contactSection = false;
      }
      if (section === "skills") {
        this.skillsSection = true;
        this.aboutSection = false;
        this.projectsSection = false;
        this.contactSection = false;
      }
      if (section === "projects") {
        this.projectsSection = true;
        this.aboutSection = false;
        this.skillsSection = false;
        this.contactSection = false;
      }
      if (section === "contact") {
        this.contactSection = true;
        this.aboutSection = false;
        this.skillsSection = false;
        this.projectsSection = false;
      }
    },
  },
};
</script>
