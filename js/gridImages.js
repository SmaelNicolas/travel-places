export const initalizeEventListeners = () => {
	let cardContainer1 = document.getElementById("gridImageContainer1");
	let cardContainer2 = document.getElementById("gridImageContainer2");
	let cardContainer3 = document.getElementById("gridImageContainer3");
	let cardContainer4 = document.getElementById("gridImageContainer4");
	let cardContainer5 = document.getElementById("gridImageContainer5");
	let cardContainer6 = document.getElementById("gridImageContainer6");

	let cardTitle1 = document.getElementById(
		"containerGridImagesMainRowTitle1"
	);
	let cardSubtitle1 = document.getElementById(
		"containerGridImagesMainRowSubTitle1"
	);
	let cardTitle2 = document.getElementById(
		"containerGridImagesMainRowTitle2"
	);
	let cardSubtitle2 = document.getElementById(
		"containerGridImagesMainRowSubTitle2"
	);
	let cardTitle3 = document.getElementById(
		"containerGridImagesMainRowTitle3"
	);
	let cardSubtitle3 = document.getElementById(
		"containerGridImagesMainRowSubTitle3"
	);
	let cardTitle4 = document.getElementById(
		"containerGridImagesMainRowTitle4"
	);
	let cardSubtitle4 = document.getElementById(
		"containerGridImagesMainRowSubTitle4"
	);
	let cardTitle5 = document.getElementById(
		"containerGridImagesMainRowTitle5"
	);
	let cardSubtitle5 = document.getElementById(
		"containerGridImagesMainRowSubTitle5"
	);
	let cardTitle6 = document.getElementById(
		"containerGridImagesMainRowTitle6"
	);
	let cardSubtitle6 = document.getElementById(
		"containerGridImagesMainRowSubTitle6"
	);

	cardContainer1.addEventListener("mouseenter", () => {
		cardTitle1.classList.toggle("addColorPurple");
		cardSubtitle1.classList.toggle("showDescriptionGridImage");
	});
	cardContainer1.addEventListener("mouseleave", () => {
		cardTitle1.classList.toggle("addColorPurple");
		cardSubtitle1.classList.toggle("showDescriptionGridImage");
	});
	cardContainer2.addEventListener("mouseenter", () => {
		cardTitle2.classList.toggle("addColorPurple");
		cardSubtitle2.classList.toggle("showDescriptionGridImage");
	});
	cardContainer2.addEventListener("mouseleave", () => {
		cardTitle2.classList.toggle("addColorPurple");
		cardSubtitle2.classList.toggle("showDescriptionGridImage");
	});
	cardContainer3.addEventListener("mouseenter", () => {
		cardTitle3.classList.toggle("addColorPurple");
		cardSubtitle3.classList.toggle("showDescriptionGridImage");
	});
	cardContainer3.addEventListener("mouseleave", () => {
		cardTitle3.classList.toggle("addColorPurple");
		cardSubtitle3.classList.toggle("showDescriptionGridImage");
	});
	cardContainer4.addEventListener("mouseenter", () => {
		cardTitle4.classList.toggle("addColorPurple");
		cardSubtitle4.classList.toggle("showDescriptionGridImage");
	});
	cardContainer4.addEventListener("mouseleave", () => {
		cardTitle4.classList.toggle("addColorPurple");
		cardSubtitle4.classList.toggle("showDescriptionGridImage");
	});
	cardContainer5.addEventListener("mouseenter", () => {
		cardTitle5.classList.toggle("addColorPurple");
		cardSubtitle5.classList.toggle("showDescriptionGridImage");
	});
	cardContainer5.addEventListener("mouseleave", () => {
		cardTitle5.classList.toggle("addColorPurple");
		cardSubtitle5.classList.toggle("showDescriptionGridImage");
	});
	cardContainer6.addEventListener("mouseenter", () => {
		cardTitle6.classList.toggle("addColorPurple");
		cardSubtitle6.classList.toggle("showDescriptionGridImage");
	});
	cardContainer6.addEventListener("mouseleave", () => {
		cardTitle6.classList.toggle("addColorPurple");
		cardSubtitle6.classList.toggle("showDescriptionGridImage");
	});
};
