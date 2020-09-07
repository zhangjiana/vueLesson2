<!-- 孙子组件  -->
<template>
<div class=''>
  我是孙子组件，通过inject 接收父组件的的父组件provide 的{{platform}}
</div>
</template>

<script>

export default {
  components: {},
  data() {
    return {};
  },
  inject: ['platform'],
  methods: {

  }
}
</script>