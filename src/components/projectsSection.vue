<template>
  <div>
    <div class="project-container">
      <!-- <div
        class="project-card"
        v-for="item in cardItem"
        :key="item.project_name"
      >
        <div class="project-image">
          <img
            :src="`/public/assets/images/${item.project_image_url}`"
            alt="project-image"
          />
        </div>
        <div class="project-text">
          <h5>{{ item.project_name }}</h5>
          <div class="project-button-container">
            <a :href="item.project_code_url" target="_blank">Code</a>
            <a :href="item.project_preview_url" target="_blank">Preview</a>
          </div>
        </div>
      </div> -->
      <div class="project-card">
        <div class="project-image">
          <img src="/assets/images/project_one.png" alt="project-image" />
        </div>
        <div class="project-text">
          <h5>Music Player</h5>
          <div class="project-button-container">
            <a :href="item.project_code_url" target="_blank">Code</a>
            <a :href="item.project_preview_url" target="_blank">Preview</a>
          </div>
        </div>
      </div>
      <div class="project-card">
        <div class="project-image">
          <img src="/assets/images/project_two.png" alt="project-image" />
        </div>
        <div class="project-text">
          <h5>Quiz App</h5>
          <div class="project-button-container">
            <a :href="item.project_code_url" target="_blank">Code</a>
            <a :href="item.project_preview_url" target="_blank">Preview</a>
          </div>
        </div>
      </div>
      <div
        class="project-card"
        v-for="item in cardItem"
        :key="item.project_name"
      >
        <div class="project-image">
          <img src="/assets/images/project_three.png" alt="project-image" />
        </div>
        <div class="project-text">
          <h5>Movie Database</h5>
          <div class="project-button-container">
            <a :href="item.project_code_url" target="_blank">Code</a>
            <a :href="item.project_preview_url" target="_blank">Preview</a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="view-more-section">
        <a href="https://github.com/sid3github" target="_blank">View More</a>
      </div>
    </div>
  </div>
</template>
<script>
import projectInfo from "../projectData";
export default {
  data() {
    return {
      cardItem: projectInfo,
    };
  },
};
</script>
