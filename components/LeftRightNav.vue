<template>
  <div>
    <div class="buttons">
      <nuxt-link
          class="button left"
          :style="{color: colour}"
          :to="left">
        <span>{{leftText}}</span>
      </nuxt-link>
      <nuxt-link
          class="button right"
          :style="{color: colour}"
          :to="right">
        <span>{{rightText}}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["left", "right", "leftText", "rightText", "colour"]
};
</script>


<style scoped>
.buttons {
  position: fixed;
}

@media (max-width: 600px) {
  .buttons {
    display: none;
  }
}

.button {
  transition: color 0.2s;
  position: fixed;
  top: 50%;
  transform: translate(0, -50%);
  padding: 25px;
  border-radius: 15px;
  text-decoration: none;
}

.button span {
  position: fixed;
  min-width: 200px;
  top: 49%; /* Hacky, but want text to be centered in arrow */
  opacity: 0;
  transition: opacity 0.2s ease-out;
}

.button:hover span {
  opacity: 1;
}

.button.left span {
  left: 50px;
}
.button.right span {
  right: 50px;
  text-align: right;
}

.buttons .left {
  left: 10px;
}

.buttons .left::before {
  content: "‹";
  font-size: 5em;
}

.buttons .right {
  right: 10px;
}

.buttons .right::after {
  content: "›";
  font-size: 5em;
}
</style>
