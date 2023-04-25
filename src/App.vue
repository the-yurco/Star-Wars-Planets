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
						<img
							src="./assets/colorized-icon-logo.png"
							alt=""
							width="35"
							height="100"
						/>
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
						class="alert bg-danger text-black d-flex align-items-center flex-row gap-3"
						role="alert"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
							<path
								d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
							/></svg
						>No Planets found
					</div>
				</div>

				<div v-else-if="regex" class="text-white">
					<div
						class="alert bg-danger text-black d-flex align-items-center flex-row gap-3"
						role="alert"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
							<path
								d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
							/></svg
						>Invalid search term. Please use only letter and hyphens.
					</div>
				</div>

				<!--? A list of planet cards that are rendered for each planet found in the API  -->
				<div v-else class="row card-container">
					<PlanetCardComponent
						v-for="planet in planets"
						:key="planet.name"
						:planet="planet"
						@card-clicked="handleCardClicked"
					/>
				</div>
				<PlanetModalComponent
					v-if="selectedPlanet"
					:planet="selectedPlanet"
					@close="handleCloseDetails"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	// IMPORTS
	import { defineComponent, onMounted, ref } from 'vue';
	import PlanetCardComponent from './components/PlanetCardComponent.vue';
	import PlanetModalComponent from './components/PlanetModalComponent.vue';
	import { fetchPlanets, PlanetInfo } from './api_data';

	export default defineComponent({
		name: 'App',

		components: {
			PlanetCardComponent,
			PlanetModalComponent
		},

		// A SETUP function that defines the reactive data and functions that are used in the component
		setup() {
			const searchTerm = ref(''); // property that sores the user's search term
			const planets = ref<PlanetInfo[]>([]); // property that soTres the list of planets fetched from API
			const isLoading = ref(); // property that stores if the app is currently fetching data from API
			const regex = ref();

			const selectedPlanet = ref<PlanetInfo | null>(null); // stores the selected planet for displaying details

			// const fetchPlanetsOnLoad = async () => {
			// 	const allPlanets = await fetchPlanets('');
			// 	const randomStartIndex = Math.floor(
			// 		Math.random() * (allPlanets.length - 1)
			// 	);
			// 	const randomPlanets = allPlanets.slice(
			// 		randomStartIndex,
			// 		randomStartIndex + 10
			// 	);
			// 	planets.value = randomPlanets;
			// };

			// An zsync function that is called when user types in the search input
			// it fetches the list of planets that match the seaerxh term and updates the planets property
			const handleSearchInput = async () => {
				isLoading.value = true;
				const regexValidation = /^[a-zA-Z\s-]*$/;
				if (!regexValidation.test(searchTerm.value)) {
					regex.value = true;
					isLoading.value = false;
					return;
				}
				const filteredPlanets = await fetchPlanets('');
				planets.value = filteredPlanets.filter((planet) =>
					planet.name.toLowerCase().startsWith(searchTerm.value.toLowerCase())
				);
				console.log(fetchPlanets(''));

				regex.value = false;
				isLoading.value = false;
			};

			// call fetchPlanetsOnLoad when the component is mounted:
			onMounted(handleSearchInput);

			// this func. is called when the user closes the modal card
			const handleCloseDetails = () => {
				selectedPlanet.value = null;
			};

			// this func. is called when the user clicks on a planet card
			const handleCardClicked = (planet: PlanetInfo) => {
				selectedPlanet.value = planet;
			};

			return {
				regex,
				searchTerm,
				planets,
				isLoading,
				selectedPlanet,
				handleSearchInput,
				handleCloseDetails,
				handleCardClicked
			};
		}
	});
</script>

<style></style>
