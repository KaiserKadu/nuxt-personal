<script setup lang="ts">
const route = useRoute()
console.log(route)
const {projects}= useProjects()
const slug = route.params.slug
const project = computed(() => projects.value.find(project => project.slug === slug))
</script>

<template>
   <div v-if="project">
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
  </div>
  <div v-else>
    <p>Project not found.</p>
  </div>
</template>