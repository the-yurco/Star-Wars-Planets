<template>
	<div class="modal" @click="handleClose">
		<div class="modal-content p-4">
			<div
				class="header-card d-flex justify-content-between align-items-center"
			>
				<h2 class="mb-5">
					{{ planet.name }}
				</h2>
			</div>
			<div>
				<div class="row">
					<p class="col">
						Climate: <span>{{ planet.climate }}</span>
					</p>
					<p class="col">
						Population: <span>{{ planet.population }}</span>
					</p>
				</div>
				<div class="row">
					<p class="col">
						Gravity: <span>{{ planet.gravity }}</span>
					</p>
					<p class="col">
						Surface water:
						<span>
							{{ planet.surface_water }}
						</span>
					</p>
				</div>
				<div class="row">
					<p class="col">
						Terrain: <span>{{ planet.terrain }}</span>
					</p>
				</div>
				<div class="row">
					<div class="col-6">
						<p class="close btn rounded-1 mt-5" @click="handleClose">Close</p>
					</div>
				</div>
			</div>
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
