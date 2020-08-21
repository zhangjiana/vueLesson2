<template>
  <div>
      <p>子组件的值：{{name}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    name: {
        type: String
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
