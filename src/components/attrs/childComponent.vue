<!-- 子组件 -->
<template>
<div class=''>
  子组件的接收来自爷组件的值：
  <p v-if="changes">零花钱：{{changes}}</p>
  <p v-if="remark">爷爷交待：{{remark}}</p>
</div>
</template>

<script>

export default {
  props: {
    changes: String,
    remark: String
  },
  data() {
    return {

    };
  },
  methods: {

  }
}
</script>