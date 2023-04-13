<template>
	<h1>STAR WARS PLANETS</h1>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'App',
		components: {}
	});
</script>

<style lang="scss">
	// just basic setup for our app

	body {
		$bg-color: #0d151f;
		$txt-color: #fff;
		$font-family: sans-serif;

		color: $txt-color;
		background: $bg-color;
		font-family: $font-family;
		text-align: center;
	}
</style>
