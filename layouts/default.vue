<template>
  <div class="page" :style="pageStyle">
    <nuxt/>
  </div>
</template>

<script>
import projects from "~/assets/projects";

function pageShadow(colour) {
  return `0 0 200px ${colour} inset`;
}

const defaultPageStyle = {
  "background-color": "#dddddd",
  "box-shadow": pageShadow("#999999")
};

function projectStyle(project) {
  return {
    "background-color": project.theme.bg,
    "box-shadow": pageShadow(project.theme.shadow),
    color: project.theme.text
  };
}

export default {
  data() {
    return {
      pageStyle: this.getStyle(this.$route)
    };
  },
  methods: {
    getStyle(route) {
      if (route.params.id) {
        const id = route.params.id;
        const project = projects.find(p => p.id === id);
        if (project && project.theme) {
          return projectStyle(project);
        }
      }
      return defaultPageStyle;
    }
  },
  watch: {
    $route: function(route) {
      this.pageStyle = this.getStyle(route);
    }
  }
};
</script>


<style>
html {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.page {
  min-height: 100vh;
  transition: all 0.5s ease-out;
}

.no-link {
  color: inherit;
  text-decoration: none;
}

.no-link:hover {
  color: inherit;
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
