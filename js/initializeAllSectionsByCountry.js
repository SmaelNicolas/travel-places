import { section_1_start } from "./section1.js";
import { section_2_start } from "./section2.js";
import { section_3_start } from "./section3.js";
import { section_4_Start } from "./section4.js";
import { section_5_start } from "./section5.js";
import { section_6_start } from "./section6.js";

export const initializeAllSections = (infoCountry) => {
	let containerTravelPlaces = document.getElementById(
		"containerTravelPlaces"
	);
	containerTravelPlaces.innerHTML = "";
	infoCountry.map((country) => {
		section_1_start(country.section_1, country.country);
		section_2_start(country.section_2, country.country);
		section_3_start(country.section_3, country.country);
		section_4_Start(country.section_4, country.country);
		section_5_start(country.section_5, country.country);
		section_6_start(country.section_6, country.country);
	});
};
