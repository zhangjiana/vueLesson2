<!-- 子组件  -->
<template>
<div class=''>
  我是第二个组件，通过inject 接收父组件的provide 的{{platform}}
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