<template>
  <section class="container">
    <h1>Noteworthy Projects</h1>
    <ul class="project-list">
      <Project v-for="project in projects" :key="project.id" :project="project"/>
    </ul>
    <ReturnButton to="/" colour="#000" />
  </section>
</template>

<script>
import Project from "~/components/Project";
import ReturnButton from "~/components/ReturnButton";
import projects from "~/assets/projects";

export default {
  components: {
    Project,
    ReturnButton
  },
  transition: {
    name: "fade",
    mode: "out-in"
  },
  data() {
    return {
      projects
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;
}

.container h1 {
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.15);
  font-size: 2em;
  text-transform: lowercase;
}

@media (min-width: 1000px) {
  .container {
    max-width: 840px;
  }
}

.project-list {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
