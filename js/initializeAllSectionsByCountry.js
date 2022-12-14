import { section_1_start } from "./section1.js";
import { section_2_start } from "./section2.js";
import { section_3_start } from "./section3.js";
import { section_4_Start } from "./section4.js";
import { section_5_start } from "./section5.js";
import { section_6_start } from "./section6.js";

export const initializeAllSections = (infoCountry) => {
	let containerStudyAbroadCities = document.getElementById(
		"containerStudyAbroadCities"
	);
	containerStudyAbroadCities.innerHTML = "";
	infoCountry.map((country) => {
		country.section_1.show_section &&
			section_1_start(country.section_1, country.country, country.styles);

		country.section_2.show_section &&
			section_2_start(country.section_2, country.country, country.styles);

		country.section_3.show_section &&
			section_3_start(country.section_3, country.country, country.styles);

		country.section_4.show_section &&
			section_4_Start(country.section_4, country.country, country.styles);

		country.section_5.show_section &&
			section_5_start(country.section_5, country.country, country.styles);

		renderSection_6(country, infoCountry);

		window.addEventListener("resize", () => {
			containerStudyAbroadCities.removeChild(
				containerStudyAbroadCities.lastChild
			);
			renderSection_6(country, infoCountry);
		});
	});
};

const renderSection_6 = (country, infoCountry) => {
	let windowWidth = window.innerWidth;

	if (windowWidth >= 920) {
		section_6_start(
			country.section_6,
			infoCountry[0].country,
			country.styles
		);
	}
	if (windowWidth >= 725 && windowWidth < 920) {
		section_6_start(
			country.section_6,
			infoCountry[0].country,
			country.styles
		);
	}
	if (windowWidth < 725) {
		section_6_start(
			country.section_6,
			infoCountry[0].country,
			country.styles
		);
	}
};
