<template>
  <div class="baner-wrapper">
    <div class="bruce">
      <div class="parallax"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Baner"
};
</script>

<style lang="scss">
$bg: "~@/assets/baner/index.png";
.baner-wrapper {
  .bruce {
    .parallax {
      width: 100%;
      height: 100vh;
      background-image: url($bg);
      background-repeat: no-repeat;
      background-position: center;
      background-attachment: fixed;
      background-size: 100% 100%;
    }
  }
}
.baner-wrapper::-webkit-scrollbar {
  display: none;
}
</style>
