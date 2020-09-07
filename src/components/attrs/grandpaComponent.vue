<!-- 爷组件 -->
<template>
<div class=''>
  <parent-component :changes="changes" :remark="remark" />
</div>
</template>

<script>
import parentComponent from './parentComponent'
export default {
  components: { parentComponent },
  data() {
    return {
      changes: 100,
      remark: '省着点花'
    };
  },
  methods: {

  }
}
</script>
<style lang='scss' scoped>

</style>