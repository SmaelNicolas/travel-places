export const section_2_start = () => {
	let cardContainer1 = document.getElementById("gridImageContainer1");
	let cardContainer2 = document.getElementById("gridImageContainer2");
	let cardContainer3 = document.getElementById("gridImageContainer3");
	let cardContainer4 = document.getElementById("gridImageContainer4");
	let cardContainer5 = document.getElementById("gridImageContainer5");
	let cardContainer6 = document.getElementById("gridImageContainer6");

	let cardTitle1 = document.getElementById("containerSection2MainRowTitle1");
	let cardSubtitle1 = document.getElementById(
		"containerSection2MainRowSubTitle1"
	);
	let cardTitle2 = document.getElementById("containerSection2MainRowTitle2");
	let cardSubtitle2 = document.getElementById(
		"containerSection2MainRowSubTitle2"
	);
	let cardTitle3 = document.getElementById("containerSection2MainRowTitle3");
	let cardSubtitle3 = document.getElementById(
		"containerSection2MainRowSubTitle3"
	);
	let cardTitle4 = document.getElementById("containerSection2MainRowTitle4");
	let cardSubtitle4 = document.getElementById(
		"containerSection2MainRowSubTitle4"
	);
	let cardTitle5 = document.getElementById("containerSection2MainRowTitle5");
	let cardSubtitle5 = document.getElementById(
		"containerSection2MainRowSubTitle5"
	);
	let cardTitle6 = document.getElementById("containerSection2MainRowTitle6");
	let cardSubtitle6 = document.getElementById(
		"containerSection2MainRowSubTitle6"
	);

	cardContainer1.addEventListener("mouseenter", () => {
		cardTitle1.classList.toggle("addColorPurpleStudyAbroad");
		cardSubtitle1.classList.toggle("showDescriptionSection2StudyAbroad");
	});
	cardContainer1.addEventListener("mouseleave", () => {
		cardTitle1.classList.toggle("addColorPurpleStudyAbroad");
		cardSubtitle1.classList.toggle("showDescriptionSection2StudyAbroad");
	});
	cardContainer2.addEventListener("mouseenter", () => {
		cardTitle2.classList.toggle("addColorPurpleStudyAbroad");
		cardSubtitle2.classList.toggle("showDescriptionSection2StudyAbroad");
	});
	cardContainer2.addEventListener("mouseleave", () => {
		cardTitle2.classList.toggle("addColorPurpleStudyAbroad");
		cardSubtitle2.classList.toggle("showDescriptionSection2StudyAbroad");
	});
	cardContainer3.addEventListener("mouseenter", () => {
		cardTitle3.classList.toggle("addColorPurpleStudyAbroad");
		cardSubtitle3.classList.toggle("showDescriptionSection2StudyAbroad");
	});
	cardContainer3.addEventListener("mouseleave", () => {
		cardTitle3.classList.toggle("addColorPurpleStudyAbroad");
		cardSubtitle3.classList.toggle("showDescriptionSection2StudyAbroad");
	});
	cardContainer4.addEventListener("mouseenter", () => {
		cardTitle4.classList.toggle("addColorPurpleStudyAbroad");
		cardSubtitle4.classList.toggle("showDescriptionSection2StudyAbroad");
	});
	cardContainer4.addEventListener("mouseleave", () => {
		cardTitle4.classList.toggle("addColorPurpleStudyAbroad");
		cardSubtitle4.classList.toggle("showDescriptionSection2StudyAbroad");
	});
	cardContainer5.addEventListener("mouseenter", () => {
		cardTitle5.classList.toggle("addColorPurpleStudyAbroad");
		cardSubtitle5.classList.toggle("showDescriptionSection2StudyAbroad");
	});
	cardContainer5.addEventListener("mouseleave", () => {
		cardTitle5.classList.toggle("addColorPurpleStudyAbroad");
		cardSubtitle5.classList.toggle("showDescriptionSection2StudyAbroad");
	});
	cardContainer6.addEventListener("mouseenter", () => {
		cardTitle6.classList.toggle("addColorPurpleStudyAbroad");
		cardSubtitle6.classList.toggle("showDescriptionSection2StudyAbroad");
	});
	cardContainer6.addEventListener("mouseleave", () => {
		cardTitle6.classList.toggle("addColorPurpleStudyAbroad");
		cardSubtitle6.classList.toggle("showDescriptionSection2StudyAbroad");
	});
};
