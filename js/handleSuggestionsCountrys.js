export const handleSuggestionsCountrys = () => {
	let containerSearch = document.getElementById("travelBoxSearchContainer");
	let suggestionListCountries = document.getElementById(
		"travelBoxSearchListCountriesContainer"
	);
	let selectorCountriesList = document.getElementById(
		"travelBoxSearchListCountriesContainer"
	);
	let clearAllCountriesSelected =
		document.getElementById("closeListCountries");

	let selectorCountries = document.getElementById("travelSearchSelector");
	let travelSearchSelector = document.getElementById("travelSearchSelector");

	let arrayCountries = [];
	let dataUniversities = [];

	//LEE EL JSON PARA OBTENER LA LISTA DE PAISES DISPONIBLES
	fetch("../data/countries.json")
		.then((res) => res.json())
		.then((res) => {
			sortInitialUniversities(res);
			dataUniversities = res;
			renderSelectors(res);
		});

	// ORDENA LAS UNIVERSIDADES ALFABETICAMENTE SEGUN EL pais
	const sortInitialUniversities = (value) => {
		value.sort((a, b) => {
			const firstcountryUni = a.name.toUpperCase();
			const secondCountryUni = b.name.toUpperCase();
			if (firstcountryUni < secondCountryUni) {
				return -1;
			}
			if (firstcountryUni > secondCountryUni) {
				return 1;
			}
			return 0;
		});
	};

	// CREA Y RENDERIZA CADA NOMBRE DE PAIS Y LE ASIGNA EL EVENT LISTENER CORRESPONDIENTE.
	const renderSelectors = (arrayCountrys) => {
		arrayCountrys.map((country) => {
			console.log(country);
			let node = document.createElement("div");
			node.id = country.name;
			node.innerHTML = country.name;
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

	//EVENT LISTENER QUE MANEJA LA OPCION DE ELIMINAR TODOS
	clearAllCountriesSelected.addEventListener("click", () => {
		const allSelected = document.querySelectorAll(
			".travelBoxSearchListCountriesItemSelected"
		);
		allSelected.forEach((box) => {
			box.classList.remove("travelBoxSearchListCountriesItemSelected");
		});
		arrayCountries = [];
		travelSearchSelector.innerHTML = "COUNTRY";
	});

	//FUNCION QUE LE ASIGNA EL EVENT LISTENER A CADA PAIS
	//MANEJA LOS CLICKS EN CADA PAIS, PARA AGREGARLE LA CLASE Y HACER EL LLAMADO A LA FUNCION QUE BUSCA LAS UNIVERSIDADES POR PAIS
	const eventListenerCountries = (node) => {
		node.addEventListener("click", () => {
			node.classList.toggle("travelBoxSearchListCountriesItemSelected");
			if (
				node.classList.contains(
					"travelBoxSearchListCountriesItemSelected"
				)
			) {
				arrayCountries.push(node.getAttribute("id"));
				travelSearchSelector.innerHTML = node.getAttribute("id");
			} else {
				arrayCountries = arrayCountries.filter(
					(country) => country !== node.getAttribute("id")
				);
				travelSearchSelector.innerHTML = "COUNTRY";
				if (arrayCountries.length > 0) {
				} else {
					// ACA IRIA CODIGO SI SE QUIERE AGREGAR ALGO CUANDO NO HAYA NINGUN PAIS SELECCIONADO.
				}
			}
		});
	};
};