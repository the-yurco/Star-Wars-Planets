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
					@input="handleSearchInput"
					placeholder="Planet's name"
				/>
			</div>
			<div class="wrapper mt-5">
				<!--? A loading message that is displayed when the application is fetching data from the API  -->
				<div v-if="isLoading">
					<button class="btn btn-dark text-center" type="button" disabled>
						<span
							class="spinner-border spinner-border-sm"
							role="status"
							aria-hidden="true"
						></span>
						<!-- <span class="visually-hidden text-white">Loading...</span> -->
					</button>
				</div>

				<!--? A message that is displayed when no planets are found  -->
				<!--! v-else ==> it is a directive used to print msg when no planets were found -->
				<div v-else-if="planets.length === 0" class="text-white">
					<div
						class="alert bg-danger text-black d-flex align-items-center w-25"
						role="alert"
					>
						<div>No Planets found</div>
					</div>
				</div>

				<!--? A list of planet cards that are rendered for each planet found in the API  -->
				<div v-else class="row">
					<PlanetCardComponent
						v-for="planet in planets"
						:key="planet.name"
						:planet="planet"
					/>
				</div>
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

		components: {
			PlanetCardComponent
		},

		// A SETUP function that defines the reactive data and functions that are used in the component
		setup() {
			const searchTerm = ref(''); // property that sores the user's search term
			const planets = ref<PlanetInfo[]>([]); // property that sores the list of planets fetched from API
			const isLoading = ref(false); // property that stores if the app is currently fetching data from API

			// An zsync function that is called when user types in the search input
			// it fetches the list of planets that match the seaerxh term and updates the planets property
			const handleSearchInput = async () => {
				isLoading.value = true;
				planets.value = await fetchPlanets(searchTerm.value);
				isLoading.value = false;
			};

			return {
				searchTerm,
				planets,
				isLoading,
				handleSearchInput
			};
		}
	});
</script>

<style></style>
