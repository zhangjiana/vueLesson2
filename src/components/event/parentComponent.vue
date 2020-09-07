<template>
  <div>
    <p>父组件： 本来就有的值 {{name}}</p>
    <p v-if="childMessage">子组件传递过来的值： {{childMessage}}</p>
    <child-component :name="name" @call="receiveCall"></child-component>
  </div>
</template>

<script>
import childComponent from './childComponent'
export default {
    components: {childComponent},
  data () {
    return {
        name: '银行卡',
        childMessage: ''
    }
  },
  methods: {
    receiveCall(r) {
      this.childMessage = r
    }
  }
}
</script>

<style scoped>

</style>
