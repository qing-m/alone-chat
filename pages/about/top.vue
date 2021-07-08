<template>
  <div>
    top | {{top}}
  </div>
</template>

<script>
export default {
  computed: {
    top() {
      return this.$route.name
    }
  }
}
</script>