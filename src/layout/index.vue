<template>
  <div class="lay-out-wrapper">
    <navBar />
    <router-view></router-view>
  </div>
</template>

<script>
import navBar from "./navBar";
export default {
  name: "Layout",
  components: {
    navBar
  }
};
</script>

<style lang="scss"></style>
