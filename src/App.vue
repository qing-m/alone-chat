<template>
  <div id="app" @click="handleClickSocialistValues">
    <vue-canvas-nest :config="config"></vue-canvas-nest>
    <router-view />
  </div>
</template>

<script>
import { socialistValues } from "@/utils";
import vueCanvasNest from "vue-canvas-nest";
export default {
  name: "app",
  components: { vueCanvasNest },
  data() {
    return {
      config: {
        color: "skyblue",
        opacity: 1
      }
    };
  },
  methods: {
    handleClickSocialistValues(e) {
      socialistValues(e);
    }
  }
};
</script>
<style lang="scss">
.text-popup {
  animation: textPopup 1s;
  user-select: none;
  white-space: nowrap;
  position: absolute;
  z-index: 99;
}
@keyframes textPopup {
  0%,
  100% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  100% {
    transform: translateY(-50px);
  }
}
</style>
