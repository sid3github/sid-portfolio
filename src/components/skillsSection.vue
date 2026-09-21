<template>
  <div class="skills-panel">
    <div class="skills-images">
      <span
        class="skill-logo"
        v-for="skill in logoSkills"
        :key="skill.name"
        :title="skill.name"
      >
        <img
          v-if="!missing[skill.file]"
          :src="`/assets/images/${skill.file}`"
          :alt="skill.name"
          loading="lazy"
          @error="missing[skill.file] = true"
        />
        <span
          v-else
          class="skill-pending"
          role="img"
          :aria-label="`${skill.name} logo pending`"
        ></span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // Drop the official SVGs into public/assets/images using these exact
      // filenames and they replace the pending tiles automatically.
      missing: {},
      logoSkills: [
        { name: "Claude Code", file: "claude_image.svg" },
        { name: "OpenAI Codex", file: "openai_image.svg" },
        { name: "Cursor", file: "cursor_image.svg" },
        { name: "React", file: "react_image.svg" },
        { name: "Next.js", file: "nextjs_image.svg" },
        { name: "TypeScript", file: "typescript_image.svg" },
        { name: "JavaScript", file: "javascript_image.svg" },
        { name: "Tailwind CSS", file: "tailwind_image.svg" },
        { name: "Vue", file: "vue_image.svg" },
        { name: "Nuxt", file: "nuxt_image.svg" },
        { name: "Svelte", file: "svelte_image.svg" },
        { name: "Redux", file: "redux_image.svg" },
        { name: "MUI", file: "mui_image.svg" },
        { name: "Laravel", file: "laravel_image.svg" },
        { name: "Supabase", file: "supabase_image.svg" },
        { name: "PostgreSQL", file: "postgresql_image.svg" },
        { name: "AWS", file: "aws_image.svg" },
        { name: "Git", file: "git_image.svg" },
        { name: "Figma", file: "figma_image.svg" },
        { name: "Canva", file: "canva_image.svg" },
      ],
    };
  },
};
</script>
