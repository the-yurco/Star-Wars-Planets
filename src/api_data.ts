//? Planet Interface:
export interface PlanetInfo {
	name: string;
	rotation_period: string;
	orbital_period: string;
	diameter: string;
	climate: string;
	gravity: string;
	terrain: string;
	surface_water: string;
	population: string;
	residents: string[];
}

//? interface to match an object of properties in Planet int. make into array
interface PlanetResponse {
	results: PlanetInfo[];
}

// //! Constant that holds our base URL
const API_URL = 'https://swapi.py4e.com/api';

//! FETCH function => fetchPlanets
// This function is an asynchronous function that takes an optional searchTerm parameter, which is a string
// The function returns a Promise of an array of objects that match the PlanetInfo interface
export async function fetchPlanets(searchTerm: string): Promise<PlanetInfo[]> {
	//---------------------------------------------------------------------

	// FETCH function for making request to SWAPI api
	// SEARCH-TERM = search variable for our planets
	const response = await fetch(`${API_URL}/planets/?search=${searchTerm}`);

	// The RESPONSE from the API is converted to JSON
	// DATA => resulting JSON
	const data: PlanetResponse = await response.json();

	// DATA RESULTS => returned from the function
	// return data.results;
	return data.results;
}
