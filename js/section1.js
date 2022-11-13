export const section_1_start = (section1Info, country, styles) => {
	let containerTravelPlaces = document.getElementById(
		"containerTravelPlaces"
	);
	addSection_1ToContainer(
		containerTravelPlaces,
		section1Info,
		country,
		styles
	);
	let containerSection1 = document.getElementById("containerSection1");
	let image1 = document.getElementById("section1Image0");
	let image2 = document.getElementById("section1Image1");
	let image3 = document.getElementById("section1Image2");
	let anchor1 = document.getElementById("section1ImageWrapperStudyAbroad0");
	let anchor2 = document.getElementById("section1ImageWrapperStudyAbroad1");
	let anchor3 = document.getElementById("section1ImageWrapperStudyAbroad2");

	let arrowLeft = document.getElementById("section1ArrowLeft");
	let arrowRight = document.getElementById("section1ArrowRight");

	containerSection1.addEventListener("mouseenter", () => {
		arrowLeft.classList.toggle("showArrowsTriangleStudyAbroad");
		arrowRight.classList.toggle("showArrowsTriangleStudyAbroad");
	});
	containerSection1.addEventListener("mouseleave", () => {
		arrowLeft.classList.toggle("showArrowsTriangleStudyAbroad");
		arrowRight.classList.toggle("showArrowsTriangleStudyAbroad");
	});

	arrowLeft.addEventListener("click", () => {
		let image1Src = image1.src;
		let image2Src = image2.src;
		let image3Src = image3.src;

		let anchor1Href = anchor1.href;
		let anchor2Href = anchor2.href;
		let anchor3Href = anchor3.href;

		image1.src = image2Src;
		image2.src = image3Src;
		image3.src = image1Src;

		anchor1.href = anchor2Href;
		anchor2.href = anchor3Href;
		anchor3.href = anchor1Href;
	});

	arrowRight.addEventListener("click", () => {
		let image1Src = image1.src;
		let image2Src = image2.src;
		let image3Src = image3.src;

		let anchor1Href = anchor1.href;
		let anchor2Href = anchor2.href;
		let anchor3Href = anchor3.href;

		image1.src = image3Src;
		image2.src = image1Src;
		image3.src = image2Src;

		anchor1.href = anchor3Href;
		anchor2.href = anchor1Href;
		anchor3.href = anchor2Href;
	});
};

const addSection_1ToContainer = (
	containerTravelPlaces,
	section1Info,
	country,
	styles
) => {
	let node = document.createElement("section");
	node.classList.add("section1StudyAbroad");
	node.innerHTML = `<h2 class="section1TitleStudyAbroad ${
		styles.section_1_title
	}">Events</h2>
				<div
					id="containerSection1"
					class="containerSection1StudyAbroad">
					<img
						id="section1ArrowLeft"
						class="section1ArrowStudyAbroad"
						src="./assets/icons/left.svg"
						alt="" />
					<div class="containerSection1ImageStudyAbroad">
					${section1Info.map(
						(url, index) =>
							`<a
							id="section1ImageWrapperStudyAbroad${index}"
							href=${url}
							target='_blank'
							class=
									"section1ImageWrapperStudyAbroad
									${index + 1 === 1 && "section1ImageWrapperLeftStudyAbroad"}
									${index + 1 === 2 && "section1ImageWrapperMiddleStudyAbroad "}
									${index + 1 === 3 && "section1ImageWrapperRightStudyAbroad"}">
							<img
								id="section1Image${index}"
								class='section1ImageStudyAbroad ${
									index + 1 === 2 &&
									"section1ImageEffectStudyAbroad "
								}'
								src="../assets/country/${country}/section1/${index + 1}.webp"
								alt="${country}Event"
							/>
						</a>`
					)}
						
					</div>
					<img
						id="section1ArrowRight"
						class="section1ArrowStudyAbroad"
						src="./assets/icons/right.svg"
						alt="" />
				</div>`;
	containerTravelPlaces.appendChild(node);
};
