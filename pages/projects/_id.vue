<template>
  <div>
    <section class="page-content">
      <h1>
        <span class="icon" v-if="project.icon">{{project.icon}}</span>
        {{project.title}}
      </h1>
      <p class="subtitle" v-html="project.subtitle"></p>
      <div class="links" v-if="project.links && project.links.length">
        <a
          v-for="(link, i) in project.links"
          :key="i"
          :href="link.href"
          target="_blank"
          :style="{'color': project.theme.text}"
        >{{link.title}}</a>
      </div>
      <div class="container">
        <NavBar/>
        <carousel
          :per-page="1"
          :paginationActiveColor="project.theme.text"
          :paginationColor="project.theme.shadow"
          class="carousel"
        >
          <slide>
            <img class="carousel-img" :src="project.images.full.front">
          </slide>
          <slide>
            <img class="carousel-img" :src="project.images.full.back">
          </slide>
        </carousel>
      </div>
      <div class="descriptions" v-if="project.description && project.description.length">
        <h2>Details</h2>
        <ul>
          <li v-for="(pt, i) in project.description" :key="i" v-html="pt"></li>
        </ul>
      </div>
      <div class="tags" v-if="project.tags && project.tags.length">
        <h2>Technologies Used</h2>
        <ul>
          <li class="pill" :style="pillStyle" v-for="(tag, i) in project.tags" :key="i">{{tag}}</li>
        </ul>
      </div>
    </section>
    <LeftRightNav
      :colour="project.theme.text"
      :left="urlFor(prevProject)"
      :leftText="prevProject.title"
      :right="urlFor(nextProject)"
      :rightText="nextProject.title"
    />
    <ReturnButton to="/projects" :colour="project.theme.text"/>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

import NavBar from "~/components/NavBar";
import LeftRightNav from "~/components/LeftRightNav";
import ReturnButton from "~/components/ReturnButton";
import projects from "~/assets/projects";

export default {
  components: {
    Carousel,
    Slide,
    NavBar,
    LeftRightNav,
    ReturnButton
  },
  transition: {
    name: "fade",
    mode: "out-in"
  },
  validate({ params }) {
    return !!params.id && !!projects.find(p => p.id === params.id);
  },
  data() {
    const index = projects.findIndex(p => p.id === this.$route.params.id);
    const prevIndex = (index - 1 + projects.length) % projects.length;
    const nextIndex = (index + 1) % projects.length;
    return {
      project: projects[index],
      prevProject: projects[prevIndex],
      nextProject: projects[nextIndex]
    };
  },
  methods: {
    urlFor(project) {
      return `/projects/${project.id}`;
    }
  },
  computed: {
    pillStyle() {
      return {
        "background-color": this.project.theme.pillBg,
        color: this.project.theme.pillText
      };
    }
  }
};
</script>

<style scoped>
.page-content {
  text-align: center;
  padding: 50px;
}

@media (max-width: 500px) {
  .page-content {
    padding: 25px;
  }
}

h1 {
  font-size: 2.5em;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.15);
}

.subtitle {
  font-size: 1em;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.15);
  font-weight: 600;
  margin-bottom: 20px;
}

h1,
h2 {
  text-transform: lowercase;
}

.links {
  display: flex;
  justify-content: space-around;
  padding-bottom: 5px;
}

.links a {
  text-decoration: none;
  font-size: 1.25em;
}

h2 {
  margin-bottom: 10px;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

ul {
  list-style: none;
  margin: 0 0 1.5em 0;
  padding: 0;
}

li:not(:last-child):not(.pill) {
  margin-bottom: 0.5em;
}

.carousel-img {
  width: 100%;
}

.nav-bar {
  position: relative;
  width: 100%;
  height: 24px;
  background-color: #ddd;
  color: #6a6a6a;
  z-index: 100;
}

.nav-button {
  height: 12px;
  width: 12px;
  display: inline-block;
  border-radius: 50%;
  position: absolute;
  top: 6px;
  left: 10px;
}

.nav-button.red {
  background-color: #ff5f57;
  left: 10px;
}

.nav-button.yellow {
  background-color: #ffbd2e;
  left: 26px;
}

.nav-button.green {
  background-color: #28ca41;
  left: 42px;
}

.tags ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.pill {
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 5px;
}

.pill:not(:last-child) {
  margin-right: 5px;
}
</style>
