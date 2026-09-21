<template>
  <div class="md-layout">
    <div class="md-rail" role="tablist" aria-label="Roles">
      <button
        v-for="(role, i) in roles"
        :key="role.company + role.date"
        class="md-rail-item"
        :class="{ 'is-active': i === selected }"
        role="tab"
        :aria-selected="i === selected"
        @click="selected = i"
      >
        <span class="md-rail-name">{{ role.short }}</span>
        <span class="md-rail-meta">{{ role.years }}</span>
      </button>
    </div>

    <div class="md-detail" role="tabpanel">
      <div class="md-detail-head">
        <h5>{{ active.title }}</h5>
        <span class="exp-date">{{ active.date }}</span>
      </div>
      <div class="exp-company">{{ active.company }} · {{ active.location }}</div>
      <ul class="md-points">
        <li v-for="point in active.points" :key="point">{{ point }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import experienceInfo from "../experienceData";
export default {
  data() {
    return {
      roles: experienceInfo,
      selected: 0,
    };
  },
  computed: {
    active() {
      return this.roles[this.selected];
    },
  },
};
</script>
