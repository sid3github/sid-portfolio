<template>
  <div class="main-page-container">
    <top-section />
    <bottom-section />
  </div>
</template>
<script>
import TopSection from "./components/topSection.vue";
import BottomSection from "./components/bottomSection.vue";
export default {
  data() {
    return {};
  },
  components: {
    TopSection,
    BottomSection,
  },
};
</script>
