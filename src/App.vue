<template>
	<div id="app">
		<div class="container">
			<h1 class="header-main-txt text-center my-5">
				Star Wars <span>Planets</span>
			</h1>

			<!--? A text input element that allows users to search for planets -->
			<!--! v-model ==> it is directive used to bind the searchTerm to the value of the search input ele. -->
			<div class="input-group mb-3">
				<div class="input-group-prepen">
					<span
						class="input-group-text rounded-0 rounded-start"
						id="basic-addon1"
					>
						<img src="./assets/colorized-icon-logo.png" alt="" />
					</span>
				</div>
				<input
					type="text"
					v-model="searchTerm"
					class="form-control text-white"
					placeholder="Planet's name"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	// IMPORTS
	import { defineComponent, ref } from 'vue';
	import PlanetCardComponent from './components/PlanetCardComponent.vue';
	import { fetchPlanets, PlanetInfo } from './api_data';

	export default defineComponent({
		name: 'App',

		components: {},

		// A SETUP function that defines the reactive data and functions that are used in the component
		setup() {
			const searchTerm = ref(''); // property that sores the user's search term
			const planets = ref<PlanetInfo[]>([]); // property that sores the list of planets fetched from API

			return {
				searchTerm,
				planets
			};
		}
	});
</script>

<style></style>
