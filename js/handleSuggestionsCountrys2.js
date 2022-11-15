import { initializeAllSections } from "./initializeAllSectionsByCountry.js";

export const handleSuggestionsCountrys2 = () => {
	let containerSearch = document.getElementById(
		"boxSearchCointainerStudyAbroad"
	);
	let suggestionListCountries = document.getElementById(
		"boxSearchListCountriesContainerStudyAbroad"
	);
	let selectorCountriesList = document.getElementById(
		"boxSearchListCountriesContainerStudyAbroad"
	);

	let selectorCountries = document.getElementById(
		"searchSelectorStudyAbroad"
	);
	let searchSelectorStudyAbroad = document.getElementById(
		"searchSelectorStudyAbroad"
	);

	let dataCountries = [];

	//LEE EL JSON PARA OBTENER LA LISTA DE PAISES DISPONIBLES
	fetch("../data/countries.json")
		.then((res) => res.json())
		.then((res) => {
			sortInitialUniversities(res);
			renderSelectors(res);
		});

	// ORDENA LOS PAISES ALFABETICAMENTE
	const sortInitialUniversities = async (value) => {
		await value.sort((a, b) => {
			const firstcountryUni = a.country.toUpperCase();
			const secondCountryUni = b.country.toUpperCase();
			if (firstcountryUni < secondCountryUni) {
				return -1;
			}
			if (firstcountryUni > secondCountryUni) {
				return 1;
			}
			return 0;
		});
		dataCountries = value;
	};

	// CREA Y RENDERIZA CADA NOMBRE DE PAIS Y LE ASIGNA EL EVENT LISTENER CORRESPONDIENTE.
	const renderSelectors = (arrayCountrys) => {
		arrayCountrys.map((country) => {
			let node = document.createElement("div");
			node.id = country.country;
			node.innerHTML = country.country;
			node.classList.add("travelBoxSearchListCountriesItem");
			suggestionListCountries.appendChild(node);
			eventListenerCountries(node);
		});
	};

	//EVENT LISTENER QUE MANEJA LOS CLICKS EN EL SELECTOR DE COUNTRY
	selectorCountries.addEventListener("click", () => {
		containerSearch.classList.toggle("getBiggerCountries");
		selectorCountriesList.classList.toggle(
			"ListCountriesContainerHideShow"
		);
	});

	//FUNCION QUE LE ASIGNA EL EVENT LISTENER A CADA PAIS
	//MANEJA LOS CLICKS EN CADA PAIS, PARA AGREGARLE LA CLASE Y HACER EL LLAMADO A LA FUNCION QUE RENDERIZA LA INFO DEL PAIS
	const eventListenerCountries = (node) => {
		node.addEventListener("click", () => {
			let hasClass = node.classList.contains(
				"travelBoxSearchListCountriesItemSelected"
			);
			clearSelectedInList();
			let infoCountry = [];
			if (hasClass) {
				searchSelectorStudyAbroad.innerHTML = "COUNTRY";
			} else {
				node.classList.toggle(
					"travelBoxSearchListCountriesItemSelected"
				);
				searchSelectorStudyAbroad.innerHTML = node.getAttribute("id");
				infoCountry = dataCountries.filter(
					(country) =>
						country.country.toLowerCase() ===
						searchSelectorStudyAbroad.innerHTML
				);
				initializeAllSections(infoCountry);
			}
		});
	};

	const clearSelectedInList = () => {
		const allSelected = document.querySelectorAll(
			".travelBoxSearchListCountriesItemSelected"
		);
		allSelected.forEach((box) => {
			box.classList.remove("travelBoxSearchListCountriesItemSelected");
		});
	};
};
