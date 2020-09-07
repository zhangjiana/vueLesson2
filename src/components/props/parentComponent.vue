<template>
  <div>
    <p>父组件： 我有一个值传给子组件 {{name}}</p>
    <child-component :name="name"></child-component>
  </div>
</template>

<script>
import childComponent from './childComponent'
export default {
    components: {childComponent},
  data () {
    return {
        name: '银行卡'
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
