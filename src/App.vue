<template>
  <div class="main-page-container">
    <div class="window-titlebar">
      <span class="traffic-lights" aria-hidden="true"></span>
      <span class="window-title">{{ activeLabel }}</span>
    </div>
    <top-section />
    <bottom-section v-model:active="activeSection" />
  </div>
</template>
<script>
import TopSection from "./components/topSection.vue";
import BottomSection from "./components/bottomSection.vue";
import { tabs } from "./tabs";

export default {
  data() {
    return { activeSection: "about" };
  },
  computed: {
    // The titlebar names the current section, the way a document window names
    // its document. The person's name lives in the toolbar and is not repeated.
    activeLabel() {
      const tab = tabs.find((t) => t.id === this.activeSection);
      return tab ? tab.label : "About";
    },
  },
  components: { TopSection, BottomSection },
};
</script>
