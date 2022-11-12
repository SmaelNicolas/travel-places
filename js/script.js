import { handleSuggestionsCountrys } from "./handleSuggestionsCountrys.js";
import { initializeAllSections } from "./initializeAllSectionsByCountry.js";
import { section_6_start } from "./section6.js";

handleSuggestionsCountrys();

fetch("../data/countries.json")
	.then((resp) => resp.json())
	.then((res) => initializeAllSections(res));

window.addEventListener("resize", () => {
	let windowWidth = window.innerWidth;
	if (windowWidth >= 920) {
		section_6_start();
	}
	if (windowWidth >= 725 && windowWidth < 920) {
		section_6_start();
	}
	if (windowWidth < 725) {
		section_6_start();
	}
});
