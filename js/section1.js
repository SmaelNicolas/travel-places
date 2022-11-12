export const section_1_start = () => {
	let containerTravelPlaces = document.getElementById(
		"containerTravelPlaces"
	);
	addSection_1ToContainer(containerTravelPlaces);
	let containerSection1 = document.getElementById("containerSection1");
	let image1 = document.getElementById("section1Image1");
	let image2 = document.getElementById("section1Image2");
	let image3 = document.getElementById("section1Image3");
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

		image1.src = image2Src;
		image2.src = image3Src;
		image3.src = image1Src;
	});

	arrowRight.addEventListener("click", () => {
		let image1Src = image1.src;
		let image2Src = image2.src;
		let image3Src = image3.src;

		image1.src = image3Src;
		image2.src = image1Src;
		image3.src = image2Src;
	});
};

const addSection_1ToContainer = (containerTravelPlaces) => {
	let node = document.createElement("section");
	node.classList.add("section1StudyAbroad");
	node.innerHTML = `<h2 class="section1TitleStudyAbroad">Events</h2>
				<div
					id="containerSection1"
					class="containerSection1StudyAbroad">
					<img
						id="section1ArrowLeft"
						class="section1ArrowStudyAbroad"
						src="./assets/icons/left.svg"
						alt="" />
					<div class="containerSection1ImageStudyAbroad">
						<div
							class="section1ImageWrapperStudyAbroad section1ImageWrapperLeftStudyAbroad">
							<img
								id="section1Image1"
								class="section1ImageStudyAbroad"
								src="./assets/country/argentina/section1/1.webp"
								alt="1" />
						</div>
						<a
							href="https://google.com.ar"
							target='_blank'
							class="section1ImageWrapperStudyAbroad section1ImageWrapperMiddleStudyAbroad">
							<img
								id="section1Image2"
								class="section1ImageStudyAbroad section1ImageEffectStudyAbroad"
								src="./assets/country/argentina/section1/2.webp"
								alt="2" />
						</a>
						<div
							class="section1ImageWrapperStudyAbroad section1ImageWrapperRightStudyAbroad">
							<img
								id="section1Image3"
								class="section1ImageStudyAbroad"
								src="./assets/country/argentina/section1/3.webp"
								alt="3" />
						</div>
					</div>
					<img
						id="section1ArrowRight"
						class="section1ArrowStudyAbroad"
						src="./assets/icons/right.svg"
						alt="" />
				</div>`;
	containerTravelPlaces.appendChild(node);
};
