<template>
  <div class="home" v-bing:title="WelcomeMessage" @click="handleClickChangeMsg">
    {{ WelcomeMessage }}
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters({
      WelcomeMessage: "Home/WelcomeMessage"
    })
  },
  methods: {
    ...mapMutations({
      SET_WELCOME_MESSAGE: "Home/SET_WELCOME_MESSAGE"
    }),
    handleClickChangeMsg() {
      this.SET_WELCOME_MESSAGE("你好,世界");
    }
  }
};
</script>

<style lang="scss">
.home {
  cursor: default;
  user-select: none;
}
.home:hover {
  cursor: pointer;
}
</style>
