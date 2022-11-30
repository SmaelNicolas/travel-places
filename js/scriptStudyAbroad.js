// import { handleSuggestionsCountrys } from "./handleSuggestionsCountrys.js";
import { firstRenderCountry } from "./handleDefaultCountry.js";
import { handleSuggestionsCountrys } from "./handleSuggestionsCountrys.js";
import { initializeAllSections } from "./initializeAllSectionsByCountry.js";

//LEE EL JSON PARA OBTENER LA LISTA DE PAISES DISPONIBLES
fetch("../data/countriesStudyAbroad.json")
	.then((res) => res.json())
	.then((res) => {
		initializeAllSections(
			res.filter(
				(country) =>
					country.country.toLowerCase() ===
					firstRenderCountry.toLowerCase()
			)
		);
	});
handleSuggestionsCountrys();
