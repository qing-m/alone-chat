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
$bg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600752451394&di=2b55642bcae2446fc06a3c547815026f&imgtype=0&src=http%3A%2F%2Fp2-q.mafengwo.net%2Fs11%2FM00%2FB6%2F7B%2FwKgBEFt_tvGAFvHxAAFIRKQnOBw21.jpeg";
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
