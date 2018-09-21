<template>
  <section class="container">
    <div>
      <h1 class="title">
        Hello, my name is Aidan Oldershaw
      </h1>
      <h2 class="subtitle">
        I'm a 4th year student at McGill University, where I study Software Engineering (B.Sc.) <br>
        I love cooking and playing video games (<a href="https://www.rocketleague.com/" class="no-link" target="_blank">⚽🚗</a>), but most of all, 
        I love exploring new technologies and developing software. <br>
        Click on the links below to learn a bit more about me.
      </h2>
      <div class="links-home">
        <nuxt-link to="/projects">Projects</nuxt-link>
        <a href="/resume.pdf">Resume</a>
        <!-- <nuxt-link to="/resume">Resume</nuxt-link> -->
        <a href="https://github.com/aoldershaw" target="_blank">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  transition: {
    name: "fade",
    mode: "out-in"
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 25px;
}
.container br {
  line-height: 150%;
}
.title {
  display: block;
  font-weight: 700;
  font-size: 2em;
  color: rgb(71, 71, 71);
}
.subtitle {
  font-weight: 400;
  font-size: 1.25em;
  color: #646464;
  padding-bottom: 15px;
}
.links-home {
  padding-top: 15px;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.links-home a {
  color: #0044c2;
}
</style>
