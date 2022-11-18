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
								<div class="section4InfoOneRibbonText ${
									style.section_4_title_step_1_paragraph
								}">
									${text[value]}
								</div>
							</div>
						</div>`;
	document.getElementById("containerSection4Info").appendChild(node);
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
								class="section4InfoTextDescription section4InfoTwoText ${
									style.section_4_title_step_2_paragraph
								}">
								${text[value]}
							</div>
						</div>`;
	document.getElementById("containerSection4Info").appendChild(node);
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
								class="section4InfoTextDescription section4InfoFourText ${
									style.section_4_title_step_4_paragraph
								}">
								${text[value]}
							</div>
						</div>`;
	document.getElementById("containerSection4Info").appendChild(node);
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
								class="section4InfoTextDescription section4InfoFiveText ${
									style.section_4_title_step_5_paragraph
								}">
								${text[value]}
							</div>
						</div>`;
	document.getElementById("containerSection4Info").appendChild(node);
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
								class="section4InfoTextDescription section4InfoSixText ${
									style.section_4_title_step_6_paragraph
								}">
								${text[value]}
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
									class="section4InfoTextDescription section4InfoSevenText ${
										style.section_4_title_step_7_paragraph
									}">
									${text[value]}
								</div>
								<img
									class="section4InfoSevenImage"
									src="../data/country/${country}/section4/step7/hi.png"
									alt="hiImage" />
							</div>
						</div>
					`;
	document.getElementById("containerSection4Info").appendChild(node);
};
