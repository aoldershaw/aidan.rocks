<template>
  <div class="nav-bar">
    <h2 class="title" v-if="title"><span v-if="icon" class="icon">{{icon}}</span>{{title}}</h2>
    <span class="nav-button red"></span>
    <span class="nav-button yellow"></span>
    <span class="nav-button green"></span>
  </div>
</template>

<script>
export default {
  props: ["title", "icon"]
};
</script>


<style scoped>
.nav-bar {
  position: relative;
  width: 100%;
  height: 24px;
  background-color: #dbd9db;
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
  background-color: #fc625d;
  left: 10px;
}

.nav-button.yellow {
  background-color: #fdbd41;
  left: 26px;
}

.nav-button.green {
  background-color: #35cc4b;
  left: 42px;
}

.nav-bar .title {
  font-size: 1em;
  padding-top: 2px;
}

.icon {
  margin-right: -2px;
}
</style>
