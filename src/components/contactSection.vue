<template>
  <div class="contact-panel">
    <!-- "Signal": a glass core with satellites orbiting on two tilted rings.
         Real 3D (perspective + preserve-3d), not a flat illustration. -->
    <div class="contact-stage" aria-hidden="true">
      <div class="stage-scene">
        <div class="orb">
          <span class="orb-gloss"></span>
          <span class="orb-shine"></span>
        </div>
        <div class="ring ring-a">
          <span class="bead bead-top"></span>
          <span class="bead bead-bottom"></span>
        </div>
        <div class="ring ring-b">
          <span class="bead bead-top"></span>
        </div>
      </div>
      <div class="stage-shadow"></div>
    </div>

    <p class="contact-lede">
      Based in Mumbai, India — open to conversations about frontend
      architecture, EdTech products and agentic engineering workflows.
    </p>

    <dl class="contact-rows">
      <div class="contact-row">
        <dt>Email</dt>
        <dd>
          <span class="email-click" @click="emailButton"
            >siddharthpadwal3@gmail.com</span
          >
        </dd>
      </div>
      <div class="contact-row">
        <dt>Phone</dt>
        <dd><a href="tel:+918779078237">+91 87790 78237</a></dd>
      </div>
      <div class="contact-row">
        <dt>Elsewhere</dt>
        <dd>
          <a
            href="https://www.linkedin.com/in/siddharth-padwal-b86034131/"
            target="_blank"
            rel="noopener"
            >LinkedIn</a
          >
          <a href="https://github.com/sid3github" target="_blank" rel="noopener"
            >GitHub</a
          >
          <a
            href="https://www.instagram.com/siddharthpadwal/"
            target="_blank"
            rel="noopener"
            >Instagram</a
          >
        </dd>
      </div>
    </dl>
  </div>
</template>
<script>
export default {
  methods: {
    emailButton() {
      window.location.href =
        "mailto:siddharthpadwal3@gmail.com?subject=Subject&body=message%20goes%20here";
    },
  },
};
</script>
