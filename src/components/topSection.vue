<template>
  <div class="page-top">
    <div class="right-section">
      <div class="image-container">
        <img
          src="https://avatars.githubusercontent.com/u/39296522?v=4"
          alt="A photo of Siddharth Padwal"
        />
      </div>
    </div>

    <div class="left-section">
      <h1>Siddharth Padwal</h1>
      <h3>AI-Augmented Software Engineer</h3>
      <div class="social-links">
        <a
          href="https://www.linkedin.com/in/siddharth-padwal-b86034131/"
          target="_blank"
          rel="noopener"
          >LinkedIn</a
        >
        <a href="https://github.com/sid3github" target="_blank" rel="noopener"
          >Github</a
        >
        <a
          href="https://www.instagram.com/siddharthpadwal/"
          target="_blank"
          rel="noopener"
          >Instagram</a
        >
      </div>
    </div>

    <div class="toolbar-meta">
      <span class="toolbar-location">Mumbai, India</span>
      <button class="aqua-button" type="button" @click="emailButton">
        Email Me
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    emailButton() {
      window.location.href = "mailto:siddharthpadwal3@gmail.com";
    },
  },
};
</script>
