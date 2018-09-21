<template>
  <div>
    <iframe id="resume" src="/resume.html" class="full" frameBorder="0" />
    <ReturnButton to="/" colour="#555" left="20px" />
  </div>
</template>

<script>
import ReturnButton from "~/components/ReturnButton";

export default {
  components: {
    ReturnButton
  },
  transition: {
    name: "fade",
    mode: "out-in"
  }
};
</script>


<style>
.full {
  width: 100%;
  min-height: 100vh;
}

.page {
  background-color: #f0f0f0 !important;
}
</style>
