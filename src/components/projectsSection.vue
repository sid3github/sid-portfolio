<template>
  <div class="md-layout">
    <div class="md-rail" role="tablist" aria-label="Projects">
      <button
        v-for="(item, i) in items"
        :key="item.project_name"
        class="md-rail-item"
        :class="{ 'is-active': i === selected }"
        role="tab"
        :aria-selected="i === selected"
        @click="selected = i"
      >
        <span class="md-rail-name">{{ item.project_name }}</span>
        <span class="md-rail-meta">{{ item.kind }}</span>
      </button>
    </div>

    <div class="md-detail" role="tabpanel">
      <div class="md-detail-head">
        <h5>{{ active.project_name }}</h5>
        <span class="exp-date">{{ active.kind }}</span>
      </div>
      <div class="exp-company">{{ active.project_company }}</div>

      <p class="project-description">{{ active.project_description }}</p>

      <ul class="md-points" v-if="active.highlights">
        <li v-for="point in active.highlights" :key="point">{{ point }}</li>
      </ul>

      <div class="md-detail-foot">
        <div class="project-tags">
          <span class="chip" v-for="tag in active.project_tags" :key="tag">{{
            tag
          }}</span>
        </div>
        <div class="md-links" v-if="active.project_url">
          <a :href="active.project_url" target="_blank" rel="noopener"
            >Visit site</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { projectItems } from "../projectData";
export default {
  data() {
    return {
      items: projectItems,
      selected: 0,
    };
  },
  computed: {
    active() {
      return this.items[this.selected];
    },
  },
};
</script>
