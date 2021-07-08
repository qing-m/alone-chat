<template>
  <div>
    name | {{name}}
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$route.name
    }
  }
}
</script>