<!-- 子组件  -->
<template>
<div class=''>
  我是第一个组件，通过inject 接收父组件的provide 的{{platform}}
  <grand-child />
</div>
</template>

<script>
import grandChild from './grandChild'
export default {
  components: { grandChild },
  data() {
    return {};
  },
  inject: ['platform'],
  methods: {

  }
}
</script>