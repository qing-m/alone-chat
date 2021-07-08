<template>
  <div>
    age | {{age}}
  </div>
</template>

<script>
export default {
  name: 'about-age',
  computed: {
    age() {
      return this.$route.name
    }
  }
}
</script>