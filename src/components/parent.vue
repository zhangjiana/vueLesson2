<template>
  <div>
    <p>父组件 {{name}}</p>
    <child-component :name="name"></child-component>
  </div>
</template>

<script>
import childComponent from './child'
export default {
    components: {childComponent},
  data () {
    return {
        name: '栗子'
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
