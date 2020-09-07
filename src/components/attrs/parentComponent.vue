<!-- 父组件 -->
<template>
<div class=''>
  <child-component v-bind="$attrs" v-on="$listeners"></child-component>
</div>
</template>
<script>
import childComponent from './childComponent'
export default {
  components: { childComponent },
  data() {
    return {

    };
  },
  methods: {}
}
</script>