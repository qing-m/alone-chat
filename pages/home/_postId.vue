<template>
  <div>
    postId {{postId}}
  </div>
</template>

<script>
export default {
  computed: {
    postId() {
      return this.$route.params.postId
    }
  },
}
</script>