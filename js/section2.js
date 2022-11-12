export const section_2_start = (section2Info, country, styles) => {
	let containerTravelPlaces = document.getElementById(
		"containerTravelPlaces"
	);
	addSection_2ToContainer(
		containerTravelPlaces,
		section2Info,
		country,
		styles
	);
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

const addSection_2ToContainer = (
	containerTravelPlaces,
	section2Info,
	country,
	styles
) => {
	let node = document.createElement("section");
	node.classList.add("section2StudyAbroad");
	node.innerHTML = `<h2 class="section2SubTitleStudyAbroadResponsive">
					Places to visit
				</h2>
				<h2 class="section2TitleStudyAbroad ${styles}">in ${country}</h2>
				<div class="containerSection2MainStudyAbroad">
					<h2 class="section2SubTitleStudyAbroad">Places to visit</h2>
					<div class="containerSection2MainImagesStudyAbroad">
						<div class="containerSection2MainRowStudyAbroad">
							<div
								id="gridImageContainer1"
								class="containerSection2MainRowImageStudyAbroad">
								<div
									class="containerSection2MainRowImageWrapperOneStudyAbroad">
									<img
										class="section2MainRowImageWrapperImageOneStudyAbroad"
										src="./assets/country/${country}/section2/1.webp"
										alt="country" />
								</div>
								<div
									id="containerSection2MainRowTitle1"
									class="containerSection2MainRowTitleStudyAbroad">
									${section2Info.titles[0]}
								</div>
								<div
									id="containerSection2MainRowSubTitle1"
									class="containerSection2MainRowSubTitleStudyAbroad">
									${section2Info.subtitles[0]}
								</div>
							</div>
							<div
								id="gridImageContainer2"
								class="containerSection2MainRowImageStudyAbroad">
								<div
									class="containerSection2MainRowImageWrapperTwoStudyAbroad">
									<img
										class="section2MainRowImageWrapperImageTwoStudyAbroad"
										src="./assets/country/${country}/section2/2.webp"
										alt="country" />
								</div>
								<div
									id="containerSection2MainRowTitle2"
									class="containerSection2MainRowTitleStudyAbroad">
									${section2Info.titles[1]}
								</div>
								<div
									id="containerSection2MainRowSubTitle2"
									class="containerSection2MainRowSubTitleStudyAbroad">
									${section2Info.subtitles[1]}
								</div>
							</div>
						</div>
						<div class="containerSection2MainRowReverseStudyAbroad">
							<div
								id="gridImageContainer4"
								class="containerSection2MainRowImageStudyAbroad">
								<div
									class="containerSection2MainRowImageWrapperOneStudyAbroad">
									<img
										class="section2MainRowImageWrapperImageOneStudyAbroad"
										src="./assets/country/${country}/section2/4.webp"
										alt="country" />
								</div>
								<div
									id="containerSection2MainRowTitle4"
									class="containerSection2MainRowTitleStudyAbroad">
									${section2Info.titles[3]}
								</div>
								<div
									id="containerSection2MainRowSubTitle4"
									class="containerSection2MainRowSubTitleStudyAbroad">
									${section2Info.subtitles[3]}
								</div>
							</div>
							<div
								id="gridImageContainer3"
								class="containerSection2MainRowImageStudyAbroad">
								<div
									class="containerSection2MainRowImageWrapperTwoStudyAbroad">
									<img
										class="section2MainRowImageWrapperImageTwoStudyAbroad"
										src="./assets/country/${country}/section2/3.webp"
										alt="country" />
								</div>
								<div
									id="containerSection2MainRowTitle3"
									class="containerSection2MainRowTitleStudyAbroad">
									${section2Info.titles[2]}
								</div>
								<div
									id="containerSection2MainRowSubTitle3"
									class="containerSection2MainRowSubTitleStudyAbroad">
									${section2Info.subtitles[2]}
								</div>
							</div>
						</div>
						<div class="containerSection2MainRowStudyAbroad">
							<div
								id="gridImageContainer5"
								class="containerSection2MainRowImageStudyAbroad">
								<div
									class="containerSection2MainRowImageWrapperOneStudyAbroad">
									<img
										class="section2MainRowImageWrapperImageOneStudyAbroad"
										src="./assets/country/${country}/section2/5.webp"
										alt="country" />
								</div>
								<div
									id="containerSection2MainRowTitle5"
									class="containerSection2MainRowTitleStudyAbroad">
									${section2Info.titles[4]}
								</div>
								<div
									id="containerSection2MainRowSubTitle5"
									class="containerSection2MainRowSubTitleStudyAbroad">
									${section2Info.subtitles[4]}
								</div>
							</div>
							<div
								id="gridImageContainer6"
								class="containerSection2MainRowImageStudyAbroad">
								<div
									class="containerSection2MainRowImageWrapperTwoStudyAbroad">
									<img
										class="section2MainRowImageWrapperImageTwoStudyAbroad"
										src="./assets/country/${country}/section2/6.webp"
										alt="country" />
								</div>
								<div
									id="containerSection2MainRowTitle6"
									class="containerSection2MainRowTitleStudyAbroad">
									${section2Info.titles[5]}
								</div>
								<div
									id="containerSection2MainRowSubTitle6"
									class="containerSection2MainRowSubTitleStudyAbroad">
									${section2Info.subtitles[5]}
								</div>
							</div>
						</div>
					</div>
				</div>`;

	containerTravelPlaces.appendChild(node);
};
