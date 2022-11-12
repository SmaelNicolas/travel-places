export const section_4_Start = (section4Info, country) => {
	let containerTravelPlaces = document.getElementById(
		"containerTravelPlaces"
	);
	addSection_4ToContainer(containerTravelPlaces, section4Info, country);
};
const addSection_4ToContainer = (
	containerTravelPlaces,
	section4Info,
	country
) => {
	let node = document.createElement("section");
	node.classList.add("containerSection4");
	node.innerHTML = `<h2 class="section4Title">
					Prepare to
					<span class="section4TitleSpan">study abroad</span>
				</h2>
				<div id="containerSection4Info" class="containerSection4Info">
					<img
						class="section4InfoImagePlane"
						src="./assets/plane.png"
						alt="" />
				</div>`;
	containerTravelPlaces.appendChild(node);
	section4Info.titles.map((title, index) => {
		if (index === 0) {
			renderSection_4Step_1(title, section4Info.texts, index, country);
		}
		if (index === 1) {
			renderSection_4Step_2(title, section4Info.texts, index);
		}
		if (index === 2) {
			renderSection_4Step_3(title, section4Info.cities, index, country);
		}
		if (index === 3) {
			renderSection_4Step_4(title, section4Info.texts, index);
		}
		if (index === 4) {
			renderSection_4Step_5(title, section4Info.texts, index, country);
		}
		if (index === 5) {
			renderSection_4Step_6(title, section4Info.texts, index, country);
		}
		if (index === 6) {
			renderSection_4Step_7(title, section4Info.texts, index, country);
		}
	});
};

const renderSection_4Step_1 = (title, text, value, country) => {
	let node = document.createElement("div");
	node.classList.add("section4Info");
	node.innerHTML = `
						<div class="section4InfoNumber">
							<div class="section4InfoNumberText">${value + 1}</div>
							<h3 class="section4InfoNumberTitle">${title}</h3>
						</div>
						<div class="section4InfoText section4InfoOne">
							<div class="section4InfoOneImageCountryContainer">
								<img
									class="section4InfoOneImageCountry"
									src="../assets/country/${country}/section4/step1/1.png"
									alt="countryimage" />
								<img
									class="section4InfoOneImageFlag"
									src="../assets/country/${country}/section4/step1/flag.png"
									alt="${country}Flag" />
							</div>
							<div class="section4InfoOneRibbonContainer">
								<div class="section4InfoOneRibbonName">
									${country}
								</div>
								<div class="section4InfoOneRibbonText">
									${text[value]}
								</div>
							</div>
						</div>`;
	document.getElementById("containerSection4Info").appendChild(node);
};
const renderSection_4Step_2 = (title, text, value) => {
	let node = document.createElement("div");
	node.classList.add("section4Info");
	node.innerHTML = `<div class="section4InfoNumber">
							<div class="section4InfoNumberText">${value + 1}</div>
							<h3 class="section4InfoNumberTitle">${title}</h3>
						</div>
						<div class="section4InfoText section4InfoTwo">
							<div
								class="section4InfoTextDescription section4InfoTwoText">
								${text[value]}
							</div>
						</div>`;
	document.getElementById("containerSection4Info").appendChild(node);
};
const renderSection_4Step_3 = (title, cities, value, country) => {
	let node = document.createElement("div");
	node.classList.add("section4Info");
	node.innerHTML = `<div class="section4InfoNumber">
							<div class="section4InfoNumberText">${value}</div>
							<h3 class="section4InfoNumberTitle">${title}</h3>
						</div>
						<div class="section4InfoText section4InfoThree">
							<div
								class="section4InfoTextDescription section4InfoThreeCardsContainer">
								${cities.map((city, index) => {
									return `	<div class='section4InfoThreeCards'>
											<img
												class='section4InfoThreeCardsImage'
												src="../assets/country/${country}/section4/step3/${index + 1}.png"
												alt='${city}Image'
											/>
											<div class='section4InfoThreeCardsCity'>
												${city}
											</div>
										</div>`;
								})}
							</div>
						</div>`;
	document.getElementById("containerSection4Info").appendChild(node);
};
const renderSection_4Step_4 = (title, text, value) => {
	let node = document.createElement("div");
	node.classList.add("section4Info");
	node.innerHTML = `<div class="section4InfoNumber">
							<div class="section4InfoNumberText">${value + 1}</div>
							<h3 class="section4InfoNumberTitle">
								${title}
							</h3>
						</div>
						<div class="section4InfoText section4InfoFour">
							<div
								class="section4InfoTextDescription section4InfoFourText">
								${text[value]}
							</div>
						</div>`;
	document.getElementById("containerSection4Info").appendChild(node);
};
const renderSection_4Step_5 = (title, text, value, country) => {
	let node = document.createElement("div");
	node.classList.add("section4Info");
	node.innerHTML = `<div class="section4InfoNumber">
							<div class="section4InfoNumberText">${value + 1}</div>
							<h3 class="section4InfoNumberTitle">${title}</h3>
						</div>
						<div class="section4InfoText section4InfoFive">
							<img
								src="../assets/country/${country}/section4/step5/tickets.png"
								alt="imgTickets" />
							<div
								class="section4InfoTextDescription section4InfoFiveText">
								${text[value]}
							</div>
						</div>`;
	document.getElementById("containerSection4Info").appendChild(node);
};
const renderSection_4Step_6 = (title, text, value, country) => {
	let node = document.createElement("div");
	node.classList.add("section4Info");
	node.innerHTML = `<div class="section4InfoNumber">
							<div class="section4InfoNumberText">${value + 1}</div>
							<h3 class="section4InfoNumberTitle">
								${title}
							</h3>
						</div>
						<div class="section4InfoText section4InfoSix">
							<div
								class="section4InfoTextDescription section4InfoSixText">
								${text[value]}
							</div>
							<div class="section4InfoSixImagesContainer">
								<div class="section4InfoSixImageRestContainer">
									<img
										class="section4InfoSixImageRest"
										src="../assets/country/${country}/section4/step6/1.png"
										alt="AcommodationImage" />
									<img
										class="section4InfoSixImageClip"
										src="../assets/country/${country}/section4/step6/clip.png"
										alt="clipImage" />
								</div>
								<div
									class="section4InfoSixImageRestContainerBack">
									<img
										class="section4InfoSixImageRestBack"
										src="../assets/country/${country}/section4/step6/2.png"
										alt="backImage" />
								</div>
							</div>
							<img
								class="section4InfoSixImageMap"
								src="../assets/country/${country}/section4/step6/map.png"
								alt="img map" />
						</div>
					</div>
					`;
	document.getElementById("containerSection4Info").appendChild(node);
};
const renderSection_4Step_7 = (title, text, value, country) => {
	let node = document.createElement("div");
	node.classList.add("section4Info");
	node.innerHTML = `	<div class="section4InfoNumber">
							<div class="section4InfoNumberText">${value + 1}</div>
								<h3 class="section4InfoNumberTitle">
									${title}
								</h3>
							</div>
							<div class="section4InfoText section4InfoSeven">
								<div
									class="section4InfoTextDescription section4InfoSevenText">
									${text[value]}
								</div>
								<img
									class="section4InfoSevenImage"
									src="../assets/country/${country}/section4/step7/hi.png"
									alt="hiImage" />
							</div>
						</div>
					`;
	document.getElementById("containerSection4Info").appendChild(node);
};
