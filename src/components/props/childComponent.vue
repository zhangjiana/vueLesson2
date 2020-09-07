<template>
  <div>
    <p>子组件： 使用了父组件传的 {{name}}</p>
  </div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: ''
		}
	}
}
</script>

<style scoped>

</style>
