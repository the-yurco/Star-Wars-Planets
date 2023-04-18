<template>
	<div class="modal">
		<div class="modal-content p-5">
			<div
				class="header-card d-flex justify-content-between align-items-center"
			>
				<h2 class="mt-2">
					{{ planet.name }}
				</h2>
				<div class="close btn rounded-1" @click="handleClose">&times;</div>
			</div>
			<p>"rotation_period": {{ planet.rotation_period }}</p>
			<p>"orbital_period": {{ planet.orbital_period }}</p>
			<p>"diameter": {{ planet.diameter }}</p>
			<p>"climate": {{ planet.climate }}</p>
			<p>"gravity": {{ planet.gravity }}</p>
			<p>"terrain": {{ planet.terrain }}</p>
			<p>"surface_water": {{ planet.terrain }}</p>
			<p>"population": {{ planet.population }}</p>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';
	import { PlanetInfo } from '../api_data';

	export default defineComponent({
		// Planet Modal component with one prop. 'planet' which is an object of type Planet + required is set to true
		name: 'PlanetModal',
		components: {},

		props: {
			planet: {
				type: Object as PropType<PlanetInfo>,
				required: true
			}
		},

		// the setup function is used to define any methods or data props that are directly related to rendering the component
		setup(props, { emit }) {
			// the props parameter contains rhe props passed to the component from its parent
			// the EMIT parameter is an objrct that contains a function that allows you to trigger an event to the parent component

			const handleClose = () => {
				// here is emit function called with one argument of CLOSE
				// itmeans that if you call this func. it will trigger the "close" event and emit it to parent component
				emit('close');
			};
			return {
				handleClose
			};
		}
	});
</script>

<style></style>
