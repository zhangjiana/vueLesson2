<template>
  <div>
    <p>子组件： 使用了父组件传的 {{name}}</p>
    <button @click="sendMessage">向父组件传值</button>
  </div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: ''
		}
	},
	methods: {
		sendMessage() {
			this.$emit('call', '考试考了100分')
		}
	}
}
</script>

<style scoped>

</style>
