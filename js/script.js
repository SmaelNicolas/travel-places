import { section_1_start } from "./section1.js";
import { section_2_start } from "./section2.js";
import { section_3_start } from "./section3.js";
import { section_6_start } from "./section6.js";

section_6_start();
section_3_start();
section_2_start();
section_1_start();

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
