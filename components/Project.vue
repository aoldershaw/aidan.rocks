<template>
  <li class="project">
    <div class="wrapper" @mouseover="hovering = true" @mouseout="hovering = false">
      <nuxt-link :to="`/projects/${project.id}`" class="no-link">
        <NavBar :title="project.title" :icon="project.icon" />
      </nuxt-link>
      <div class="content">
        <nuxt-link :to="`/projects/${project.id}`" class="no-link">
          <div class="images">
            <img :src="project.images.front" :class="{img: true, hidden: hovering}">
            <img :src="project.images.back" class="img behind">
          </div>
        </nuxt-link>
        <div class="links" v-if="project.links && project.links.length" :style="{'background-color': project.theme.bg}">
          <a v-for="(link, i) in project.links" :key="i" :href="link.href" target="_blank" :style="{'color': project.theme.text}">
            {{link.title}}
          </a>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import NavBar from "~/components/NavBar";

export default {
  components: {
    NavBar
  },
  props: ["project"],
  data() {
    return {
      hovering: false
    };
  },
  computed: {
    currentImage() {
      if (this.hovering) {
        return this.project.images.back;
      }
      return this.project.images.front;
    }
  }
};
</script>


<style>
.project {
  position: relative;
  width: 50%;
  padding: 1.2em;
  display: block;
  text-align: center;
}

@media (max-width: 768px) {
  .project {
    width: 100%;
  }
}

.project .wrapper {
  position: relative;
  box-shadow: 0 0 10px rgb(165, 165, 165);
  transition: box-shadow 300ms ease;
  z-index: 100;
}

.project .wrapper:hover {
  box-shadow: 0 0 60px rgb(165, 165, 165);
}

.content {
  position: relative;
}
.content .img {
  display: block;
  position: relative;
  width: 100%;
  background-size: cover;
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
  z-index: 1;
}

.hidden {
  opacity: 0 !important;
}

.content .img.behind {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
}

.links {
  display: flex;
  justify-content: space-around;
  padding-bottom: 5px;
}

.links a {
  text-decoration: none;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter {
  top: -200px !important;
}
.slide-enter-to {
  top: 0 !important;
}
</style>
