import { handleSuggestionsCountrys } from "./handleSuggestionsCountrys.js";
import { section_1_start } from "./section1.js";
import { section_2_start } from "./section2.js";
import { section_3_start } from "./section3.js";
import { section_5_start } from "./section5.js";
import { section_6_start } from "./section6.js";

section_1_start();
section_2_start();
section_3_start();
section_5_start();
section_6_start();
handleSuggestionsCountrys();

fetch("../data/countries.json")
	.then((resp) => resp.json())
	.then((res) => console.log(res));

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
