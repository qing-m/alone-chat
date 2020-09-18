<template>
  <div class="home-wrapper">
    <div class="bruce">
      <div class="parallax-scrolling"></div>
      <div class="content">111111111111</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss">
$bg: "https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg";
.home-wrapper {
  .bruce {
    .parallax-scrolling {
      width: 100%;
      height: 100vh;
      background: url($bg) no-repeat center fixed;
      background-size: 100% 100%;
    }
    .content {
      height: 2000px;
    }
  }
}
.home-wrapper::-webkit-scrollbar {
  display: none;
}
</style>
