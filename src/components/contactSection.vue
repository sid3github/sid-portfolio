<template>
  <p class="contact-detail">
    Click on the links above to find me on social media or <br />
    email me:
    <span class="email-click" @click="emailButton">click</span>
  </p>
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
