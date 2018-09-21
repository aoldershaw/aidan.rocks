<template>
  <nuxt-link :to="to" class="return" :style="{color: colour, left: left || '10px'}">↩</nuxt-link>
</template>

<script>
export default {
  props: ["to", "colour", "left"]
};
</script>


<style scoped>
.return {
  position: fixed;
  top: 10px;
  left: 10px;
  font-size: 3em;
  text-decoration: none;
  transform: scale(1, -1);
  z-index: 1000;
}
</style>
