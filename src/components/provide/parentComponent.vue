<!-- 父组件 -->
<template>
<div class=''>
  <first-child />
  <second-child />
</div>
</template>
<script>
import firstChild from './firstChild'
import secondChild from './secondChild'
export default {
  components: { firstChild, secondChild },
  data() {
    return {
      changes: 100,
      remark: '省着点花'
    };
  },
  // provide() {
  //   return  { platform: this.platform }
  // },
  provide: {
    platform: 'adr'
  },
  methods: {
    platform() {
      return 'ios'
    }
  }
}
</script>
<style lang='scss' scoped>

</style>