<template>
	<div class="col-xl-3 col-sm-6 mb-4">
		<div class="card p-3 rounded" @click="handleClick">
			<!--  <h2> and a <p> element to display the name and population of the planet  -->
			<h3>{{ planet.name }}</h3>
			<p>
				Population:
				{{ planet.population }}
			</p>
		</div>
	</div>
	<!-- ! The values of these elements are obtained from the planet prop -->
</template>

<script lang="ts">
	// The script imports defineComponent and PropType from the vue lib. , as well as the PlanetInfo interface from an API_DATA file
	import { defineComponent, PropType } from 'vue';
	import { PlanetInfo } from '../api_data';

	export default defineComponent({
		// component's name
		name: 'PlanetCard',

		// props object contains a PLANET prop
		// PLANET prop is defimed as an object with a PropType set to PlanetInfo + required oprion set to TRUE
		props: {
			planet: {
				type: Object as PropType<PlanetInfo>,
				required: true
			}
		},

		setup(props, { emit }) {
			const handleClick = () => {
				// when this func. is called it will trigger the card-clicked event and EMIT it to the parent component along eith the value of "planet" property from "props" objct
				emit('card-clicked', props.planet);
			};

			return {
				handleClick
			};
		}
	});
</script>

<style></style>
