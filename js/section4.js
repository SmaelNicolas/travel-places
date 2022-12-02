export const section_4_Start = (section4Info, country, styles) => {
	let containerStudyAbroadCities = document.getElementById(
		"containerStudyAbroadCities"
	);
	addSection_4ToContainer(
		containerStudyAbroadCities,
		section4Info,
		country,
		styles
	);
};
const addSection_4ToContainer = (
	containerStudyAbroadCities,
	section4Info,
	country,
	styles
) => {
	let node = document.createElement("section");
	node.classList.add("containerSection4");
	node.innerHTML = `<h2 class="section4Title ${styles.section_4_title}">
					Prepare to
					<span class="section4TitleSpan ${styles.section_4_span_title} ">study abroad</span>
				</h2>
				<div id="containerSection4Info" class="containerSection4Info">
					<img
						class="section4InfoImagePlane"
						src="./assets/icons/plane.png"
						alt="" />
				</div>`;
	containerStudyAbroadCities.appendChild(node);
	section4Info.titles.map((title, index) => {
		if (index === 0) {
			renderSection_4Step_1(
				title,
				section4Info.texts,
				index,
				country,
				styles
			);
		}
		if (index === 1) {
			renderSection_4Step_2(title, section4Info.texts, index, styles);
		}
		if (index === 2) {
			renderSection_4Step_3(
				title,
				section4Info.cities,
				index,
				country,
				styles
			);
		}
		if (index === 3) {
			renderSection_4Step_4(title, section4Info.texts, index, styles);
		}
		if (index === 4) {
			renderSection_4Step_5(
				title,
				section4Info.texts,
				index,
				country,
				styles
			);
		}
		if (index === 5) {
			renderSection_4Step_6(
				title,
				section4Info.texts,
				index,
				country,
				styles
			);
		}
		if (index === 6) {
			renderSection_4Step_7(
				title,
				section4Info.texts,
				index,
				country,
				styles
			);
		}
	});
};

const renderSection_4Step_1 = (title, text, value, country, style) => {
	let node = document.createElement("div");
	node.classList.add("section4Info");
	node.innerHTML = `
						<div class="section4InfoNumber">
							<div class="section4InfoNumberText  
							${style.section_4_title_step_1_number}">${value + 1}</div>
							<h3 class="section4InfoNumberTitle ${
								style.section_4_title_step_1_title
							}">${title}</h3>
						</div>
						<div class="section4InfoText section4InfoOne">
							<div class="section4InfoOneImageCountryContainer">
								<img
									class="section4InfoOneImageCountry"
									src="../data/country/${country}/section4/step1/1.webp"
									alt="countryimage" />
								<img
									class="section4InfoOneImageFlag"
									src="../data/country/${country}/section4/step1/flag.webp"
									alt="${country}Flag" />
							</div>
							<div class="section4InfoOneRibbonContainer">
								<div class="section4InfoOneRibbonName ${
									style.section_4_title_step_1_title_name_country
								}">
									${country}
								</div>
								<div id="section4InfoOneRibbonTextShort" class="section4InfoOneRibbonText ${
									style.section_4_title_step_1_paragraph
								}">
									${reduceString(text[value])}
								</div>
								<i id="section4InfoOneRibbonArrowDown" class="fa-solid fa-chevron-down  ${
									style.section_4_title_step_1_paragraph
								} section4Arrow "></i>
								<div id="section4InfoOneRibbonTextLong" class="section4InfoOneRibbonText ${
									style.section_4_title_step_1_paragraph
								} section4HideTextArrow">
									${text[value]}
								</div>
								<i id="section4InfoOneRibbonArrowUp" class="fa-solid fa-chevron-up  ${
									style.section_4_title_step_1_paragraph
								} section4Arrow section4HideTextArrow "></i>

							</div>
						</div>`;
	document.getElementById("containerSection4Info").appendChild(node);
	document
		.getElementById("section4InfoOneRibbonArrowDown")
		.addEventListener("click", () => {
			document
				.getElementById("section4InfoOneRibbonArrowDown")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoOneRibbonTextShort")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoOneRibbonTextLong")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoOneRibbonArrowUp")
				.classList.remove("section4HideTextArrow");
		});
	document
		.getElementById("section4InfoOneRibbonArrowUp")
		.addEventListener("click", () => {
			document
				.getElementById("section4InfoOneRibbonArrowDown")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoOneRibbonTextShort")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoOneRibbonTextLong")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoOneRibbonArrowUp")
				.classList.add("section4HideTextArrow");
		});
};
const renderSection_4Step_2 = (title, text, value, style) => {
	let node = document.createElement("div");
	node.classList.add("section4Info");
	node.innerHTML = `<div class="section4InfoNumber">
							<div class="section4InfoNumberText ${style.section_4_title_step_2_number}">${
		value + 1
	}</div>
							<h3 class="section4InfoNumberTitle ${
								style.section_4_title_step_2_title
							}">${title}</h3>
						</div>
						<div class="section4InfoText section4InfoTwo">
							<div
								id="section4InfoTwoTextShort"
								class="section4InfoTextDescription section4InfoTwoText ${
									style.section_4_title_step_2_paragraph
								}">
								${reduceString(text[value])}
							</div>
							<i id="section4InfoTwoTextArrowDown" class="fa-solid fa-chevron-down  ${
								style.section_4_title_step_2_paragraph
							} section4Arrow "></i>
							<div
								id="section4InfoTwoTextLong"
								class="section4InfoTextDescription section4InfoTwoText ${
									style.section_4_title_step_2_paragraph
								} section4HideTextArrow">
								${text[value]}
							</div>
							<i id="section4InfoTwoTextArrowUp" class="fa-solid fa-chevron-up  ${
								style.section_4_title_step_2_paragraph
							} section4Arrow section4HideTextArrow "></i>
						</div>`;
	document.getElementById("containerSection4Info").appendChild(node);
	document
		.getElementById("section4InfoTwoTextArrowDown")
		.addEventListener("click", () => {
			document
				.getElementById("section4InfoTwoTextArrowDown")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoTwoTextShort")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoTwoTextLong")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoTwoTextArrowUp")
				.classList.remove("section4HideTextArrow");
		});
	document
		.getElementById("section4InfoTwoTextArrowUp")
		.addEventListener("click", () => {
			document
				.getElementById("section4InfoTwoTextArrowDown")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoTwoTextShort")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoTwoTextLong")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoTwoTextArrowUp")
				.classList.add("section4HideTextArrow");
		});
};
const renderSection_4Step_3 = (title, cities, value, country, style) => {
	let node = document.createElement("div");
	node.classList.add("section4Info");
	node.innerHTML = `<div class="section4InfoNumber">
							<div class="section4InfoNumberText ${style.section_4_title_step_3_number}">${
		value + 1
	}</div>
							<h3 class="section4InfoNumberTitle ${
								style.section_4_title_step_3_title
							}">${title}</h3>
						</div>
						<div class="section4InfoText section4InfoThree">
							<div
								class="section4InfoTextDescription section4InfoThreeCardsContainer">
								${cities.map((city, index) => {
									return `	<div class='section4InfoThreeCards'>
											<img
												class='section4InfoThreeCardsImage'
												src="../data/country/${country}/section4/step3/${index + 1}.webp"
												alt='${city}Image'
											/>
											<div class='section4InfoThreeCardsCity ${
												style.section_4_title_step_3_city_name
											}'>
												${city}
											</div>
										</div>`;
								})}
							</div>
						</div>`;
	document.getElementById("containerSection4Info").appendChild(node);
};
const renderSection_4Step_4 = (title, text, value, style) => {
	let node = document.createElement("div");
	node.classList.add("section4Info");
	node.innerHTML = `<div class="section4InfoNumber">
							<div class="section4InfoNumberText ${style.section_4_title_step_4_number}">${
		value + 1
	}</div>
							<h3 class="section4InfoNumberTitle ${style.section_4_title_step_4_title}">
								${title}
							</h3>
						</div>
						<div class="section4InfoText section4InfoFour">
							<div
								id="section4InfoFourTextShort"
								class="section4InfoTextDescription section4InfoFourText ${
									style.section_4_title_step_4_paragraph
								}">
								${reduceString(text[value])}
							</div>
							<i id="section4InfoFourTextArrowDown" class="fa-solid fa-chevron-down  ${
								style.section_4_title_step_4_paragraph
							} section4Arrow "></i>
							<div
								id="section4InfoFourTextLong"
								class="section4InfoTextDescription section4InfoFourText ${
									style.section_4_title_step_4_paragraph
								} section4HideTextArrow">
								${text[value]}
							</div>
							<i id="section4InfoFourTextArrowUp" class="fa-solid fa-chevron-up  ${
								style.section_4_title_step_4_paragraph
							} section4Arrow section4HideTextArrow "></i>
						</div>`;
	document.getElementById("containerSection4Info").appendChild(node);
	document
		.getElementById("section4InfoFourTextArrowDown")
		.addEventListener("click", () => {
			document
				.getElementById("section4InfoFourTextArrowDown")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoFourTextShort")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoFourTextLong")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoFourTextArrowUp")
				.classList.remove("section4HideTextArrow");
		});
	document
		.getElementById("section4InfoFourTextArrowUp")
		.addEventListener("click", () => {
			document
				.getElementById("section4InfoFourTextArrowDown")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoFourTextShort")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoFourTextLong")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoFourTextArrowUp")
				.classList.add("section4HideTextArrow");
		});
};
const renderSection_4Step_5 = (title, text, value, country, style) => {
	let node = document.createElement("div");
	node.classList.add("section4Info");
	node.innerHTML = `<div class="section4InfoNumber">
							<div class="section4InfoNumberText ${style.section_4_title_step_5_number}">${
		value + 1
	}</div>
							<h3 class="section4InfoNumberTitle ${
								style.section_4_title_step_5_title
							}">${title}</h3>
						</div>
						<div class="section4InfoText section4InfoFive">
							<img
								src="../data/country/${country}/section4/step5/tickets.png"
								alt="imgTickets" />
							<div
								id="section4InfoFiveTextShort"
								class="section4InfoTextDescription section4InfoFiveText ${
									style.section_4_title_step_5_paragraph
								}">
								${reduceString(text[value])}
								<i id="section4InfoFiveTextArrowDown" class="fa-solid fa-chevron-down  ${
									style.section_4_title_step_5_paragraph
								} section4Arrow "></i>
							</div>
							<div
								id="section4InfoFiveTextLong"
								class="section4InfoTextDescription section4InfoFiveText ${
									style.section_4_title_step_5_paragraph
								} section4HideTextArrow">
								${text[value]}
								<i id="section4InfoFiveTextArrowUp" class="fa-solid fa-chevron-up  ${
									style.section_4_title_step_5_paragraph
								} section4Arrow section4HideTextArrow "></i>
							</div>
							
						</div>`;
	document.getElementById("containerSection4Info").appendChild(node);
	document
		.getElementById("section4InfoFiveTextArrowDown")
		.addEventListener("click", () => {
			document
				.getElementById("section4InfoFiveTextArrowDown")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoFiveTextShort")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoFiveTextLong")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoFiveTextArrowUp")
				.classList.remove("section4HideTextArrow");
		});
	document
		.getElementById("section4InfoFiveTextArrowUp")
		.addEventListener("click", () => {
			document
				.getElementById("section4InfoFiveTextArrowDown")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoFiveTextShort")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoFiveTextLong")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoFiveTextArrowUp")
				.classList.add("section4HideTextArrow");
		});
};
const renderSection_4Step_6 = (title, text, value, country, style) => {
	let node = document.createElement("div");
	node.classList.add("section4Info");
	node.innerHTML = `<div class="section4InfoNumber">
							<div class="section4InfoNumberText ${style.section_4_title_step_6_number}">${
		value + 1
	}</div>
							<h3 class="section4InfoNumberTitle ${style.section_4_title_step_6_title}">
								${title}
							</h3>
						</div>
						<div class="section4InfoText section4InfoSix">
							<div
								id="section4InfoSixTextShort"
								class="section4InfoTextDescription section4InfoSixText ${
									style.section_4_title_step_6_paragraph
								}">
								${reduceString(text[value])}
								<i id="section4InfoSixTextArrowDown" class="fa-solid fa-chevron-down  ${
									style.section_4_title_step_6_paragraph
								} section4Arrow "></i>
							</div>
							<div
								id="section4InfoSixTextLong"
								class="section4InfoTextDescription section4InfoSixText ${
									style.section_4_title_step_6_paragraph
								} section4HideTextArrow">
								${text[value]}
								<i id="section4InfoSixTextArrowup" class="fa-solid fa-chevron-up  ${
									style.section_4_title_step_6_paragraph
								} section4Arrow  section4HideTextArrow "></i>
							</div>
							
							<div class="section4InfoSixImagesContainer">
								<div class="section4InfoSixImageRestContainer">
									<img
										class="section4InfoSixImageRest"
										src="../data/country/${country}/section4/step6/1.webp"
										alt="AcommodationImage" />
									<img
										class="section4InfoSixImageClip"
										src="../data/country/${country}/section4/step6/clip.png"
										alt="clipImage" />
								</div>
								<div
									class="section4InfoSixImageRestContainerBack">
									<img
										class="section4InfoSixImageRestBack"
										src="../data/country/${country}/section4/step6/2.webp"
										alt="backImage" />
								</div>
							</div>
							<img
								class="section4InfoSixImageMap"
								src="../data/country/${country}/section4/step6/map.png"
								alt="img map" />
						</div>
					</div>
					`;
	document.getElementById("containerSection4Info").appendChild(node);
	document
		.getElementById("section4InfoSixTextArrowDown")
		.addEventListener("click", () => {
			document
				.getElementById("section4InfoSixTextArrowDown")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoSixTextShort")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoSixTextLong")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoSixTextArrowup")
				.classList.remove("section4HideTextArrow");
		});
	document
		.getElementById("section4InfoSixTextArrowup")
		.addEventListener("click", () => {
			document
				.getElementById("section4InfoSixTextArrowDown")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoSixTextShort")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoSixTextLong")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoSixTextArrowup")
				.classList.add("section4HideTextArrow");
		});
};
const renderSection_4Step_7 = (title, text, value, country, style) => {
	let node = document.createElement("div");
	node.classList.add("section4Info");
	node.innerHTML = `	<div class="section4InfoNumber">
							<div class="section4InfoNumberText ${style.section_4_title_step_7_number}">${
		value + 1
	}</div>
								<h3 class="section4InfoNumberTitle ${style.section_4_title_step_7_title}">
									${title}
								</h3>
							</div>
							<div class="section4InfoText section4InfoSeven">
								<div
									id="section4InfoSevenTextShort"
									class="section4InfoTextDescription section4InfoSevenText ${
										style.section_4_title_step_7_paragraph
									}">
									${reduceString(text[value])}
									<i id="section4InfoSevenTextArrowDown" class="fa-solid fa-chevron-down  ${
										style.section_4_title_step_7_paragraph
									} section4Arrow "></i>
								</div>
								<div
									id="section4InfoSevenTextLong"
									class="section4InfoTextDescription section4InfoSevenText ${
										style.section_4_title_step_7_paragraph
									} section4HideTextArrow">
									${text[value]}
									<i id="section4InfoSevenTextArrowUp" class="fa-solid fa-chevron-up  ${
										style.section_4_title_step_7_paragraph
									} section4Arrow section4HideTextArrow "></i>
								</div>
								
								<img
									class="section4InfoSevenImage"
									src="../data/country/${country}/section4/step7/hi.png"
									alt="hiImage" />
							</div>
						</div>
					`;
	document.getElementById("containerSection4Info").appendChild(node);
	document
		.getElementById("section4InfoSevenTextArrowDown")
		.addEventListener("click", () => {
			document
				.getElementById("section4InfoSevenTextArrowDown")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoSevenTextShort")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoSevenTextLong")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoSevenTextArrowUp")
				.classList.remove("section4HideTextArrow");
		});
	document
		.getElementById("section4InfoSevenTextArrowUp")
		.addEventListener("click", () => {
			document
				.getElementById("section4InfoSevenTextArrowDown")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoSevenTextShort")
				.classList.remove("section4HideTextArrow");
			document
				.getElementById("section4InfoSevenTextLong")
				.classList.add("section4HideTextArrow");
			document
				.getElementById("section4InfoSevenTextArrowUp")
				.classList.add("section4HideTextArrow");
		});
};

const reduceString = (str) => {
	//FUNCION QUE REDUCE LA DESCRIPCION
	return str.length > 110 ? str.slice(0, 107).concat(" ...") : str;
};
